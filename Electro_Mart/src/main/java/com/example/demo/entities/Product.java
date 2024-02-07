package com.example.demo.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "products")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	
	@Column
	private String name;
	@Column
	private String description;	
	@Column
	private double price;	
	@Column
	private int stock_level;
	@Column
	private byte[] img_url;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cat_id")
	private Category cat_id;

	@ManyToOne
	@JoinColumn(name="brand_id")
	private Brand brand_id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "v_id")
	private Vendor v_id;
	

//	@ManyToOne
//	@JoinColumn(name="cat_id")
//	Category cat_id;
	
	
	
	
	
//	@ManyToOne
//	@JoinColumn(name="v_id")
//	Vendor v_id;
	
	
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(String name, String description, double price, int stock_level, Category cat_id, Brand brand_id,
			Vendor v_id) {
		super();
		this.name = name;
		this.description = description;
		this.price = price;
		this.stock_level = stock_level;
		this.cat_id = cat_id;
		this.brand_id = brand_id;
		this.v_id = v_id;
	}

	public Product(int id, String name, String description, double price, int stock_level, byte[] img_url,
			Category cat_id, Brand brand_id, Vendor v_id) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.stock_level = stock_level;
		this.img_url = img_url;
		this.cat_id = cat_id;
		this.brand_id = brand_id;
		this.v_id = v_id;
	}

	public Product(int id, byte[] img_url) {
		super();
		this.id = id;
		this.img_url = img_url;
	}

	public Product(byte[] img_url) {
		super();
		this.img_url = img_url;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public byte[] getImg_url() {
		return img_url;
	}

	public void setImg_url(byte[] img_url) {
		this.img_url = img_url;
	}

	public Category getCat_id() {
		return cat_id;
	}

	public void setCat_id(Category cat_id) {
		this.cat_id = cat_id;
	}

	public Brand getBrand_id() {
		return brand_id;
	}

	public void setBrand_id(Brand brand_id) {
		this.brand_id = brand_id;
	}

	public Vendor getV_id() {
		return v_id;
	}

	public void setV_id(Vendor v_id) {
		this.v_id = v_id;
	}
	
	

	
	
	
	

}
