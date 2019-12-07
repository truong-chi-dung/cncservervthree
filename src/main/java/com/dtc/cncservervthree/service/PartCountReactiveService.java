package com.dtc.cncservervthree.service;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import javax.xml.bind.JAXBException;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.dtc.cncservervthree.exception.DeviceNotFoundException;
import com.dtc.cncservervthree.helper.JaxbHelper;
import com.dtc.cncservervthree.model.device.Device;
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
	@Scheduled(fixedRate = 8000)
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
						// Check if the new part count is different from previous value and not equal to
						// UNAVAILABLE.
						if (!currentPartCountReactives.get(0).getPartCount()
								.equals(componentStream.getEvents().getPartCount())
								&& !componentStream.getEvents().getPartCount().equals("UNAVAILABLE")) {
							// Create part count log
							if (LocalTime.now().isAfter(LocalTime.parse("06:00:00"))
									&& LocalTime.now().isBefore(LocalTime.parse("13:59:59"))) {
								createNewPartCountReactive(deviceStream.getUuid(),
										componentStream.getEvents().getPartCount(), "1");
							} else if (LocalTime.now().isAfter(LocalTime.parse("14:00:00"))
									&& LocalTime.now().isBefore(LocalTime.parse("21:59:59"))) {
								createNewPartCountReactive(deviceStream.getUuid(),
										componentStream.getEvents().getPartCount(), "2");
							} else {
								createNewPartCountReactive(deviceStream.getUuid(),
										componentStream.getEvents().getPartCount(), "3");
							}
							// Update value into Device Model
							deviceService.updateDeviceInfo(componentStream.getEvents(), deviceStream.getUuid());
						}
					} else {
						// Create part count log
						if (LocalTime.now().isAfter(LocalTime.parse("06:00:00"))
								&& LocalTime.now().isBefore(LocalTime.parse("13:59:59"))) {
							createNewPartCountReactive(deviceStream.getUuid(),
									componentStream.getEvents().getPartCount(), "1");
						} else if (LocalTime.now().isAfter(LocalTime.parse("14:00:00"))
								&& LocalTime.now().isBefore(LocalTime.parse("21:59:59"))) {
							createNewPartCountReactive(deviceStream.getUuid(),
									componentStream.getEvents().getPartCount(), "2");
						} else {
							createNewPartCountReactive(deviceStream.getUuid(),
									componentStream.getEvents().getPartCount(), "3");
						}
					}
				}
			}

		}
	}

	public void createNewPartCountReactive(String uuid, String partCount, String shift) {
		PartCountReactive partCountReactive = new PartCountReactive();
		partCountReactive.setDeviceId(uuid);
		partCountReactive.setPartCount(partCount);
		partCountReactive.setShift(shift);
		partCountReactiveRepository.save(partCountReactive);
		System.out.println("part count updated");
	}

	public List<PartCountReactive> getAll() {
		return partCountReactiveRepository.findAll();
	}

	public List<PartCountReactive> getByDeviceId(String id) {
		return partCountReactiveRepository.findByDeviceId(id);
	}

	public List<PartCountReactive> getByDeviceIdAndPeriod(String id, ObjectId objIdStartTime, ObjectId objIdEndTime) {
		return partCountReactiveRepository.queryByDeviceIdAndPeriod(id, objIdStartTime, objIdEndTime);
	}
}
