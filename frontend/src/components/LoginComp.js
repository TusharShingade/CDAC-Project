import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Slice";
import img5 from "./images/img4.jpeg";
import { Link } from "react-router-dom";

export default function LoginComp() {
    const init = {
        uid: "",
        pwd: ""
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.fld]: action.val };
            case 'reset':
                return init;
            default:
                return state;
        }
    };

    const [info, dispatch] = useReducer(reducer, init);
    const [msg, setMsg] = useState("");
    const [errors, setErrors] = useState({ uid: "", pwd: "" });
    const navigate = useNavigate();
    const reduxAction = useDispatch();

    const validateForm = () => {
        let valid = true;
        const newErrors = { uid: "", pwd: "" };

        if (info.uid.trim() === "") {
            newErrors.uid = "Username is required.";
            valid = false;
        } else if (info.uid.trim().length < 5) {
            newErrors.uid = "Username must be at least 5 characters.";
            valid = false;
        }

        if (info.pwd.trim() === "") {
            newErrors.pwd = "Password is required.";
            valid = false;
        } else if (info.pwd.trim().length < 8) {
            newErrors.pwd = "Password must be at least 8 characters.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const sendData = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; //not to proceed if fails
        }

        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(info)
        };

        fetch("http://localhost:8080/checkLogin", reqOptions)
            .then(resp => {
                if (resp.ok)
                    return resp.text();
                else
                    throw new Error("Server Error");
            })
            .then(text => text.length ? JSON.parse(text) : {})
            .then(obj => {
                if (Object.keys(obj).length === 0) {
                    setMsg("Wrong UserName/Password");
                } else {
                    reduxAction(login());
                    localStorage.setItem("loggedUser", JSON.stringify(obj));
                    if (obj.status === false) {
                        setMsg("Request has not been approved");
                    } else {
                        if (obj.role_id.id === 1) {
                            navigate("/adminhome");
                        } else if (obj.role_id.id === 2) {
                            navigate("/vendorhome");
                        } else if (obj.role_id.id === 3) {
                            navigate("/customerhome");
                        }
                    }
                }
            })
            .catch(() => setMsg("Server error. Please check again later."));
    };

    return (
        <div style={{ backgroundImage: `url(${img5})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh' }}>
            <div className="bg">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-xl-9">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Login
                                            </p>
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="uid" className="form-label">Enter UserName:</label>
                                                    <input type="text" className="form-control" id="uid" name="uid" placeholder="username" value={info.uid}
                                                        onChange={(e) => { dispatch({ type: 'update', fld: 'uid', val: e.target.value }) }}
                                                    />
                                                    <p className="text-danger">{errors.uid}</p>
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="pwd" className="form-label">Enter Password:</label>
                                                    <input type="password" className="form-control" id="pwd" name="pwd" placeholder="password" value={info.pwd}
                                                        onChange={(e) => { dispatch({ type: 'update', fld: 'pwd', val: e.target.value }) }}
                                                    />
                                                    <p className="text-danger">{errors.pwd}</p>
                                                </div>

                                                <button type="submit" className="btn btn-primary mb-3" onClick={(e) => { sendData(e) }}>LOGIN</button>
                                                <button type="reset" className="btn btn-primary mb-3" onClick={() => { dispatch({ type: 'reset' }); setErrors({ uid: "", pwd: "" }); }}>CLEAR</button>
                                            </form>
                                            <p className="text-danger">{msg}</p>
                                        </div>
                                    </div>
                                </div>
                               
                               <p>Register<Link to="/cregistration" className='nav-link px-3 text-primary'>Here</Link></p>
                           
                            </div>
                        </div>
                    </div>
                </div>
                <div>
        <button className='btn btn-primary btn-sm'><h4><Link to="/home" className='nav-link px-3 text-light '>Back</Link></h4></button>
       </div>
            </div>
        </div>
    );
}

