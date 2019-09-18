package com.dtc.cncservervthree.controller;

import java.net.MalformedURLException;
import java.util.List;

import javax.xml.bind.JAXBException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.dtc.cncservervthree.exception.DeviceNotFoundException;
import com.dtc.cncservervthree.helper.JaxbHelper;
import com.dtc.cncservervthree.model.stream.DeviceStream;
import com.dtc.cncservervthree.model.stream.OperationStatusReactive;
import com.dtc.cncservervthree.model.stream.PartCountReactive;
import com.dtc.cncservervthree.service.DeviceService;
import com.dtc.cncservervthree.service.DeviceStreamService;
import com.dtc.cncservervthree.service.OperationStatusReactiveService;
import com.dtc.cncservervthree.service.PartCountReactiveService;

@RestController
public class StreamsController {

	@Autowired
	JaxbHelper jaxbHelper;

	@Autowired
	DeviceService deviceService;

	@Autowired
	DeviceStreamService deviceStreamService;

	@Autowired
	OperationStatusReactiveService operationStatusReactiveService;
	
	@Autowired
	PartCountReactiveService partCountReactiveService;

	@GetMapping("streams/xml")
	public List<DeviceStream> getAllFromAgent() throws MalformedURLException, ClassNotFoundException, JAXBException {
		return deviceStreamService.getAllDeviceStreamFromAgent();
	}

	@GetMapping("streams/update")
	public List<DeviceStream> updateAllFromDeviceStream()
			throws MalformedURLException, ClassNotFoundException, JAXBException, DeviceNotFoundException {
		return deviceStreamService.updateInfoFromDeviceStream();
	}

	@GetMapping("streams/opstatus")
	public List<OperationStatusReactive> getAllOperationStatus() {
		return operationStatusReactiveService.getAll();
	}
	
	@GetMapping("streams/opstatus/{id}")
	public List<OperationStatusReactive> getOperationStatusByDeviceId(@PathVariable String id) {
		return operationStatusReactiveService.getOpStatusByDeviceId(id);
	}
	
	@GetMapping("streams/partcount")
	public List<PartCountReactive> getAllPartCount() {
		return partCountReactiveService.getAll();
	}
	
	@GetMapping("streams/partcount/{id}")
	public List<PartCountReactive> getPartCountByDeviceId(@PathVariable String id) {
		return partCountReactiveService.getByDeviceId(id);
	}
}
