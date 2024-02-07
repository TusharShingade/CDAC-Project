
import { Link } from 'react-router-dom';

export default function OrderSuccessfull() {
  
  return (
    <div>
      <h1>Order Information</h1>
      <div>
        <h1 className='text-success'> Your Order placed Successfully</h1>
       
        </div>
        <div>
        <button className='btn btn-primary btn-sm'><h4><Link to="/customerhome" className='nav-link px-3 text-light '>Back</Link></h4></button>
       </div>
      </div>
    
  );
}






