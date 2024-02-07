package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Order;
import com.example.demo.entities.OrderedItems;
import com.example.demo.repositories.OrderedItemsRepository;

@Service
public class OrderedItemsService {

	@Autowired
	OrderedItemsRepository oirepo;
	
	public List<OrderedItems> getAll()
	{
		return oirepo.findAll();
	}
	
	public OrderedItems saveOrderedItem(OrderedItems oi)
	{
		return oirepo.save(oi);
	}
	
	public List<OrderedItems> getOrderedItemByOrderId(Order oid)
	{
		return oirepo.getOrderedItemByOrderId(oid);
	}
}
