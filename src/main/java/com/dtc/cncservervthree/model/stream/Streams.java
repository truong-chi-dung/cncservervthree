package com.dtc.cncservervthree.model.stream;

import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;

import lombok.Data;

@Data
@XmlAccessorType(XmlAccessType.FIELD)
public class Streams {
	
	@XmlElement(name = "DeviceStream")
	private List<DeviceStream> deviceStream;
	
}
