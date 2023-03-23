import React from "react";
import { BiWorld } from "react-icons/bi"


export default function Navbar(){
    return(
        <nav className="nav">
            <div><BiWorld className="world-icon" size={35}/>my travel journal.</div>
        </nav>
    )
}