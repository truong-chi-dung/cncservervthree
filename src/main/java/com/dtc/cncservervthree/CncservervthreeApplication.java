package com.dtc.cncservervthree;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class CncservervthreeApplication {

	public static void main(String[] args) {
		SpringApplication.run(CncservervthreeApplication.class, args);
	}

}
