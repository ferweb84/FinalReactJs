import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logoBuy1.png";

const NavBar = () => {
    return (
        <ul className="nav d-flex align-items-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={"/"}><img src={logo} width="48" alt="Buy and Hold" /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/combo"}>Tienda </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/menu"}>Combos Materos</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;