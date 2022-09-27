import React, { useContext } from "react";
import { Link } from "react-router-dom";
import carrito from "../images/basket.svg";
import {CartContext} from "../Context/Context";
import cesto from "../images/trash3.svg";
// import {useState} from "react";
// import {useEffect} from "react";
//
// import './CartWidget.css'
// import { FaOpencart } from 'react-icons/fa/';

// const CartWidget = () => {
//     const {cart} = useContext(CartContext);
//     const [total, setTotal] = useState(0);
//     useEffect(() => {
//         let total_items = cart.reduce((total, item) => total+=item.cantidad, 0);
//         setTotal(total_items);
//     }, [cart]);


//     return (
//         <Link to={"/cart"}>
//             <button type="button" className="btn fondo_naranja position-relative">
//                 <img src={carrito} alt="Carrito" />
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{total}</span>
//             </button>
//         </Link>
//     )
// }

// export default CartWidget;



const CartWidget = () => {
    const {cartTotal, clear} = useContext(CartContext); 
    return (
        <div>
            <button type="button" className="btn fondo_rojo position-relative me-1" title="Vaciar Carrito" onClick={()=> {clear()}}>
                <img src={cesto} alt="Cesto" />
            </button>
            <Link to={"/cart"}>
                <button type="button" className="btn fondo_naranja position-relative" title="Ir al Carrito">
                    <img src={carrito} alt="Carrito" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                </button>
                {/* <FaOpencart/> */}
            </Link>
        </div>
    )
}

export default CartWidget;