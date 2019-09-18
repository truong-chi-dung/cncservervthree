package com.dtc.cncservervthree.model.device;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlValue;

import lombok.Data;

@Data
@XmlAccessorType(XmlAccessType.FIELD)
public class Description {

	@XmlAttribute
	private String manufacturer;
	
	@XmlAttribute
	private String model;
	
	@XmlAttribute
	private String serial;
	
	@XmlValue
	private String value;
}
