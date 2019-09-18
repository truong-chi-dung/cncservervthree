package com.dtc.cncservervthree.model.stream;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

import lombok.Data;

@Data
@XmlAccessorType(XmlAccessType.FIELD)
public class ComponentStream {

	@XmlAttribute
	private String componentId;

	@XmlAttribute
	private String component;

	@XmlAttribute
	private String name;

	@XmlElement(name = "Events")
	private Events events;
}
