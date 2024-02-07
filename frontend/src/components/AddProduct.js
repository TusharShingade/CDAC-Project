import React, { useEffect, useReducer, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function AddProduct()
{

        const init = {
          name: "",
          cat_id: "",
          brand_id: "",
          description: "",
          price: "",
          stock_level: ""
          
          
        };

        const reducer = (state,action) =>{
                   switch(action.type)
                   {
                         case 'update':
                             return {...state,[action.fld]:action.val}
                         case 'reset':
                             return init;    
                     }
                 }
            
                 const [info,dispatch] = useReducer(reducer,init);
                 const [file,setFile] = useState();
                 const navigate =useNavigate();
                 const [allcat , setAllcat] = useState([]);
                 

                 useEffect(() => {
                    fetch("http://localhost:8080/getAllCategories")
                    .then(resp => resp.json())
                    .then(cat =>setAllcat(cat) )
                 },[]);

                 const [allbrand , setAllbrand] = useState([]);

                 useEffect(() => {
                    fetch("http://localhost:8080/getAllBrands")
                    .then(resp => resp.json())
                    .then(brand =>setAllbrand(brand) )
                 },[]);





                 
                  const loggedUserData = JSON.parse(localStorage.getItem("loggedVendor"));
                //const v_id = JSON.parse(localStorage.getItem("loggedVender")).id;

                 const sendData = (e)=>{
        
                            e.preventDefault();

                             const v_id = loggedUserData ? loggedUserData.id : "";

                             const reqOptions = {
                                 method:'POST',
                                 headers: {'content-type':'application/json'},
                                 
                                 body: JSON.stringify({ ...info, v_id }),
                             }

                             
                    
                             fetch("http://localhost:8080/regProduct", reqOptions)
                            .then((resp) => {
                                 if(resp.ok)
                                     return resp.json();
                                 else
                                   throw new Error("server Error");
                            })
                            .then(obj => {
                                const fd = new FormData();
                                fd.append("file",file);
                                const reqOptions1 = {
                                    method: 'POST',
                                    // headers: {'content-type':'multipart/form-data'},
                                    body: fd
                                }
                                fetch("http://localhost:8080/uploadProduct/"+obj.id,reqOptions1)
                                .then(resp => resp.json())
                                .then(data => console.log(JSON.stringify(data)))
                                //alert("Product Added Successfully")
                                navigate("/vendorhome")
                                // .then(obj => {
                                //     if(obj)
                                //     {
                                //         alert("Product Added Successfully")
                                //         navigate('/home');
                                //     }
                                //     else
                                //     {
                                //         alert("Product Added but Image Failed To Add");
                                //         navigate("addproduct");
                                //     }
                                // })
                                
                            })
                            .catch((error)=> alert("server error . Try later"))

                        }
                     
                 

  

  return(
        <div>
        <div>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-9">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Add Product
                      </p>
              <form>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label"> Enter Name Of Product: </label>
                    <input type="text" className="form-control" id="name" name="name" value={info.name}
                    onChange={(e)=>{dispatch({type:'update',fld:'name',val: e.target.value})}} 
                    /></div>

                   <div className="mb-3">
                    <label htmlFor="cat_id" className="form-label"> Select Category: </label>
                    
                    <select className="form-control" id="cat_id" name="cat_id" onChange={(e)=>{dispatch({type:'update',fld:'cat_id',val: e.target.value})}} >
                        <option value="default">Select Option.......</option>
                            {
                                allcat.map(ct => {
                                    return<option value={ct.id}>{ct.name}</option>
                                })
                            }
                    </select>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="brand_id" className="form-label"> Select Brand: </label>

                    <select className="form-control" id="brand_id" name="brand_id" onChange={(e)=>{dispatch({type:'update',fld:'brand_id',val: e.target.value})}}>
                    <option value="default">Select Option.......</option>
                            {
                                allbrand.map(bd => {
                                    return<option value={bd.id}>{bd.name}</option>
                                })
                            }
                    </select>
                    </div>

                   <div className="mb-3">
                    <label htmlFor="description" className="form-label"> Enter Description: </label>
                    <input type="text" className="form-control" id="description" name="description" value={info.description}
                    onChange={(e)=>{dispatch({type:'update',fld:'description',val: e.target.value})}} 
                    />
                   
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label"> Enter Price: </label>
                    <input type="number" className="form-control" id="price" name="price" value={info.price} 
                    onChange={(e)=>{dispatch({type:'update',fld:'price',val:e.target.value})}}
                    />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="stock_level" className="form-label"> Enter Stock: </label>
                    <input type="number" className="form-control" id="stock_level" name="stock_level" value={info.stock_level} 
                    onChange={(e)=>{dispatch({type:'update',fld:'stock_level',val:e.target.value})}}
                    />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="img_url" className="form-label"> Upload Image: </label>
                    <input type="file" className="form-control" id="img_url" name="img_url"
                    onChange={(e) => setFile(e.target.files[0])}/>
                </div> 

                
                
                {/* <input type="hidden" name="v_id" value={v_id} /> */}

                <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>SUBMIT</button>
                <button type="reset" className="btn btn-primary  mb-3" onClick={()=> {dispatch({type:'reset'})}}>CLEAR</button>


                    </form>

                     {/* <p>{JSON.stringify(info)}</p>
                     <p>{file && file.name}</p> */}
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
               
              </div>
             </div>
        <div>
        <button className='btn btn-primary btn-sm'><h4><Link to="/vendorhome" className='nav-link px-3 text-light '>Back</Link></h4></button>
       </div>
            </div>
           
  )
}



// import React, { useEffect, useReducer, useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// export default function AddProduct()
// {

//         const init = {
//           name: "",
//           cat_id: "",
//           brand_id: "",
//           description: "",
//           price: "",
//           stock_level: "",
//           v_id:""
          
//         };

//         const reducer = (state,action) =>{
//                    switch(action.type)
//                    {
//                          case 'update':
//                              return {...state,[action.fld]:action.val}
//                          case 'reset':
//                              return init;    
//                      }
//                  }
            
//                  const [info,dispatch] = useReducer(reducer,init);
//                  const [file,setFile] = useState();
//                  const navigate =useNavigate();
//                  const [allcat , setAllcat] = useState([]);

//                  useEffect(() => {
//                     fetch("http://localhost:8080/getAllCategories")
//                     .then(resp => resp.json())
//                     .then(cat =>setAllcat(cat) )
//                  },[]);

//                  const [allbrand , setAllbrand] = useState([]);

//                  useEffect(() => {
//                     fetch("http://localhost:8080/getAllBrands")
//                     .then(resp => resp.json())
//                     .then(brand =>setAllbrand(brand) )
//                  },[]);

//                  const loggedUserData = JSON.parse(localStorage.getItem("loggedUser"));

//                  const sendData = (e)=>{
        
//                             e.preventDefault();

//                             const v_id = loggedUserData ? loggedUserData.id : "";

//                              const reqOptions = {
//                                  method:'POST',
//                                  headers: {'content-type':'application/json'},
                                 
//                                  body: JSON.stringify({ ...info, v_id }),
//                              }

                             
                    
//                              fetch("http://localhost:8080/regProduct", reqOptions)
//                             .then((resp) => {
//                                  if(resp.ok)
//                                      return resp.json();
//                                  else
//                                    throw new Error("server Error");
//                             })
//                             .then(obj => {
//                                 const fd = new FormData();
//                                 fd.append("file",file);
//                                 const reqOptions1 = {
//                                     method: 'POST',
//                                     // headers: {'content-type':'multipart/form-data'},
//                                     body: fd
//                                 }
//                                 fetch("http://localhost:8080/uploadProduct/"+obj.id,reqOptions1)
//                                 .then(resp => resp.json())
//                                 .then(data => console.log(JSON.stringify(data)))
//                                 alert("Product Added Successfully")
//                                 navigate("/vendorhome")
//                                 // .then(obj => {
//                                 //     if(obj)
//                                 //     {
//                                 //         alert("Product Added Successfully")
//                                 //         navigate('/home');
//                                 //     }
//                                 //     else
//                                 //     {
//                                 //         alert("Product Added but Image Failed To Add");
//                                 //         navigate("addproduct");
//                                 //     }
//                                 // })
                                
//                             })
//                             .catch((error)=> alert("server error . Try later"))

//                         }
                     
                 

  

//   return(
//     <div style={{ backgroundImage: `url(https://c1.wallpaperflare.com/preview/547/595/807/business-computer-contemporary-dark.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh'  }}>
//         <div>
//         <div>
//         <div className="container h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-lg-8 col-xl-9">
//               <div className="card text-black" style={{ borderRadius: "25px" }}>
//                 <div className="card-body p-md-5">
//                   <div className="row justify-content-center">
//                     <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
//                       <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
//                         Add Product
//                       </p>
//               <form>
//                     <div className="mb-3">
//                     <label htmlFor="name" className="form-label"> Enter Name Of Product: </label>
//                     <input type="text" className="form-control" id="name" name="name" value={info.name}
//                     onChange={(e)=>{dispatch({type:'update',fld:'name',val: e.target.value})}} 
//                     /></div>

//                    <div className="mb-3">
//                     <label htmlFor="cat_id" className="form-label"> Select Category: </label>
                    
//                     <select className="form-control" id="cat_id" name="cat_id" onChange={(e)=>{dispatch({type:'update',fld:'cat_id',val: e.target.value})}} >
//                         <option value="default">Select Option.......</option>
//                             {
//                                 allcat.map(ct => {
//                                     return<option value={ct.id}>{ct.name}</option>
//                                 })
//                             }
//                     </select>
//                     </div>

//                     <div className="mb-3">
//                     <label htmlFor="brand_id" className="form-label"> Select Brand: </label>

//                     <select className="form-control" id="brand_id" name="brand_id" onChange={(e)=>{dispatch({type:'update',fld:'brand_id',val: e.target.value})}}>
//                     <option value="default">Select Option.......</option>
//                             {
//                                 allbrand.map(bd => {
//                                     return<option value={bd.id}>{bd.name}</option>
//                                 })
//                             }
//                     </select>
//                     </div>

//                    <div className="mb-3">
//                     <label htmlFor="description" className="form-label"> Enter Description: </label>
//                     <input type="text" className="form-control" id="description" name="description" value={info.description}
//                     onChange={(e)=>{dispatch({type:'update',fld:'description',val: e.target.value})}} 
//                     />
                   
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="price" className="form-label"> Enter Price: </label>
//                     <input type="number" className="form-control" id="price" name="price" value={info.price} 
//                     onChange={(e)=>{dispatch({type:'update',fld:'price',val:e.target.value})}}
//                     />
                    
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="stock_level" className="form-label"> Enter Stock: </label>
//                     <input type="number" className="form-control" id="stock_level" name="stock_level" value={info.stock_level} 
//                     onChange={(e)=>{dispatch({type:'update',fld:'stock_level',val:e.target.value})}}
//                     />
                    
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="img_url" className="form-label"> Upload Image: </label>
//                     <input type="file" className="form-control" id="img_url" name="img_url"
//                     onChange={(e) => setFile(e.target.files[0])}/>
//                 </div> 

                
                
//                 {/* <input type="hidden" name="v_id" value={v_id} /> */}

//                 <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>SUBMIT</button>
//                 <button type="reset" className="btn btn-primary  mb-3" onClick={()=> {dispatch({type:'reset'})}}>CLEAR</button>


//                     </form>

//                      {/* <p>{JSON.stringify(info)}</p>
//                      <p>{file && file.name}</p> */}
//                     </div>
//                    </div>
//                   </div>
//                  </div>
//                 </div>
//                </div>
//               </div>
//              </div>

//              <div>
//         <h4><Link to="/vendorhome" className='nav-link px-3 text-info'>Back</Link></h4>
//         </div>

//             </div>
//            </div>
//   )
// }

