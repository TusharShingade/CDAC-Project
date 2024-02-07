package com.example.demo.entities;

import javax.persistence.Entity;


public class LoginCheck {

	String uid;
	String pwd;
	public LoginCheck() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LoginCheck(String uid, String pwd) {
		super();
		this.uid = uid;
		this.pwd = pwd;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	
	
	
}
