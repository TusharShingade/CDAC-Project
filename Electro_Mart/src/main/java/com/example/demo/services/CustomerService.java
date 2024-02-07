package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.repositories.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	CustomerRepository crepo;
	
	
	public Customer saveCustomer(Customer c)
	{
		return crepo.save(c);
	}
	
	public Customer getCustomer(Login login_id)
	{
		return crepo.getCustomerById(login_id);
	}
	
	public List<Customer> getAll()
	{
		return crepo.findAll();
	}
	

}
