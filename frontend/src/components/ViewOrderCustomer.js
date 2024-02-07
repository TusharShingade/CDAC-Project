import React from 'react';
import { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function ViewOrderCustomer() {

  const [order, setOrder] = useState(); //new
  const [user, setUser] = useState();  //new
  const [customer, setCustomer] = useState();  //new

  const navigate = useNavigate();  //new
var loggedCustomer=0;
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    setUser(loggedUser);
   loggedCustomer = JSON.parse(localStorage.getItem('loggedCustomer')).id;
    setCustomer(loggedCustomer);
    //alert(customer)
  }, []);  //new


  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/getOrdersByCustId?cust_id="+loggedCustomer).then(res => res.json()).then(data => setData(data))
}, [])
//console.log(data);
;



  return (
   
    <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG9yZGVyJTIwd2VifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh'  }}>
    <div className="container mt-5">
    <h2 className='text-dark'> Welcome {user && user.fname}</h2>
      <h2 className="text-center mb-4">Your Orders</h2>
      <table className="table">
       
        
        <thead>
       
          <tr>
            {/* <th className="text-center">Order ID</th> */}
            {/* <th className="text-center">Customer Name</th> */}
            <th className="text-center">Order Date</th>
            <th className="text-center">Total Price</th>
            <th className="text-center">Shipping Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v) => (
            <tr key={v.id}>
              {/* <td className="text-center">{v.id}</td> */}
              {/* <td className="text-center">{v.custId}</td> */}
              <td className="text-center">{v.date}</td>
              <td className="text-center">{v.total_amount}</td>
              <td className="text-center">{v.shipping_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <Link to="/customerhome" className="btn btn-primary btn-sm">
          <h4 className="m-0">Back</h4>
        </Link>
      </div>
    </div>
    </div>
  );
}