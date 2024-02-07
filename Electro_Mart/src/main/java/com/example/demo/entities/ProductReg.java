package com.example.demo.entities;


public class ProductReg {
	
	int cat_id;
	int brand_id;
	int v_id;
	String name;
	String description;
	double price;
	int stock_level;
	public ProductReg() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ProductReg(int cat_id, int brand_id, int v_id, String name, String description, double price,
			int stock_level) {
		super();
		this.cat_id = cat_id;
		this.brand_id = brand_id;
		this.v_id = v_id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.stock_level = stock_level;
	}
	public int getCat_id() {
		return cat_id;
	}
	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}
	public int getBrand_id() {
		return brand_id;
	}
	public void setBrand_id(int brand_id) {
		this.brand_id = brand_id;
	}
	public int getV_id() {
		return v_id;
	}
	public void setV_id(int v_id) {
		this.v_id = v_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getStock_level() {
		return stock_level;
	}
	public void setStock_level(int stock_level) {
		this.stock_level = stock_level;
	}
	
	

}
