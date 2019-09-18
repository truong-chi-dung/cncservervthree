package com.dtc.cncservervthree.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "XML Not Found")
public class XmlNotFoundException extends Exception {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public XmlNotFoundException(String errorMessage) {
		super(errorMessage);
	}
}
