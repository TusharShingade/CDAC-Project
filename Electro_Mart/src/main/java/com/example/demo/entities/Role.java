package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "roles")
public class Role {
	@Id
	int id;
	@Column
	String role;
	
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Role(int id, String role) {
		super();
		this.id = id;
		this.role = role;
	}
	
	public Role(String role) {
		super();
		this.role = role;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	

}
