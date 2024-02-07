package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.Vendor;
import com.example.demo.repositories.VendorRepository;

@Service
public class VendorService {
	
	@Autowired
	VendorRepository vrepo;
	
	public Vendor saveVendor(Vendor v)
	{
		return vrepo.save(v);
	}
	
	public Vendor getVendorById(Login login_id)
	{
		return vrepo.getVendorById(login_id);
	}
	
	public List<Vendor> getall()
	{
		return vrepo.findAll();
		
	}
	
	public Vendor getVendor(int id)
	{
		return vrepo.findById(id).get();
	}
	

}
