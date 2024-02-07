
// import React from "react"
// import { Link } from "react-router-dom"
// import NavigationBarCustomer from "./NavigationBarCustomer"
// export default function CustomerHomeComp()
// {
//     return(
//       <div>
//         <NavigationBarCustomer></NavigationBarCustomer>
//         <div style={{ backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/40/598/459/computer-custom-electronic-game-wallpaper-preview.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh'  }}></div>
//       </div>
//     )
// }




import React, { useState } from "react"
import { Link } from "react-router-dom"
import NavigationBarCustomer from "./NavigationBarCustomer"
import { useEffect  } from "react";
export default function CustomerHomeComp()
{


const [user ,setUser]= useState();
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
   fetch("http://localhost:8080/getCustomer?login_id="+json.id)
   .then(response=>response.json())
   .then(json=> setUser(json))   
)}, []);
localStorage.setItem("loggedCustomer",JSON.stringify(user))






    return(
      <div>
        <NavigationBarCustomer></NavigationBarCustomer>
        <div style={{ backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/40/598/459/computer-custom-electronic-game-wallpaper-preview.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh'  }}></div>




      </div>
    )
}











