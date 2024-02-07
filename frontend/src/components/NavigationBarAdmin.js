import { Link } from "react-router-dom"
export default function NavigationBarAdmin()
{
    return(
      <div>
       <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/home" className='nav-link px-3'>
                            <b className='text-dark'>Electro-Mart</b>
                            </Link>
                            <li className="nav-item ">
                            <Link to="/home" className='nav-link px-3 text-light'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/viewcategories" className='nav-link px-3 text-light'>View Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addcategories" className='nav-link px-3 text-light'>Add Category</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/viewvendor" className='nav-link px-3 text-light'>Approve Vendors</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/viewvendoradmin" className='nav-link px-3 text-light'>View Vendors</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/viewcustomers" className='nav-link px-3 text-light'>View Customers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/vieworder" className='nav-link px-3 text-light'>View Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/viewwalletadmin" className='nav-link px-3 text-light'>View Wallet</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/logout" className='nav-link px-3 text-light'>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
              
            </div>
        </div>
        
    )
}