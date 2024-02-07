package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="vendors")
public class Vendor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	@Column
	String shop_name;
	String shopact_licence;
	String aadhar;
	
	@ManyToOne
	@JoinColumn(name = "login_id")
	Login login_id;

	public Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vendor(String shop_name, String shopact_licencence, String aadhar, Login login_id) {
		super();
		this.shop_name = shop_name;
		this.shopact_licence = shopact_licencence;
		this.aadhar = aadhar;
		this.login_id = login_id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getShop_name() {
		return shop_name;
	}

	public void setShop_name(String shop_name) {
		this.shop_name = shop_name;
	}

	public String getShopact_licencence() {
		return shopact_licence;
	}

	public void setShopact_licencence(String shopact_licencence) {
		this.shopact_licence = shopact_licencence;
	}

	public String getAadhar() {
		return aadhar;
	}

	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}

	public Login getLogin_id() {
		return login_id;
	}

	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}
	
	

}
