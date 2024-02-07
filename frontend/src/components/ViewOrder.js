import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


export default function ViewOrder() {

  const [data, setData] = useState([]);
  // const [startdate, setStartDate] = useState('');
  // const [enddate, setEndDate] = useState('');
  const [amount, setAmount] = useState('');

  // const handleStartDateChange=(event)=>{
  //   setStartDate(event.target.value);
  // };

  // const handleEndDateChange=(event)=>{
  //   setEndDate(event.target.value);

  // };
  const handleAmountChange=(event)=>{
    setAmount(event.target.value);

  };

  useEffect(() => {
    fetch("https://localhost:7074/api/Orders").then(res => res.json()).then(data => setData(data))
}, []);

// const HandelAmountClick=()=>
// {
//   useEffect(() => {
//     fetch("https://localhost:7074/api/Orders/onamount?amount="+amount).then(res => res.json()).then(data => setData(data))
//   }, []);

// }


//     fetch("http://localhost:8080/getAllOrders").then(res => res.json()).then(data => setData(data))
// }, []);


console.log(data)

  return (
    // <div>
    //   <table>
    //     <tr>
    //                 <th className="text-center">Order id</th>
    //                 <th className="text-center">Order Date</th>
    //                 <th className="text-center">Price</th>
    //                 <th className="text-center">Address</th>
    //     </tr>
    //     {
    //             data.map((v)=> {
    //                 return (
    //                     <tr>
    //                          <td className="text-center">
    //                             {
    //                             v.id
    //                         }</td>
    //                         <td className="text-center">
    //                             {
    //                             v.cust_id.name
    //                         }</td>
    //                         <td className="text-center">
    //                             {
    //                             v.date
    //                         }</td>
    //                         <td className="text-center">
    //                             {
    //                             v.total_amount
    //                         }</td>
    //                          <td className="text-center">
    //                             {
    //                             v.shipping_address
    //                         }</td>
    //                     </tr>
    //                 )
    //             })
    //         } 
    //   </table>

    //   <div>
    //     <button className='btn btn-primary btn-sm'><h4><Link to="/adminhome" className='nav-link px-3 text-light '>Back</Link></h4></button>
    //    </div>
    // </div>



    <div className="container mt-5">
      <h2 className="text-center mb-4">View Orders</h2>
      <table className="table">
        {/* <tr>
          <td><label>Start Date</label></td>
          <td><input type='date' value={startdate} onChange={handleStartDateChange}></input></td>
          <td><label>End Date</label></td>
          <td><input type='date' value={enddate} onChange={handleEndDateChange}></input></td>
          <td><input type='handle' onClick={handelSearchClick} >Search</input></td>
        </tr> */}
        {/* <tr>
          <td><label>Amount:</label></td>
          <td><input type='number' value={amount} onChange={HandleAmountChange}></input></td>
          <td><input type='handle' onClick={HandleAmountChange} >Filter on amount</input></td>
        </tr> 
        
        <tr>
        <td><label>Amount:</label></td>
        <td><input type='number' value={amount} onChange={handleAmountChange}></input></td>
        <td><button onClick={HandelAmountClick}>Filter on amount</button></td>
      </tr>*/
        }
        
        <thead>
       
          <tr>
            <th className="text-center">Order ID</th>
            <th className="text-center">Customer ID</th>
            <th className="text-center">Order Date</th>
            <th className="text-center">Total Price</th>
            <th className="text-center">Shipping Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v) => (
            <tr key={v.id}>
              <td className="text-center">{v.id}</td>
              <td className="text-center">{v.custId}</td>
              <td className="text-center">{v.date}</td>
              <td className="text-center">{v.totalAmount}</td>
              <td className="text-center">{v.shippingAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <Link to="/adminhome" className="btn btn-primary btn-sm">
          <h4 className="m-0">Back</h4>
        </Link>
      </div>
    </div>
  );
}