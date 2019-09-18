package com.dtc.cncservervthree.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.dtc.cncservervthree.model.stream.PartCountReactive;

@Repository
public interface PartCountReactiveRepository extends MongoRepository<PartCountReactive, String> {

	public PartCountReactive findByDeviceIdOrderByIdDesc(String uuid);

	public boolean existsByDeviceId(String uuid);

	public List<PartCountReactive> findByDeviceIdOrderByIdDesc(String uuid, PageRequest of);

}
