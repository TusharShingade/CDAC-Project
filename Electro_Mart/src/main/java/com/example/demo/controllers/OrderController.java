package com.example.demo.controllers;


import java.sql.Date;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.List;

import org.hibernate.type.LocalDateType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Order;
import com.example.demo.entities.OrderReg;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.OrderService;

@RestController
@CrossOrigin(origins = "*")
public class OrderController {
	
	@Autowired
	OrderService oservice;
	
	@Autowired
	CustomerService cservice;
	
	@Autowired
	LoginService lservice;
	
	@GetMapping("/getAllOrders")
	public List<Order> getAllOrders()
	{
		return oservice.getAll();
	}
	
	@GetMapping("/getOrderById")
	public Order getOrderById(@PathVariable("id") int id)
	{
		return oservice.getOrderById(id);
	}
	
	@PostMapping("/saveOrder")
	public Order saveOrder(Order o)
	{
		return oservice.saveOrder(o);
	}
	
	@GetMapping("getOrdersByCustId")
	public List<Order> getOrdersByCustId(@RequestParam("cust_id") int custid)
	{
		Customer cust=cservice.getCustomerByCustId(custid);
		return oservice.getOrdersByCustId(cust);
	}
	
	@PostMapping("/placeOrder")
	public Order placeOrder(@RequestBody OrderReg or)
	{
		System.out.println(or);
//		Login l=lservice.getLoginById(or.getCust_id());
//		Customer co1=cservice.getCustomer(l);
		Customer co=cservice.getCustomerByCustId(or.getCust_id());
		
			LocalDate date = LocalDate.now();
			Date d = Date.valueOf(date);
			
		
		Order order1=new Order(co, d, or.getTotal_amount(), or.getShipping_address());
		
		Order od =oservice.saveOrder(order1);
		System.out.println(od);
		return od;
	}

}
