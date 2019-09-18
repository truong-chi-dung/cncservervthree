package com.dtc.cncservervthree.service;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import javax.xml.bind.JAXBException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dtc.cncservervthree.exception.DeviceNotFoundException;
import com.dtc.cncservervthree.helper.JaxbHelper;
import com.dtc.cncservervthree.model.stream.DeviceStream;
import com.dtc.cncservervthree.model.stream.MTConnectStreams;
import com.dtc.cncservervthree.model.stream.ComponentStream;

@Service
public class DeviceStreamService {

	@Autowired
	JaxbHelper jaxbHelper;

	@Autowired
	DeviceService deviceService;

	private String sampleXmlUrl = "http://localhost:5000/current";
	private String mtConnectStreamsModelPath = "com.dtc.cncservervthree.model.stream.MTConnectStreams";

	public List<DeviceStream> getAllDeviceStreamFromAgent()
			throws MalformedURLException, ClassNotFoundException, JAXBException {
		URL url = new URL(sampleXmlUrl);
		MTConnectStreams mtConnectStreams = (MTConnectStreams) JaxbHelper.unmarshall(url,
				Class.forName(mtConnectStreamsModelPath));
		return mtConnectStreams.getStreams().getDeviceStream();
	}

	public List<DeviceStream> updateInfoFromDeviceStream()
			throws MalformedURLException, ClassNotFoundException, JAXBException, DeviceNotFoundException {
		URL url = new URL(sampleXmlUrl);
		MTConnectStreams mtConnectStreams = (MTConnectStreams) JaxbHelper.unmarshall(url,
				Class.forName(mtConnectStreamsModelPath));
		for (DeviceStream deviceStream : mtConnectStreams.getStreams().getDeviceStream()) {
			for (ComponentStream componentStream : deviceStream.getComponentStream()) {
				if (componentStream.getName().equals("path")) {
					deviceService.updateDeviceInfo(componentStream.getEvents(), deviceStream.getUuid());
				}
			}

		}

		return mtConnectStreams.getStreams().getDeviceStream();
	}

}
