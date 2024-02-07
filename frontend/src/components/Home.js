import React from "react";
import FooterComp from "./FooterComp";
import HeaderComp from "./HeaderComp";
import ViewProductVendor from "./ViewProductVendor";
import ViewProductHome from "./ViewProductHome";

export default function Home()
{
    return(
        <div className="">

            <HeaderComp></HeaderComp>
            <div><ViewProductHome></ViewProductHome></div>
            <FooterComp></FooterComp>

        </div>
        
        
    )
}