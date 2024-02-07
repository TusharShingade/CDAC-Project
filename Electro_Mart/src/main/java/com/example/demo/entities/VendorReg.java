package com.example.demo.entities;

public class VendorReg {
	
	
	Role role_id;
	
	
	String fname;
	String lname;
	String username;
	String password;
	String contact_no;
	String email;
	String address;
	String city;
	
	boolean status;
	double wallet;
	
	String shop_name;
	String shopact_licence;
	String aadhar;
	public VendorReg() {
		super();
		// TODO Auto-generated constructor stub
	}
	public VendorReg(Role role_id, String fname, String lname, String username, String password, String contact_no,
			String email, String address, String city, boolean status, double wallet, String shop_name,
			String shopact_licence, String aadhar) {
		super();
		this.role_id = role_id;
		this.fname = fname;
		this.lname = lname;
		this.username = username;
		this.password = password;
		this.contact_no = contact_no;
		this.email = email;
		this.address = address;
		this.city = city;
		this.status = status;
		this.wallet = wallet;
		this.shop_name = shop_name;
		this.shopact_licence = shopact_licence;
		this.aadhar = aadhar;
	}
	public Role getRole_id() {
		return role_id;
	}
	public void setRole_id(Role role_id) {
		this.role_id = role_id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getContact_no() {
		return contact_no;
	}
	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public double getWallet() {
		return wallet;
	}
	public void setWallet(double wallet) {
		this.wallet = wallet;
	}
	public String getShop_name() {
		return shop_name;
	}
	public void setShop_name(String shop_name) {
		this.shop_name = shop_name;
	}
	public String getShopact_licence() {
		return shopact_licence;
	}
	public void setShopact_licence(String shopact_licence) {
		this.shopact_licence = shopact_licence;
	}
	public String getAadhar() {
		return aadhar;
	}
	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}
	
	
	

}
