package com.dtc.cncservervthree.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Device Not Found")
public class DeviceNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public DeviceNotFoundException(String errorMessage) {
		super(errorMessage);
	}
}
