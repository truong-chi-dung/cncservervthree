package com.dtc.cncservervthree.model.stream;

import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

import lombok.Data;

@Data
@XmlAccessorType(XmlAccessType.FIELD)
public class DeviceStream {

	@XmlAttribute
	private String name;

	@XmlAttribute
	private String uuid;
	
	@XmlElement(name = "ComponentStream")
	private List<ComponentStream> componentStream;
}
