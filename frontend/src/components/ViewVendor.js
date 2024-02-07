
import React from "react";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

export default function ViewVendor() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/getallvendor")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.error('Error:', error));
    }, []);

    const approve = (login_id) => {
        console.log("In approve method")
        console.log(login_id.id)
        fetch("http://localhost:8080/approveVendor?login_id=" +login_id.id)
        .then(resp => resp.json()).then(obj => {
            console.log("in aprove   "+JSON.stringify(obj))
            if (obj) {
                //alert("Updation done")
                // nav("/admin_home/approveTour")
                 //window.location.reload();
            } else 
                alert("Updation failed")

            

        })
    }

    const reject = (login_id) => {
        console.log("In approve method")
        console.log(login_id.id)
        fetch("http://localhost:8080/rejectVendor?login_id=" + login_id.id)
        .then(resp => resp.json()).then(obj => {
            console.log("in aprove   "+JSON.stringify(obj))
            if (obj) {
                //alert("Updation done")
                // nav("/admin_home/approveTour")
                 //window.location.reload();
            } else 
                alert("Updation failed")

            

        })
    }
    return (
        <div style={{ backgroundImage: `url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh'  }}>

            <div className="container-fluid mt-100 col-8 border bg-white ">
                <h2 className="text-center">
                    <b>Vendor Details</b>
                </h2>
                <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">Vendor Id</th>
                            {/* <th className="text-center">Uid</th> */}
                            <th className="text-center">Name</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Contact</th>
                            <th className="text-center">Address</th>
                            <th className="text-center">Shop_Licence_Id</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">
                                Approve</th>
                            <th className="text-center">Reject</th>

                        </tr>
                    </thead>
                    <tbody> {
                        data.map(v => (
                            <tr key={
                                v.id
                            }>
                                <td className="text-center">
                                    {
                                    v.id
                                }</td>
                                 {/* <td className="text-center">
                                    {
                                    v.login_id.username
                                }</td> */}
                                <td className="text-center">
                                    {
                                    v.login_id.fname
                                }</td>
                                <td className="text-center">
                                    {
                                    v.login_id.email
                                }</td>
                                <td className="text-center">
                                    {
                                    v.login_id.contact_no
                                }</td>
                                <td className="text-center">
                                    {
                                    v.login_id.address
                                }</td>
                                <td className="text-center">
                                    {
                                    v.shopact_licencence
                                }</td>
                                <td className="text-center">
                                    {
                                     v.login_id.status === true ? "Approved" : "Rejected"
                                }</td>
                                <td>
                                    <button className='btn btn-success mx-2'
                                        onClick={
                                            () => {
                                                approve(v.login_id)
                                            }
                                    }>Approve</button>
                                </td>
                                <td>
                                    <button className='btn btn-secondary'
                                        onClick={
                                            () => { reject(v.login_id)}
                                    }>Reject</button>
                                </td>

                            </tr>
                        ))
                    } </tbody>
                </table>
                </div>
            </div>

            <div>
        <button className='btn btn-primary btn-sm'><h4><Link to="/adminhome" className='nav-link px-3 text-light '>Back</Link></h4></button>
       </div>
        </div>

    );
}


