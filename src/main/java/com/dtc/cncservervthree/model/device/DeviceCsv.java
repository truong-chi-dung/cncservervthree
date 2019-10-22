package com.dtc.cncservervthree.model.device;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DeviceCsv {

	private String name;

	private String lineNo;
	
	private String partsCount;
		
	private String status;	
	
}
