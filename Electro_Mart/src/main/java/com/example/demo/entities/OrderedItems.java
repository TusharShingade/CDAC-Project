package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name = "ordereditems")
public class OrderedItems {
	
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int id;
		
		@JsonIgnoreProperties("orderitemlist")
	    @ManyToOne(cascade = CascadeType.ALL)
	    @JoinColumn(name = "order_id")
	    private Order order_id;
	    
	    @OneToOne
	    @JoinColumn(name="prod_id")
	    private Product prod_id;
	    
	    @Column
	    private int quantity;
	    
	    @Column
	    private double price;

		public OrderedItems(Order order_id, Product prod_id, int quantity, double price) {
			super();
			this.order_id = order_id;
			this.prod_id = prod_id;
			this.quantity = quantity;
			this.price = price;
		}

		public OrderedItems() {
			super();
			// TODO Auto-generated constructor stub
		}

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public Order getOrder_id() {
			return order_id;
		}

		public void setOrder_id(Order order_id) {
			this.order_id = order_id;
		}

		public Product getProd_id() {
			return prod_id;
		}

		public void setProd_id(Product prod_id) {
			this.prod_id = prod_id;
		}

		public int getQuantity() {
			return quantity;
		}

		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}

		public double getPrice() {
			return price;
		}

		public void setPrice(double price) {
			this.price = price;
		}
	    
	    
	    
	    
}
