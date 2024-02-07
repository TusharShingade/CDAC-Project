import React, { useReducer, useState } from "react";

export default function VendorRegistration() {
  const init = {
    fname: "",
    lname: "",
    username: "",
    password: "",
    address: "",
    city: "",
    contact_no: "",
    email: "",
    shop_name: "",
    shopact_licence: "",
    aadhar: ""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);
  const [errors, setErrors] = useState({});

  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(info)
      
              }
              fetch("http://localhost:8080/regVendor", reqOptions)
              .then(resp => {
                  if (resp.ok) 
                      return resp.text();
                   else 
                      throw new Error("Server Error");
                  
              })
              .then(resp => resp.JSON)
              .then(obj => console.log(JSON.stringify(obj)))
              .then((obj)=>{//alert("Registation Successfully Done");
              localStorage.setItem("loggedVendor",JSON.stringify(obj));
              window.location.href = "/";})
              .catch((error)=> alert("Server Error . Try After Some Time"));   
          }
  

  const validateForm = () => {
    const newErrors = {};
    if (!info.fname) {
      newErrors.fname = "Please enter your first name.";
    }

    if (!info.lname) {
      newErrors.lname = "Please enter your last name.";
    }

    if (!info.username) {
      newErrors.username = "Please enter a username.";
    } else if (info.username.length < 5) {
      newErrors.username = "Username must be at least 5 characters.";
    }

    if (!info.password) {
      newErrors.password = "Please enter a password.";
    } else if (info.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!info.address) {
      newErrors.address = "Please enter your address.";
    }

    if (!info.city) {
      newErrors.city = "Please enter your city.";
    }

    if (!info.contact_no) {
      newErrors.contact_no = "Please enter your contact number.";
    } else if (!/^[0-9]{10}$/.test(info.contact_no)) {
      newErrors.contact_no = "Required 10 digits.";
    }

    if (!info.email) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) {
      newErrors.email = "Invalid email.";
    }

    if (!info.shop_name) {
      newErrors.shop_name = "Please enter your shop name.";
    }

    if (!info.shopact_licence) {
      newErrors.shopact_licence = "Please enter your shopact licence.";
    }

    if (!info.aadhar) {
      newErrors.aadhar = "Please enter your Aadhar number.";
    } else if (!/^[0-9]{12}$/.test(info.aadhar)) {
      newErrors.aadhar = "Invalid Aadhar number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
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
                            Vendor-Registration
                          </p>
        <form className="mx-1 mx-md-4">
          <div className="d-flex flex-column mb-4">
            <label htmlFor="fname" className="form-label">
              Enter First Name:
            </label>
            <input
              type="text"
              className={`form-control ${errors.fname ? "is-invalid" : ""}`}
              id="fname"
              name="fname"
              value={info.fname}
              onChange={(e) =>
                dispatch({ type: "update", fld: "fname", val: e.target.value })
              }
              required
            />
            {errors.fname && (
              <div className="invalid-feedback">{errors.fname}</div>
            )}
          </div>

          <div className="d-flex flex-column mb-4">
            <label htmlFor="lname" className="form-label">
              Enter Last Name:
            </label>
            <input
              type="text"
              className={`form-control ${errors.lname ? "is-invalid" : ""}`}
              id="lname"
              name="lname"
              value={info.lname}
              onChange={(e) =>
                dispatch({ type: "update", fld: "lname", val: e.target.value })
              }
              required
            />
            {errors.lname && (
              <div className="invalid-feedback">{errors.lname}</div>
            )}
          </div>

          <div className="d-flex flex-column mb-4">
            <label htmlFor="username" className="form-label">
              Enter UserName:
            </label>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              id="username"
              name="username"
              value={info.username}
              onChange={(e) =>
                dispatch({ type: "update", fld: "username", val: e.target.value })
              }
              required
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          <div className="d-flex flex-column mb-4">
            <label htmlFor="password" className="form-label">
              Enter Password:
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              name="password"
              value={info.password}
              onChange={(e) =>
                dispatch({ type: "update", fld: "password", val: e.target.value })
              }
              required
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>


          <div className="d-flex flex-column mb-4">
            <label htmlFor="contact_no" className="form-label">
              Enter Contact No:
            </label>
            <input
              type="number"
              className={`form-control ${errors.contact_no ? "is-invalid" : ""}`}
              id="contact_no"
              name="contact_no"
              value={info.contact_no}
              onChange={(e) =>
                dispatch({ type: "update", fld: "contact_no", val: e.target.value })
              }
              required
            />
            {errors.contact_no&& (
              <div className="invalid-feedback">{errors.contact_no}</div>
            )}
          </div>

          <div className="d-flex flex-column mb-4">
            <label htmlFor="email" className="form-label">
              Enter Email:
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              name="email"
              value={info.email}
              onChange={(e) =>
                dispatch({ type: "update", fld: "email", val: e.target.value })
              }
              required
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="d-flex flex-column mb-4">
            <label htmlFor="address" className="form-label">
              Enter Address:
            </label>
            <input
              type="text"
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              id="address"
              name="address"
              value={info.address}
              onChange={(e) =>
                dispatch({ type: "update", fld: "address", val: e.target.value })
              }
              required
            />
            {errors.address&& (
              <div className="invalid-feedback">{errors.address}</div>
            )}
          </div>

          <div className="d-flex flex-column mb-4">
            <label htmlFor="city" className="form-label">
              Enter City:
            </label>
            <input
              type="text"
              className={`form-control ${errors.city ? "is-invalid" : ""}`}
              id="city"
              name="city"
              value={info.city}
              onChange={(e) =>
                dispatch({ type: "update", fld: "city", val: e.target.value })
              }
              required
            />
            {errors.city&& (
              <div className="invalid-feedback">{errors.city}</div>
            )}
          </div>

        

          <div className="d-flex flex-column mb-4">
            <label htmlFor="aadhar" className="form-label">
              Enter AAdhar Number:
            </label>
            <input
              type="number"
              className={`form-control ${errors.aadhar ? "is-invalid" : ""}`}
              id="aadhar"
              name="aadhar"
              value={info.aadhar}
              onChange={(e) =>
                dispatch({ type: "update", fld: "aadhar", val: e.target.value })
              }
              required
            />
            {errors.aadhar && (
              <div className="invalid-feedback">{errors.aadhar}</div>
            )}
          </div>

          <div className="d-flex flex-column mb-4">
            <label htmlFor="shop_name" className="form-label">
              Enter Shop Name:
            </label>
            <input
              type="text"
              className={`form-control ${errors.shop_name ? "is-invalid" : ""}`}
              id="shop_name"
              name="shop_name"
              value={info.shop_name}
              onChange={(e) =>
                dispatch({ type: "update", fld: "shop_name", val: e.target.value })
              }
              required
            />
            {errors.shop_name && (
              <div className="invalid-feedback">{errors.shop_name}</div>
            )}
          </div>

          <div className="d-flex flex-column mb-4">
            <label htmlFor="shopact_licence" className="form-label">
              Enter shopact Licence:
            </label>
            <input
              type="text"
              className={`form-control ${errors.shopact_licence ? "is-invalid" : ""}`}
              id="shopact_licence"
              name="shopact_licence"
              value={info.shopact_licence}
              onChange={(e) =>
                dispatch({ type: "update", fld: "shopact_licence", val: e.target.value })
              }
              required
            />
            {errors.shopact_licence && (
              <div className="invalid-feedback">{errors.shopact_licence}</div>
            )}
          </div>

         

          

          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={(e) => {
              e.preventDefault();
              if (validateForm()) {
                sendData(e);
              }
            }}
          >
            REGISTER
          </button>

          <button type="reset" className="btn btn-primary mb-3" onClick={()=> {dispatch({type:'reset'})}}>CLEAR</button>
                    </form>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </div>
             </div>
            </div>
  );
}


// import React, { useReducer, useState } from "react";


// export default function CustomerRegistration() {
//   const init = {
//     fname: "",
//     lname: "",
//     username: "",
//     password: "",
//     address: "",
//     city: "",
//     contact_no: "",
//     email: "",
//     shop_name:"",
//     shopact_licence:"",
//     aadhar:""


//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "update":
//         return { ...state, [action.fld]: action.val };
//       case "reset":
//         return init;
//       default:
//         return state;
//     }
//   };

 

//   const [info, dispatch] = useReducer(reducer, init);

//     const sendData = (e) => {
//         e.preventDefault();
//         const reqOptions = {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(info)

//         }
//         fetch("http://localhost:8080/regVendor", reqOptions)
//         .then(resp => {
//             if (resp.ok) 
//                 return resp.text();
//              else 
//                 throw new Error("Server Error");
            
//         })
//         .then(resp => resp.JSON)
//         .then(obj => console.log(JSON.stringify(obj)))
//         .then((obj)=>{alert("Registation Successfully Done");
//         localStorage.setItem("loggedVendor",JSON.stringify(obj));
//         window.location.href = "/";})
//         .catch((error)=> alert("Server Error . Try After Some Time"));   
//     }

//   return (
//     <div>
//       <div>
//         <div className="container h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-lg-8 col-xl-9">
//               <div className="card text-black" style={{ borderRadius: "25px" }}>
//                 <div className="card-body p-md-5">
//                   <div className="row justify-content-center">
//                     <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
//                       <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
//                         Vendor-Registration
//                       </p>

//                         <form className="mx-1 mx-md-4">
//                             <div className="d-flex flex-column  mb-4">
//                         <label htmlFor="fname" className="form-label"> Enter First Name: </label>
//                             <input type="text" className="form-control" id="fname" name="fname" value={info.fname}
//                             onChange={(e)=>{dispatch({type:'update',fld:'fname',val: e.target.value})}} 
//                             />
                            
//                         </div>

//                         <div className="d-flex flex-column  mb-4">
//                             <label htmlFor="lname" className="form-label"> Enter Last Name: </label>
//                             <input type="text" className="form-control" id="lname" name="lname" value={info.lname}
//                             onChange={(e)=>{dispatch({type:'update',fld:'lname',val: e.target.value})}} 
//                             />
                            
//                         </div>

//                         <div className="d-flex flex-column  mb-4">
//                             <label htmlFor="username" className="form-label"> Enter Uid: </label>
//                             <input type="text" className="form-control" id="username" name="username" value={info.uid}
//                             onChange={(e)=>{dispatch({type:'update',fld:'username',val: e.target.value})}} 
//                             />
                            
//                         </div>

//                         <div className="d-flex flex-column  mb-4">
//                             <label htmlFor="password" className="form-label"> Enter Password: </label>
//                             <input type="password" className="form-control" id="password" name="password" value={info.pwd} 
//                             onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}}
//                             />
                            
//                         </div>

//                         <div className="d-flex flex-column  mb-4">
//                             <label htmlFor="address" className="form-label"> Enter Address: </label>
//                             <input type="text" className="form-control" id="address" name="address" value={info.address} 
//                             onChange={(e)=>{dispatch({type:'update',fld:'address',val:e.target.value})}}
//                             />
                            
//                         </div>

//                         <div className="d-flex flex-column  mb-4">
//                             <label htmlFor="city" className="form-label"> Enter City: </label>
//                             <input type="text" className="form-control" id="city" name="city" value={info.city} 
//                             onChange={(e)=>{dispatch({type:'update',fld:'city',val:e.target.value})}}
//                             />
                            
//                         </div>

//                         <div className="d-flex flex-column  mb-4">
//                             <label htmlFor="contact_no" className="form-label"> Enter Contact Number: </label>
//                             <input type="number" className="form-control" id="contact_no" name="contact_no" value={info.cnumber} 
//                             onChange={(e)=>{dispatch({type:'update',fld:'contact_no',val:e.target.value})}}
//                             />
                            
//                         </div>

//                         <div className="d-flex flex-column  mb-4">
//                             <label htmlFor="email" className="form-label"> Enter Email Id: </label>
//                             <input type="email" className="form-control" id="email" name="email" value={info.email} 
//                             onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}
//                             />
                            
//                         </div>

//                         <div className="mb-3">
//                                 <label htmlFor="shop_name" className="form-label"> Enter Shop Name : </label>
//                                 <input type="text" className="form-control" id="shop_name" name="shop_name" value={info.shop_name} 
//                                 onChange={(e)=>{dispatch({type:'update',fld:'shop_name',val:e.target.value})}}
//                                 />
                                
//                             </div>

//                             <div className="mb-3">
//                                 <label htmlFor="shopact_licence" className="form-label"> Enter Shopact Licence : </label>
//                                 <input type="text" className="form-control" id="shopact_licence" name="shopact_licence" value={info.shopact_licence} 
//                                 onChange={(e)=>{dispatch({type:'update',fld:'shopact_licence',val:e.target.value})}}
//                                 />
                                
//                             </div>

//                             <div className="mb-3">
//                                 <label htmlFor="aadhar" className="form-label"> Enter Aadhar Number : </label>
//                                 <input type="number" className="form-control" id="aadhar" name="aadhar" value={info.aadhar} 
//                                 onChange={(e)=>{dispatch({type:'update',fld:'aadhar',val:e.target.value})}}
//                                 />
                               
//                             </div>


//                         <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>REGISTER</button>
//                         <button type="reset" className="btn btn-primary  mb-3" onClick={()=> {dispatch({type:'reset'})}}>CLEAR</button>
//                     </form>
//                    </div>
//                   </div>
//                  </div>
//                 </div>
//                </div>
//               </div>
//              </div>
//             </div>
//            </div>
//   );
// }




