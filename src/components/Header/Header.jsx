import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import NavBar from "../Navbar/Navbar";
import  "./Header.css";


const Header = () => {
    return (
        <div className="header">
            <div className="row py-3">
                <div className="col-md-6">
                    <NavBar />
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default Header;