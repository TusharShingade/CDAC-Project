package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

import net.bytebuddy.asm.Advice.Return;

@Service
public class LoginService {

	@Autowired
	LoginRepository lrepo;
	
	public Login getLogin(String uid,String pwd)
	{
		Login l;
		Optional<Login> ol= lrepo.getLogin(uid, pwd);
		
		try
		{
			l=ol.get();
				
		}
		catch (Exception e) {
			l=null;
		}
		return l;
	}
	
	public Login saveLogin(Login l)
	{
		return lrepo.save(l);
	}
	
	public Login getLoginById(int login_id)
	{
		return lrepo.findById(login_id).get();
	}
	
	public double getWalletById(int id)
	{
		return lrepo.getWalletById(id);
	}
}
