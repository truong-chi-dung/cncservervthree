package com.dtc.cncservervthree.model.stream;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import lombok.Data;

@Data
@XmlRootElement(name = "MTConnectStreams", namespace = "urn:mtconnect.org:MTConnectStreams:1.3")
@XmlAccessorType(XmlAccessType.FIELD)
public class MTConnectStreams {

//	@XmlElement(name = "Header")
//	private Header header;

	private Streams Streams;
	
}
