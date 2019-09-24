package com.dtc.cncservervthree.controller;

import java.net.MalformedURLException;
import java.util.List;
import java.util.Optional;

import javax.xml.bind.JAXBException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.dtc.cncservervthree.exception.DeviceNotFoundException;
import com.dtc.cncservervthree.model.device.Device;
import com.dtc.cncservervthree.service.DeviceService;

@CrossOrigin(maxAge = 3600)
@RestController
public class DevicesController {

	@Autowired
	DeviceService deviceService;

	@GetMapping("devices")
	public List<Device> getAll() {
		return deviceService.getAllDevice();
	}
	
	@GetMapping("devices/xml")
	public List<Device> getAllFromAgent() throws MalformedURLException, ClassNotFoundException, JAXBException {
		return deviceService.getAllDeviceFromAgent();
	}
	
	@GetMapping("devices/create")
	public List<Device> createDevices() throws MalformedURLException, ClassNotFoundException, JAXBException {
		return deviceService.createDeviceFromAgent();
	}
	
	@GetMapping("devices/{id}")
	public Optional<Device> getDevice(@PathVariable String id) {
		try {
			return deviceService.getOnedeviceById(id);
		} catch (DeviceNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Device Not Found", e);
		}

	}
}
