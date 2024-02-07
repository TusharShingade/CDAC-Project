package com.example.demo.entities;

public class WalletAdd {
	
	int id;
	double wallet;
	
	public WalletAdd() {
		super();
		// TODO Auto-generated constructor stub
	}
	public WalletAdd(int id, double wallet) {
		super();
		this.id = id;
		this.wallet = wallet;
	}
	public WalletAdd(double wallet) {
		super();
		this.wallet = wallet;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public double getWallet() {
		return wallet;
	}
	public void setWallet(double wallet) {
		this.wallet = wallet;
	}
	
	

}
