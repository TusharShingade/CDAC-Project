import React, { useEffect, useState } from "react"
import { Link, Outlet, json } from "react-router-dom"
import NavigationBarVendor from "./NavigationBarVender"
export default function VenderHomeComp()
{

    const [user, setUser] = useState();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    const username=loggedUser.username;
    const password=loggedUser.password;
    fetch("http://localhost:8080/checkLogin", {
    method: "POST",
    body: JSON.stringify({
        uid :""+username,
        pwd:""+password
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())

.then(json => //*console.log(json.login_id)*/
   fetch("http://localhost:8080/getVendor?login_id="+json.id)
   .then(response=>response.json())
   .then(json=> setUser(json))

   
)}, []);
localStorage.setItem("loggedVendor",JSON.stringify(user))

    return(
        <div className="" style={{ backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/40/598/459/computer-custom-electronic-game-wallpaper-preview.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh'  }}>

              <NavigationBarVendor></NavigationBarVendor>
                
        </div>
        
        
    )
}