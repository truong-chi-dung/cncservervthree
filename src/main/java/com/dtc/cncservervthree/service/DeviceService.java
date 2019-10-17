package com.dtc.cncservervthree.service;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.xml.bind.JAXBException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import com.dtc.cncservervthree.exception.DeviceNotFoundException;
import com.dtc.cncservervthree.helper.JaxbHelper;
import com.dtc.cncservervthree.model.device.Device;
import com.dtc.cncservervthree.model.device.DeviceCsv;
import com.dtc.cncservervthree.model.stream.Events;
import com.dtc.cncservervthree.model.device.MTConnectDevices;
import com.dtc.cncservervthree.repository.DeviceRepository;

@Service
public class DeviceService {

	private String deviceXmlUrl = "http://localhost:5000";
	private String mtConnectDevicesModelPath = "com.dtc.cncservervthree.model.device.MTConnectDevices";

	@Autowired
	DeviceRepository deviceRepository;

	@Autowired
	JaxbHelper jaxbHelper;

	public List<Device> getAllDevice() {
		return deviceRepository.findAll(Sort.by(Direction.ASC,"description.model"));
	}

	public void deleteNonExistDevice() throws MalformedURLException, ClassNotFoundException, JAXBException {
		URL url = new URL(deviceXmlUrl);
		MTConnectDevices mtConnectDevices = (MTConnectDevices) JaxbHelper.unmarshall(url,
				Class.forName(mtConnectDevicesModelPath));
		List<Device> xmlDeviceList = mtConnectDevices.getDevices().getDeviceList();
		List<Device> dbDeviceList = deviceRepository.findAll();
		ArrayList<String> nonExistDeviceListId = new ArrayList<String>();
		
		for (Device dbDevice : dbDeviceList) {
			boolean isDeviceExist = false;
			for (Device xmlDevice : xmlDeviceList) {
				if (xmlDevice.getId().equals(dbDevice.getId())) {
					isDeviceExist = true;
				}
			}
			if (isDeviceExist == false) {
				nonExistDeviceListId.add(dbDevice.getId());
			}
		}

		for (String nonExistDeviceId : nonExistDeviceListId) {
			deviceRepository.deleteById(nonExistDeviceId);
		}

	}

	public List<Device> getAllDeviceFromAgent() throws MalformedURLException, ClassNotFoundException, JAXBException {
		URL url = new URL(deviceXmlUrl);
		MTConnectDevices mtConnectDevices = (MTConnectDevices) JaxbHelper.unmarshall(url,
				Class.forName(mtConnectDevicesModelPath));
		return mtConnectDevices.getDevices().getDeviceList();
	}

	public List<Device> createDevice(List<Device> devices) {
		for (Device device : devices) {
			if (!deviceRepository.existsById(device.getId()) && !device.getId().equals("dev_01")) {
				deviceRepository.save(device);
			}
		}
		return deviceRepository.findAll();
	}

	public List<Device> createDeviceFromAgent() throws ClassNotFoundException, JAXBException, MalformedURLException {
		URL url = new URL(deviceXmlUrl);
		MTConnectDevices mtConnectDevices = (MTConnectDevices) JaxbHelper.unmarshall(url,
				Class.forName(mtConnectDevicesModelPath));
		return this.createDevice(mtConnectDevices.getDevices().getDeviceList());
	}

	public Optional<Device> updateDeviceInfo(Events events, String id) throws DeviceNotFoundException {
		if (!deviceRepository.existsById(id)) {
			throw new DeviceNotFoundException("Device Not Found");
		}
		return deviceRepository.findById(id).map(device -> {
			device.setCurrentOperationStatus(events.getExecution());
			device.setCurrentPartsCount(events.getPartCount());
			return deviceRepository.save(device);
		});
	}

	public Optional<Device> getOnedeviceById(String id) throws DeviceNotFoundException {
		if (!deviceRepository.existsById(id)) {
			throw new DeviceNotFoundException("Device Not Found");
		}
		return deviceRepository.findById(id);
	}
	
	public List<DeviceCsv> translateToDeviceCsv(List<Device> devices) {
		List<DeviceCsv> devicesCsv = new ArrayList<>();
		for (Device device : devices) {
			devicesCsv.add(new DeviceCsv(device.getDescription().getManufacturer(), device.getDescription().getModel(), device.getCurrentPartsCount(), device.getCurrentOperationStatus()));
		}
		return devicesCsv;
	}
	
}
