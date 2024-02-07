import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'


export default function NavigationBar() {

    const mystate = useSelector((state)=>state.logged);

    return (
        <div>
           <div style={{display: mystate.loggedIn ? "none" : "block" }} >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/home" className='nav-link px-3'>
                            <b className='text-light'>Electro-Mart </b>
                        </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                       
                        <li className="nav-item ">
                            <Link to="/home" className='nav-link px-3 text-light'>Home</Link>
                        </li>
            
                        <li className='nav-item'>
                             <Link to="login" className='nav-link px-3 text-light'>SignIn</Link>
                        </li>
                        <li className='nav-item'>
                          <Link to="cregistration" className='nav-link px-3 text-light'>Customer Signup</Link>
                        </li>

                       <li className='nav-item'>
                          <Link to="vregistration" className='nav-link px-3 text-light'>Vendor Signup</Link>
                       </li>
                        
                        <li className="nav-item">
                            <Link to="about" className='nav-link px-3 text-light'>AboutUs</Link>
                        </li>
                        
                    </ul>
                </div>
                
            </nav>
          </div>
          
        </div>
    )
}

