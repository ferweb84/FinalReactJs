import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cupones from "./Cupones";
import Destacado from "./Destacado";
import PromoApp from "./PromoApp";
import  "../Home/Home.css";

const Home = () => {
    return (
        <div className="Home">
            <Header /> 
            <Destacado />
            <Cupones />
            <PromoApp />
            <Footer />
        </div>
    )
}

export default Home;