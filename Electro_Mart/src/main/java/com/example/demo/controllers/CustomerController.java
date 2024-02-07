package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class CustomerController {
	
	@Autowired
	CustomerService cservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	@Autowired
	JavaMailSender sender;
	
	@PostMapping("/regCustomer")
	public boolean regCustomer(@RequestBody CustomerReg c)
	{
		boolean flag=true;
		try 
		{
			Role r=rservice.getRole(3);
			Login l=new Login(c.getFname(),c.getLname(),c.getUsername(),c.getPassword(),c.getContact_no(),c.getEmail(),c.getAddress(),c.getCity(),true,0,r);
			
			Login saved = lservice.saveLogin(l);
			
			Customer csave=new Customer(saved);
			Customer c1= cservice.saveCustomer(csave);
			
			SimpleMailMessage mailmsg=new SimpleMailMessage();
			mailmsg.setFrom("electromart220823@gmail.com");
			
			//System.out.println(l.getEmail());
			mailmsg.setTo(l.getEmail());
			mailmsg.setSubject("Electro Mart");
			mailmsg.setText("Thank you for visiting Electro-Mart");
			
			sender.send(mailmsg);
			 
			System.out.println(c.getFname()+" added succefully");
			
		}
		catch(Exception e)
		{
			flag=false;
		}
		
		return flag;
	}
	
	@GetMapping("/getCustomer")
	public Customer getCustomer(@RequestParam("login_id") int login_id)
	{
		Login l=lservice.getLoginById(login_id);
		return cservice.getCustomer(l);
	}
	
	@GetMapping("/getallcustomers")
	public List<Customer> getAll()
	{
		return cservice.getAll();
	}
	
}
