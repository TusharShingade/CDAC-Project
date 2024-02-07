package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Brand;
import com.example.demo.repositories.BrandRepository;

@Service
public class BrandService {
	
	@Autowired
	BrandRepository brepo;
	
	public List<Brand> getAll()
	{
		return brepo.findAll();
	}
	
	public void deleteBrandById(int b_id) {
        brepo.deleteById(b_id);
    }
	
	public Brand registerBrand(Brand br)
	{
		return brepo.save(br);
	}

	public Brand getBrandById(int brand_id) {
		// TODO Auto-generated method stub
		return brepo.findById(brand_id).get();
	}

}
