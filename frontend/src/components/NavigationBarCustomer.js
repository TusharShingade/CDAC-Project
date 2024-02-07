import { Link } from "react-router-dom"
export default function NavigationBarCustomer()
{
    return(
 
            <div>
            <nav className='navbar navbar-expand-sm bg-info mb-0.5'>
               
               <div className='container-fluid'  >
                   <ul className="navbar-nav " >
                   <Link to="/home" className='nav-link px-1'>
                       <b className='text-dark '>Electro-Mart</b>
                       </Link>
                       <li className="nav-item ">
                           <Link to="/home" className='nav-link px-3 text-light' >Home</Link>
                       </li>
                   <li className='nav-item'>
                       <Link to="/viewproduct" className='nav-link px-3 text-light'>View Product</Link>
                   </li> 
                   <li className='nav-item'>
                       <Link to="/viewwalletcustomer" className='nav-link px-3 text-light'>View Wallet</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to="/updatewalletcustomer" className='nav-link px-3 text-light'>Update Wallet</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to="/viewCustomerOrder" className='nav-link px-3 text-light'>View Orders</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to="/logout" className='nav-link px-3 text-light'>Logout</Link>
                   </li>
                   </ul>
               </div>
              </nav>
            </div>

        
    )
}
