package com.dtc.cncservervthree.model.device;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import lombok.Data;

@Data
@XmlRootElement(name = "MTConnectDevices")
@XmlAccessorType(XmlAccessType.FIELD)
public class MTConnectDevices {

	@XmlElement(name = "Devices")
	private Devices devices;

}
