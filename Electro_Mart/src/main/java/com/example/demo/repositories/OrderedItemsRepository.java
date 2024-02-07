package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Order;
import com.example.demo.entities.OrderedItems;

@Repository
public interface OrderedItemsRepository extends JpaRepository<OrderedItems, Integer> {

	@Query("select oi from OrderedItems oi where order_id= :oid")
	public List<OrderedItems> getOrderedItemByOrderId(Order oid);
}
