package com.dtc.cncservervthree.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.dtc.cncservervthree.model.stream.OperationStatusReactive;

@Repository
public interface OperationStatusReactiveRepository extends MongoRepository<OperationStatusReactive, String> {

	public List<OperationStatusReactive> findByDeviceIdOrderByIdDesc(String uuid, PageRequest pageRequest);

	public boolean existsByDeviceId(String uuid);
	
	public List<OperationStatusReactive> findByDeviceId(String uuid);

}
