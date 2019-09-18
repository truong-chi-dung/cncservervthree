package com.dtc.cncservervthree.model.device;

import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "device")
@XmlAccessorType(XmlAccessType.FIELD)
public class Devices {

	@XmlElement(name = "Device")
	private List<Device> deviceList;

}
