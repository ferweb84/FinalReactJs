import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css"
import logo from "../images/logoBuy1.png";

const NavBar = () => {
    return (
        <ul className="nav d-flex align-items-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={"/"}><img src={logo} width="70"  alt="Buy and Hold" /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/combo"}>Tienda </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/menu"}>Indumentaria Buy & Hold</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/category/:id"}>Contacto </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/item/:id"}>Sobre Nosotros </NavLink>
            </li>
            
        </ul>
    )
}

export default NavBar;