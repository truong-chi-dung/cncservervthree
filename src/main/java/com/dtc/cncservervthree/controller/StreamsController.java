package com.dtc.cncservervthree.controller;

import java.net.MalformedURLException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.xml.bind.JAXBException;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
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

@CrossOrigin(maxAge = 3600)
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

	@GetMapping("streams/partcount/period/{id}")
	public List<PartCountReactive> getPartCountByDeviceIdAndPeriod(@PathVariable String id,
			@RequestParam(value = "startTime", required = false, defaultValue = "") String startTime,
			@RequestParam(value = "endTime", required = false, defaultValue = "") String endTime,
			@RequestParam(value = "shift", required = false, defaultValue = "") String shift) throws ParseException {

		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
		if (startTime.equals("") && endTime.equals("")) {
			Date date = new Date();
			SimpleDateFormat todayDayFormat = new SimpleDateFormat("yyyy-MM-dd");
			String todayDayStr = todayDayFormat.format(date);
			return partCountReactiveService.getByDeviceIdAndPeriod(id,
					new ObjectId(dateFormat.parse(todayDayStr + "T00:00:00")),
					new ObjectId(dateFormat.parse(todayDayStr + "T23:59:59")));			
		} else if (shift.equals("1")) {
			return partCountReactiveService.getByDeviceIdAndPeriod(id,
					new ObjectId(dateFormat.parse(startTime + "T06:00:00")),
					new ObjectId(dateFormat.parse(endTime + "T13:59:59")));
		} else if (shift.equals("2")) {
			return partCountReactiveService.getByDeviceIdAndPeriod(id,
					new ObjectId(dateFormat.parse(startTime + "T14:00:00")),
					new ObjectId(dateFormat.parse(endTime + "T21:59:59")));
		} else if (shift.equals("3")) {
			return partCountReactiveService.getByDeviceIdAndPeriod(id,
					new ObjectId(dateFormat.parse(startTime + "T22:00:00")),
					new ObjectId(dateFormat.parse(endTime + "T05:59:59")));
		} else {
			return partCountReactiveService.getByDeviceIdAndPeriod(id,
					new ObjectId(dateFormat.parse(startTime + "T00:00:00")),
					new ObjectId(dateFormat.parse(endTime + "T23:59:59")));
		}
	}
}
