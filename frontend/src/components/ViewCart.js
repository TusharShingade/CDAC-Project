// import React, { useState, useEffect } from 'react';

// export default function ViewCart() {
//   const [cartItems, setCartItems] = useState([]);
//   const [cust, setCust] = useState({});

  
//   useEffect(() => {
//     const Cart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(Cart);
//     const log = JSON.parse(localStorage.getItem('loggedCustomer'));
//     // const address = log.login_id.address;

//     // setCust(log);
//     // console.log(cust)
//     //  console.log(cust.id)
//     //  console.log(cust.login_id.address)
//     // setCartItems(storedCart);
// //     const c_id = cust.id;
// //  const add =cust.login_id.address
//   }, []);

//   //  const address = cust.login_id.address;
  
//   const calculateTotalPrice = () => {
//     let total = 0;
//     cartItems.forEach(item => {
//       total += item.v.price;
//     });
//     return total;
//   };
//   const c_id =JSON.parse(localStorage.getItem('loggedCustomer')).id;
//  const add =JSON.parse(localStorage.getItem('loggedCustomer')).login_id.address;
//     //const tp = calculateTotalPrice();
// console.log(c_id);
// console.log(add);
// console.log(calculateTotalPrice());
// const tp= calculateTotalPrice();

//       // const dataToSend = {
//       //   cust_id: c_id,
//       //   shipping_address: add,
//       //   total_amount: calculateTotalPrice()
//       // };
//       // const reqOptions = {
//       //   method: 'POST',
//       //   headers: {
//       //     'content-type': 'application/json'
//       //   },
//       //   body: JSON.stringify({cust_id: c_id,
//       //     shipping_address: add,total_amount:tp})
//       // };
  
 
//     const sendData = (e) => {
//       const reqOptions = {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({
//           cust_id: c_id,
//           total_amount:tp,
//           shipping_address: add})
      
//       };
//     fetch("http://localhost:8080/placeOrder", reqOptions)
//       .then(resp => {
//         if (resp.ok) 
//           return resp.text();
//         else 
//           throw new Error("Server Error");
//       })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Data added to database:', data);
//         // Clear the cart after successful addition to the database
//         setCartItems([]);
//         localStorage.removeItem('cart');
//       })
//       .catch(error => {
//         console.error('Error adding data to database:', error);
//       });
//   };

 

//   return (
//     <div className="container py-4">
//     <h2 className="mb-3">View Cart</h2>
//     <table className="table">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Product Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>
//         {cartItems.map((item, index) => (
//           <tr key={index}>
//             <td>{index + 1}</td>
//             <td>{item.v.name}</td>
//             <td>₹{item.v.price}.00</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     <div className="mt-3">
//       <strong>Total Price: ₹{calculateTotalPrice()}</strong>
//     </div>
//     <button className="btn btn-primary mt-3" onClick={sendData}>
//       Place Order
//     </button>
//   </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import { Route, Routes, json, useNavigate } from 'react-router-dom';
import OrderSuccessfull from './OrderSuccessfull';
export default function ViewCart() {
  const [cartItems, setCartItems] = useState([]);
  const [cust, setCust] = useState({});

  var mywallet=0;

  const navigate = useNavigate();

  useEffect(() => {
    const Cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(Cart);
    const log = JSON.parse(localStorage.getItem('loggedCustomer'));
  
    // const address = log.login_id.address;
    // setCust(log);
    // console.log(cust)
    //  console.log(cust.id)
    //  console.log(cust.login_id.address)
    // setCartItems(storedCart);
//     const c_id = cust.id;
//  const add =cust.login_id.address
  }, []);

  //  const address = cust.login_id.address;
  
  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.v.price;
    });
    return total;
  };
  const c_id =JSON.parse(localStorage.getItem('loggedCustomer')).id;
 const add =JSON.parse(localStorage.getItem('loggedCustomer')).login_id.address;
    //const tp = calculateTotalPrice();
console.log(c_id);
console.log(add);
console.log(calculateTotalPrice());
const tp= calculateTotalPrice();

      // const dataToSend = {
      //   cust_id: c_id,
      //   shipping_address: add,
      //   total_amount: calculateTotalPrice()
      // };
      // const reqOptions = {
      //   method: 'POST',
      //   headers: {
      //     'content-type': 'application/json'
      //   },
      //   body: JSON.stringify({cust_id: c_id,
      //     shipping_address: add,total_amount:tp})
      // };
  
 
    const sendData = (e) => {
      mywallet=JSON.parse(localStorage.getItem('loggedCustomer')).login_id.wallet;
      //alert(tp)
      //alert(mywallet)
      if(tp>mywallet)
      {
        //alert("add money in wallet");

        navigate('/updatewalletcustomer');
        return;
      }
      const reqOptions = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          cust_id: c_id,
          total_amount:tp,
          shipping_address: add})
      
      };
    fetch("http://localhost:8080/placeOrder", reqOptions)
      .then(resp => {
        if (resp.ok) 
        {
          navigate('/ordersuccessfull');
          return resp.text();
          
        }
        else 
          throw new Error("Server Error");
      })
      .then(response => response.json())
      .then(() => {
        //console.log('Data added to database:', data);
        // Clear the cart after successful addition to the database
        
        setCartItems([]);
        localStorage.removeItem('cart');
        navigate('/ordersuccessfull');
      })
      .catch(error => {
        console.error('Error adding data to database:', error);
      });
  };

 

  return (
    <div className="container py-4">
    <h2 className="mb-3">View Cart</h2>
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.v.name}</td>
            <td>₹{item.v.price}.00</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="mt-3">
      <strong>Total Price: ₹{calculateTotalPrice()}</strong>
    </div>
    <button className="btn btn-primary mt-3" onClick={sendData}>
      Place Order
    </button>
  </div>
  );
}
<Routes>
<Route path='/ordersuccessfull' element={<OrderSuccessfull></OrderSuccessfull>}></Route>
</Routes>

