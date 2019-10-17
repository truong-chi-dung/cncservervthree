package com.dtc.cncservervthree.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.dtc.cncservervthree.model.device.Device;

@Repository
public interface DeviceRepository extends MongoRepository<Device, String> {
	
	public List<Device> findAll(Sort sort);
	
}
