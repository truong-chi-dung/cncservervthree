package com.dtc.cncservervthree.service;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import javax.xml.bind.JAXBException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.dtc.cncservervthree.exception.DeviceNotFoundException;
import com.dtc.cncservervthree.helper.JaxbHelper;
import com.dtc.cncservervthree.model.stream.ComponentStream;
import com.dtc.cncservervthree.model.stream.DeviceStream;
import com.dtc.cncservervthree.model.stream.MTConnectStreams;
import com.dtc.cncservervthree.model.stream.OperationStatusReactive;
import com.dtc.cncservervthree.repository.OperationStatusReactiveRepository;

@EnableAsync
@Service
public class OperationStatusReactiveService {
	
	private String sampleXmlUrl = "http://localhost:5000/current";	
	private String mtConnectStreamsModelPath = "com.dtc.cncservervthree.model.stream.MTConnectStreams";

	@Autowired
	JaxbHelper jaxbHelper;

	@Autowired
	DeviceService deviceService;

	@Autowired
	OperationStatusReactiveRepository operationStatusReactiveRepository;

	@Async
	@Scheduled(fixedRate = 5000)
	public void createOperationStatusLog()
			throws ClassNotFoundException, JAXBException, DeviceNotFoundException, MalformedURLException {
		MTConnectStreams mtConnectStreams = null;
		// Mapping information from xml to mtConnectStreams object;
		URL url = new URL(sampleXmlUrl);
		mtConnectStreams = (MTConnectStreams) JaxbHelper.unmarshall(url,
				Class.forName(mtConnectStreamsModelPath));

		// Loops through deviceStream which is each device has unique id
		for (DeviceStream deviceStream : mtConnectStreams.getStreams().getDeviceStream()) {
			// Loops through componentStream and find "path" name attribute to get Event
			// element.
			for (ComponentStream componentStream : deviceStream.getComponentStream()) {
				if (componentStream.getName().equals("path") && componentStream.getEvents().getExecution() != null) {
					// After check null, compare the last update value, if it is different then
					// create log
					if (operationStatusReactiveRepository.existsByDeviceId(deviceStream.getUuid())) {
						List<OperationStatusReactive> currentOperationStatusReactives = operationStatusReactiveRepository
								.findByDeviceIdOrderByIdDesc(deviceStream.getUuid(), PageRequest.of(0, 1));
						if (!currentOperationStatusReactives.get(0).getOperationStatus()
								.equals(componentStream.getEvents().getExecution())) {
							createNewOperationStatusReactive(deviceStream.getUuid(),
									componentStream.getEvents().getExecution());
							// Update value into Device Model
							deviceService.updateDeviceInfo(componentStream.getEvents(), deviceStream.getUuid());
						}
					} else {
						createNewOperationStatusReactive(deviceStream.getUuid(),
								componentStream.getEvents().getExecution());
					}

				}
			}

		}
	}

	public List<OperationStatusReactive> testRetrieve(String uuid, PageRequest pageRequest) {
		return operationStatusReactiveRepository.findByDeviceIdOrderByIdDesc(uuid, pageRequest);
	}

	public void createNewOperationStatusReactive(String uuid, String execution) {
		OperationStatusReactive operationStatusReactive = new OperationStatusReactive();
		operationStatusReactive.setDeviceId(uuid);
		operationStatusReactive.setOperationStatus(execution);
		operationStatusReactiveRepository.save(operationStatusReactive);
		System.out.println("operation status updated");
	}
	
	public List<OperationStatusReactive> getAll() {
		return operationStatusReactiveRepository.findAll();
	}

}
