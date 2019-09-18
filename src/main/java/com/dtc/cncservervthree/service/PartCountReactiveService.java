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
import com.dtc.cncservervthree.model.stream.PartCountReactive;
import com.dtc.cncservervthree.repository.PartCountReactiveRepository;

@EnableAsync
@Service
public class PartCountReactiveService {

	private String sampleXmlUrl = "http://localhost:5000/current";
	private String mtConnectStreamsModelPath = "com.dtc.cncservervthree.model.stream.MTConnectStreams";

	@Autowired
	JaxbHelper jaxbHelper;

	@Autowired
	DeviceService deviceService;

	@Autowired
	PartCountReactiveRepository partCountReactiveRepository;

	@Async
	@Scheduled(fixedRate = 5000)
	public void createPartCountLog()
			throws ClassNotFoundException, JAXBException, DeviceNotFoundException, MalformedURLException {
		MTConnectStreams mtConnectStreams = null;
		// Mapping information from xml to mtConnectStreams object;
		URL url = new URL(sampleXmlUrl);
		mtConnectStreams = (MTConnectStreams) JaxbHelper.unmarshall(url, Class.forName(mtConnectStreamsModelPath));

		// Loops through deviceStream which is each device has unique id
		for (DeviceStream deviceStream : mtConnectStreams.getStreams().getDeviceStream()) {
			// Loops through componentStream and find "path" name attribute to get Event
			// element.
			for (ComponentStream componentStream : deviceStream.getComponentStream()) {
				if (componentStream.getName().equals("path") && componentStream.getEvents().getPartCount() != null) {
					// After check null, compare the last update value, if it is different then
					// create log
					if (partCountReactiveRepository.existsByDeviceId(deviceStream.getUuid())) {
						List<PartCountReactive> currentPartCountReactives = partCountReactiveRepository
								.findByDeviceIdOrderByIdDesc(deviceStream.getUuid(), PageRequest.of(0, 1));
						if (!currentPartCountReactives.get(0).getPartCount()
								.equals(componentStream.getEvents().getPartCount())) {
							createNewPartCountReactive(deviceStream.getUuid(),
									componentStream.getEvents().getPartCount());
							// Update value into Device Model
							deviceService.updateDeviceInfo(componentStream.getEvents(), deviceStream.getUuid());
						}
					} else {
						createNewPartCountReactive(deviceStream.getUuid(), componentStream.getEvents().getPartCount());
					}
				}
			}

		}
	}

	public void createNewPartCountReactive(String uuid, String partCount) {
		PartCountReactive partCountReactive = new PartCountReactive();
		partCountReactive.setDeviceId(uuid);
		partCountReactive.setPartCount(partCount);
		partCountReactiveRepository.save(partCountReactive);
		System.out.println("part count updated");
	}
	
	public List<PartCountReactive> getAll() {
		return partCountReactiveRepository.findAll();
	}
	
	public List<PartCountReactive> getByDeviceId(String id) {
		return partCountReactiveRepository.findByDeviceId(id);
	}
}
