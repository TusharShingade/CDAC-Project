package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Category;
import com.example.demo.repositories.CategoryRepository;

@Service
public class CategoryService {
	
	@Autowired
	CategoryRepository crepo;
	
	public List<Category> getAll()
	{
		return crepo.findAll();
	}

	public void deleteCategoryById(int c_id) {
        crepo.deleteById(c_id);
    }
	
	public Category registerCategory(Category category) 
	{
			return crepo.save(category);
	}
	
	public Category getCategoryById(int id)
	{
		return crepo.findById(id).get();
	}

}
