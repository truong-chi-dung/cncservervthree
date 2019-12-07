package com.dtc.cncservervthree.model.device;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DeviceCsv {

	private String lineNo;

	private String name;

	private int partsCount;

	private String partNo;

	private int target;

	private String status;

}
