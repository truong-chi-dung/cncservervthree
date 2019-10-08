package com.dtc.cncservervthree.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.dtc.cncservervthree.model.stream.PartCountReactive;

@Repository
public interface PartCountReactiveRepository extends MongoRepository<PartCountReactive, String> {

	public PartCountReactive findByDeviceIdOrderByIdDesc(String uuid);

	public boolean existsByDeviceId(String uuid);

	public List<PartCountReactive> findByDeviceIdOrderByIdDesc(String uuid, PageRequest of);
	
	public List<PartCountReactive> findByDeviceId(String uuid);
	
	@Query("{'deviceId': ?0, '_id': { $gte: ?1, $lte: ?2 }}")
	public List<PartCountReactive> queryByDeviceIdAndPeriod(String uuid, ObjectId objIdStartTime, ObjectId objIdEndTime);
	
	@Query("{'deviceId': ?0, '_id': { $gte: ?1, $lte: ?2 }}, 'shift': ?3")
	public List<PartCountReactive> queryByDeviceIdAndPeriodAndShift(String uuid, ObjectId objIdStartTime, ObjectId objIdEndTime, String shift);

}
