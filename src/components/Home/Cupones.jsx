import React from "react";
import  "../Home/Cupones.css";

const Cupones = () => {
    return (
        <div className="cupones my-5">
            <div className="row">
                <div className="col-md-4">
                    <img src="images/buzoB.jpg" alt="Cupon1" className="img-fluid rounded" />
                </div>
                <div className="col-md-4">
                    <img src="images/mate.webp" alt="Cupon2" className="img-fluid rounded" />
                </div>
                <div className="col-md-4">
                    <img src="images/buzoB.jpeg" alt="Cupon3" className="img-fluid rounded" />
                </div>
            </div>
        </div>
    )
}

export default Cupones;