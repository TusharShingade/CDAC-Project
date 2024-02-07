package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Order;
import com.example.demo.repositories.OrderRepository;

@Service
public class OrderService {

	@Autowired
	OrderRepository orepo;
	
	public List<Order> getAll()
	{
		return orepo.findAll();
	}
	
	public Order getOrderById(int id)
	{
		return orepo.findById(id).get();
	}
	
	public Order saveOrder(Order o)
	{
		return orepo.save(o);
	}
	
	public List<Order> getOrdersByCustId(Customer c)
	{
		return orepo.getOrdersByCustId(c);
	}
}
