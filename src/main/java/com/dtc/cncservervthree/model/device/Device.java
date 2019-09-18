package com.dtc.cncservervthree.model.device;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

import lombok.Data;

@Data
@XmlAccessorType(XmlAccessType.FIELD)
public class Device {

	@XmlElement(name = "Description")
	private Description description;
	
	@XmlAttribute
	private String id;
	
	@XmlAttribute
	private String name;
	
	@XmlAttribute
	private String uuid;
	
	private String currentOperationStatus;	
	
	private String currentPartsCount;

	
}
