package com.dtc.cncservervthree.helper;

import java.io.File;
import java.net.URL;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.springframework.stereotype.Component;

@Component
public class JaxbHelper {

	public static <T> T unmarshall(File xmlFile, Class<T> unmarshallClass) throws JAXBException {
		JAXBContext jaxbContext = JAXBContext.newInstance(unmarshallClass);
		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
		@SuppressWarnings("unchecked")
		T object = (T) jaxbUnmarshaller.unmarshal(xmlFile);
		return object;
	}

	public static <T> T unmarshall(URL url, Class<T> unmarshallClass) throws JAXBException {
		JAXBContext jaxbContext = JAXBContext.newInstance(unmarshallClass);
		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
		@SuppressWarnings("unchecked")
		T object = (T) jaxbUnmarshaller.unmarshal(url);
		return object;
	}
}
