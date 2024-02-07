package com.example.demo.entities;

import java.sql.Date;
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

import org.hibernate.annotations.GeneratorType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "orders")
public class Order {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cust_id")
	private Customer cust_id;
	
	@Column
	private Date date;
	
	@Column
	private double total_amount;
	
	@Column
	private String shipping_address;
	
	@JsonIgnoreProperties("order_id")
	@OneToMany(mappedBy = "order_id", cascade = CascadeType.ALL)
	private List<OrderedItems> orderitemlist;

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(Customer cust_id, Date date, double total_amount, String shipping_address) {
		super();
		this.cust_id = cust_id;
		this.date = date;
		this.total_amount = total_amount;
		this.shipping_address = shipping_address;
	}
	
	

	public Order(Customer cust_id, Date date, double total_amount, String shipping_address,
			List<OrderedItems> orderitemlist) {
		super();
		this.cust_id = cust_id;
		this.date = date;
		this.total_amount = total_amount;
		this.shipping_address = shipping_address;
		this.orderitemlist = orderitemlist;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Customer getCust_id() {
		return cust_id;
	}

	public void setCust_id(Customer cust_id) {
		this.cust_id = cust_id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getTotal_amount() {
		return total_amount;
	}

	public void setTotal_amount(double total_amount) {
		this.total_amount = total_amount;
	}

	public String getShipping_address() {
		return shipping_address;
	}

	public void setShipping_address(String shipping_address) {
		this.shipping_address = shipping_address;
	}

	public List<OrderedItems> getOrderitemlist() {
		return orderitemlist;
	}

	public void setOrderitemlist(List<OrderedItems> orderitemlist) {
		this.orderitemlist = orderitemlist;
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", cust_id=" + cust_id + ", date=" + date + ", total_amount=" + total_amount
				+ ", shipping_address=" + shipping_address + ", orderitemlist=" + orderitemlist + "]";
	}

	
	
	
	
	

}
