package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Product;
import com.example.demo.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository prepo;
	
	public Product getProductById(int id)
	{
		return prepo.findById(id).get();
	}
	
	public List<Product> getAllProducts() 
	{
		
		return prepo.findAll();
	}
	
	public Product saveProduct(Product p)
	{
		return prepo.save(p);
	}
	
	public boolean upload(int id,byte[] photo)
	{
		if(prepo.uploadPhoto(id, photo)==1)
			return true;
		else
			return false;
			
	}
}
