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

import com.example.demo.entities.Brand;
import com.example.demo.entities.Category;
import com.example.demo.entities.Login;
import com.example.demo.entities.Product;
import com.example.demo.entities.ProductReg;
import com.example.demo.entities.Role;
import com.example.demo.entities.Vendor;
import com.example.demo.entities.VendorReg;
import com.example.demo.services.BrandService;
import com.example.demo.services.CategoryService;
import com.example.demo.services.ProductService;
import com.example.demo.services.VendorService;

@CrossOrigin("*")
@RestController
public class ProductController {

	@Autowired
	ProductService pservice;
	
	@Autowired
	BrandService bservice;
	
	@Autowired
	CategoryService cservice;
	
	@Autowired
	VendorService vseService;
	
	@GetMapping("/getallproducts")
	public List<Product> getAllProducts() {
		return pservice.getAllProducts();
	}
	
	@PostMapping("/regProduct")
	public Product regProduct(@RequestBody ProductReg p)
	{
		Category c=cservice.getCategoryById(p.getCat_id());
		Brand br=bservice.getBrandById(p.getBrand_id());
		Vendor v=vseService.getVendor(p.getV_id());
		
		Product pd=new Product(p.getName(), p.getDescription(), p.getPrice(), p.getStock_level(), c, br, v);
		
		return pservice.saveProduct(pd);
		
	}
	
	
	
	@PostMapping(value = "/uploadProduct/{product_id}",consumes = "multipart/form-data")
	public boolean addProduct(@PathVariable("product_id")int product_id,@RequestBody MultipartFile file)
	{
		
		Product apdt = pservice.getProductById(product_id);
		
		System.out.println(product_id);
		System.out.println(file.getOriginalFilename());
		
		boolean flag=true;
		try
		{
			flag=pservice.upload(product_id, file.getBytes());
				
		}
		catch(Exception e)
		{
			flag=false;
		}
		
		return flag;
		
	}
}
