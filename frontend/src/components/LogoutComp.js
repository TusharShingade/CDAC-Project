import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { logout } from "./Slice";


export default function LogoutComp()
{
    const navigate=useNavigate();
    const dispatch= useDispatch();
    localStorage.clear();
    dispatch(logout())    //LoggedIn:false- main menu will be visible
    navigate("/home")
}