package com.dtc.cncservervthree.model.stream;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class PartCountReactive {

	@Id
	private String id;
	
	private String deviceId;
	
	private String partCount;
}
