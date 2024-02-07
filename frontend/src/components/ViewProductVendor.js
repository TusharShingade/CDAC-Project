import "./css/ViewProduct.css";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ViewProductVendor() 
{
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getallproducts")
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  return (
  
<div>
      <div>
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            {data.map((v, index) => (
              <div key={v.id} className={`product-container bg-${index % 6 + 1}`}>
                <div className="product-border"> {/* Add a container with border */}
                  <div className="product-content">
                    <div className="product-image">
                      <img src={`data:image/png;base64,${v.img_url}`} alt="Product" className="img-thumbnail product-image-border" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className="product-details">
                      {/* Product details here */}
                      <div className="product-name">
                 <strong>Product Name:</strong> {v.name}
               </div>
               <div className="product-brand">
                 <strong>Brand:</strong> {v.brand_id.name}
               </div>
               <div className="product-category">
                 <strong>Category:</strong> {v.cat_id.name}
               </div>
               <div className="product-description">
                <strong>Product Description:</strong> {v.description}
               </div>
               <div className="product-price text-success">
                 <strong>Price:</strong> ₹{v.price}.00
               </div>
               <div className="product-stock text-success">
                 <strong>Stock Level:</strong> {v.stock_level}
               </div>
              </div>
              </div>
                </div>
                {index !== data.length - 1 && <hr className="product-separator" />}
              </div>
            ))}
            <div>
              <button className='btn btn-primary btn-sm'>
                <h4>
                  <Link to="/vendorhome" className='nav-link px-3 text-light '>Back</Link>
                </h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  );   
}
