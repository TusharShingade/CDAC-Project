import React from 'react'
import {useEffect, useState} from "react"; 
import { Link } from 'react-router-dom';

export default function ViewCustomer() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch("https://localhost:7074/api/Logins/role3").then(res => res.json()).then(data => setData(data))
    }, []);

 


    return (
        <div  className="container-fluid mt-5 col-8 border bg-white ">
        <h2 className="text-center"><b>Customer Details</b></h2>

            <table className="table table-striped">
                <tr>
                    <th className="text-center">Login Id</th>
                    <th className="text-center">First Name</th>
                    <th className="text-center">Last Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Contact NO</th>
                    <th className="text-center">Address</th>
                </tr>


                {
                data.map(v => {
                        return (
                            <tr>
                                <td className="text-center">
                                    {
                                    v.id
                                }</td>
                                <td className="text-center">
                                    {
                                    v.fname
                                }</td>
                                <td className="text-center">
                                    {
                                    v.lname
                                }</td>
                                <td className="text-center">
                                    {
                                    v.email
                                }</td>
                                <td className="text-center">
                                    {
                                    v.contactNo
                                }</td>
                                <td className="text-center">
                                    {
                                    v.address
                                }</td>             
                            </tr>
                        )
                })
            } </table>

        <div>
        <button className='btn btn-primary btn-sm'><h4><Link to="/adminhome" className='nav-link px-3 text-light '>Back</Link></h4></button>
       </div>
        </div>
    )
}
