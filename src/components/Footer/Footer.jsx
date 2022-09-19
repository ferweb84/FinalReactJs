import React from "react";
import twitter from "../images/SM-RRSS-01.png";
import github from "../images/SM-RRSS-02.png";
import instagram from "../images/SM-RRSS-03.png";
import facebook from "../images/SM-RRSS-04.png";
import "./Footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <div className="col">
                <div className="container">
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p>TM © 2022 <strong> -Buy & hold- </strong> Corporation. <br /> Todos los derechos reservados.</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <img src={facebook} width="60" alt="facebook" class="btn btn-outline-light btn-floating m-3" href="https://twitter.com/fernandoreyna21"
                    role="button" /> 
                            <img src={instagram} width="60" alt="instagram" class="btn btn-outline-light btn-floating m-3" href="https://www.instagram.com/fernandoreyna21/"
                    role="button"/> 
                            <img src={github} width="60" alt="github"class="btn btn-outline-light btn-floating m-3" href="https://github.com/ferweb84" role="button" /> 
                            <img src={twitter} width="60" alt="twitter"class="btn btn-outline-light btn-floating m-3" href="https://twitter.com/fernandoreyna21"
                    role="button" />
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;