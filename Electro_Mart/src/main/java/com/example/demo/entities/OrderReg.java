package com.example.demo.entities;

import java.util.Date;

public class OrderReg {
	
	int cust_id;
	double total_amount;
	String shipping_address;
	public OrderReg() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderReg(int cust_id, Double total_amount, String shipping_address) {
		super();
		this.cust_id = cust_id;
		this.total_amount = total_amount;
		this.shipping_address = shipping_address;
	}
	
	
	
	public int getCust_id() {
		return cust_id;
	}
	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	public Double getTotal_amount() {
		return total_amount;
	}
	public void setTotal_amount(Double total_amount) {
		this.total_amount = total_amount;
	}
	public String getShipping_address() {
		return shipping_address;
	}
	public void setShipping_address(String shipping_address) {
		this.shipping_address = shipping_address;
	}
	@Override
	public String toString() {
		return "OrderReg [cust_id=" + cust_id + ", total_amount=" + total_amount + ", shipping_address="
				+ shipping_address + "]";
	}
	
	
	
	

}
