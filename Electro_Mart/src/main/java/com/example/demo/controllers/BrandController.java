package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Brand;
import com.example.demo.entities.Category;
import com.example.demo.services.BrandService;
import com.example.demo.services.CategoryService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BrandController {
	
	@Autowired
	BrandService bservice;
	
	
	@GetMapping("/getAllBrands")
	public List<Brand> getAll()
	{
		return bservice.getAll();
	}
	
	@DeleteMapping("deleteBrandById/{id}")
    public void deleteBrandById(@PathVariable int id) {
        bservice.deleteBrandById(id);
    }
	
	@PostMapping("/addBrand")
	public Brand registerCategory(@RequestBody Brand brand)
	{
		return bservice.registerBrand(brand);
	}

}
