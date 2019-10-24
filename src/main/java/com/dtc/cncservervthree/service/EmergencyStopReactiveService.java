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
import com.dtc.cncservervthree.model.stream.EmergencyStopReactive;
import com.dtc.cncservervthree.model.stream.MTConnectStreams;
import com.dtc.cncservervthree.repository.EmergencyStopReactiveRepository;

@EnableAsync
@Service
public class EmergencyStopReactiveService {
	
	private String sampleXmlUrl = "http://localhost:5000/current";	
	private String mtConnectStreamsModelPath = "com.dtc.cncservervthree.model.stream.MTConnectStreams";

	@Autowired
	JaxbHelper jaxbHelper;

	@Autowired
	DeviceService deviceService;

	@Autowired
	EmergencyStopReactiveRepository emergencyStopReactiveRepository;
	
	@Async
	@Scheduled(fixedRate = 10000)
	public void createEmergencyStopLog()
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
				if (componentStream.getName().equals("Controller") && componentStream.getEvents().getEmergencyStop() != null) {
					// After check null, compare the last update value, if it is different then
					// create log
					if (emergencyStopReactiveRepository.existsByDeviceId(deviceStream.getUuid())) {
						List<EmergencyStopReactive> currentEmergencyStopReactives = emergencyStopReactiveRepository
								.findByDeviceIdOrderByIdDesc(deviceStream.getUuid(), PageRequest.of(0, 1));
						if (!currentEmergencyStopReactives.get(0).getEmgStop()
								.equals(componentStream.getEvents().getEmergencyStop())) {
							createNewEmergencyStopReactive(deviceStream.getUuid(),
									componentStream.getEvents().getEmergencyStop());
							// Update value into Device Model
							deviceService.updateDeviceEmgStopInfo(componentStream.getEvents(), deviceStream.getUuid());
							System.out.println("emgStop updated");
						}
					} else {
						createNewEmergencyStopReactive(deviceStream.getUuid(),
								componentStream.getEvents().getEmergencyStop());
					}

				}
			}

		}
	}

	public List<EmergencyStopReactive> testRetrieve(String uuid, PageRequest pageRequest) {
		return emergencyStopReactiveRepository.findByDeviceIdOrderByIdDesc(uuid, pageRequest);
	}

	public void createNewEmergencyStopReactive(String uuid, String emgStop) {
		EmergencyStopReactive emergencyStopReactive = new EmergencyStopReactive();
		emergencyStopReactive.setDeviceId(uuid);
		emergencyStopReactive.setEmgStop(emgStop);
		emergencyStopReactiveRepository.save(emergencyStopReactive);
		System.out.println("emgStop created");
	}
	
	public List<EmergencyStopReactive> getAll() {
		return emergencyStopReactiveRepository.findAll();
	}
	
	public List<EmergencyStopReactive> getOpStatusByDeviceId(String id){
		return emergencyStopReactiveRepository.findByDeviceId(id);
	}
}
