package com.dtc.cncservervthree.helper;

import java.io.File;
import java.net.URL;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.springframework.stereotype.Component;

@Component
public class JaxbHelper {

	public static <T> Object unmarshall(File xmlFile, Class<T> unmarshallClass) throws JAXBException {
		JAXBContext jaxbContext = JAXBContext.newInstance(unmarshallClass);
		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
		return jaxbUnmarshaller.unmarshal(xmlFile);
	}

	public static <T> Object unmarshall(URL url, Class<T> unmarshallClass) throws JAXBException {
		JAXBContext jaxbContext = JAXBContext.newInstance(unmarshallClass);
		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
		return jaxbUnmarshaller.unmarshal(url);
	}
}
