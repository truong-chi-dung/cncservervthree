package com.dtc.cncservervthree.controller;

import java.net.MalformedURLException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.JAXBException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.dtc.cncservervthree.exception.DeviceNotFoundException;
import com.dtc.cncservervthree.model.device.Device;
import com.dtc.cncservervthree.model.device.DeviceCsv;
import com.dtc.cncservervthree.service.DeviceService;
import com.opencsv.CSVWriter;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("api")
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
	
	@GetMapping("devices/delete")
	public void deleteDevices() throws MalformedURLException, ClassNotFoundException, JAXBException {
		deviceService.deleteNonExistDevice();
	}
	
	@GetMapping("devices/{id}")
	public Optional<Device> getDevice(@PathVariable String id) {
		try {
			return deviceService.getOnedeviceById(id);
		} catch (DeviceNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Device Not Found", e);
		}

	}
	
	@PutMapping(value = "devices/update/{id}", consumes = "application/json", produces = "application/json")
//	@PutMapping("devices/update/{id}")
	public Optional<Device> updateDevice(@RequestBody Device device, @PathVariable String id) throws DeviceNotFoundException {
		return deviceService.updateDevice(device, id);
	}
	
	@GetMapping("devices/csv")
	public void exportCSV(HttpServletResponse response) throws Exception {
		
		Date today = new Date();
		
		//set file name and content type
		String filename = today + "_partcount.csv";
		
		response.setContentType("text/csv");
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + filename + "\"");
        
        StatefulBeanToCsv<DeviceCsv> writer = new StatefulBeanToCsvBuilder<DeviceCsv>(response.getWriter())
        		.withQuotechar(CSVWriter.NO_QUOTE_CHARACTER)
        		.withSeparator(CSVWriter.DEFAULT_SEPARATOR)
                .withOrderedResults(true)
                .build();
        
      //write all users to csv file
        writer.write(deviceService.translateToDeviceCsv(deviceService.getAllDevice()));
	}
	
}
