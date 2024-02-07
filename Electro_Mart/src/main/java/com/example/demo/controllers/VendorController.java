package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.Vendor;
import com.example.demo.entities.VendorReg;
import com.example.demo.repositories.VendorRepository;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
import com.example.demo.services.VendorService;

@CrossOrigin("*")
@RestController
public class VendorController {
	
	@Autowired
	VendorService vservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	
	
	@PostMapping("/regVendor")
	public Vendor regVendor(@RequestBody VendorReg vr)
	{
		Role r=rservice.getRole(2);
		Login l=new Login(vr.getFname(), vr.getLname(), vr.getUsername(), vr.getPassword(), vr.getContact_no(), vr.getEmail(), vr.getAddress(), vr.getCity(), true, 0, r);
		
		Login saved = lservice.saveLogin(l);
		
		Vendor vsave=new Vendor(vr.getShop_name(),vr.getShopact_licence(), vr.getAadhar(), saved);
		
		System.out.println(saved.getId());
		
		return vservice.saveVendor(vsave);
		
	}
	
	@GetMapping("/getVendor")
	public Vendor getVendor(@RequestParam("login_id") int login_id)
	{
		Login l=lservice.getLoginById(login_id);
		return vservice.getVendorById(l);
	}
	
	@GetMapping("/getallvendor")
	public List<Vendor> getAll()
	{
		return vservice.getall();
	}
	
	
	
	

}
