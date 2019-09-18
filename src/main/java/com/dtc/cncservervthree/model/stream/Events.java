package com.dtc.cncservervthree.model.stream;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import lombok.Data;

@Data
@XmlAccessorType(XmlAccessType.FIELD)
public class Events {
	
	private String Execution;

	private String ControllerMode;

	private String PartCount;
}
