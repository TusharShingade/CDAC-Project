import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice =createSlice({
    name:"logged",
    initialState:{
        loggedIn: false
    },
    reducers : {
        login: (state)=>{return{loggedIn:true}} ,
        logout:(state)=>{return{loggedIn:false}}

    }
})

export default loggedSlice.reducer
export const {login,logout} = loggedSlice.actions