package com.dtc.cncservervthree.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.dtc.cncservervthree.model.stream.EmergencyStopReactive;

public interface EmergencyStopReactiveRepository extends MongoRepository<EmergencyStopReactive, String>  {

	public List<EmergencyStopReactive> findByDeviceIdOrderByIdDesc(String uuid, PageRequest pageRequest);

	public boolean existsByDeviceId(String uuid);
	
	public List<EmergencyStopReactive> findByDeviceId(String uuid);
}
