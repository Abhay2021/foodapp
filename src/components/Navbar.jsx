import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../data/CartContext';
import logo from '../assets/logo/foodshala.png';
const Navbar = () => {
    const {totalQty} = useContext(CartContext);//destructuring
    return(
        <nav>
            <ul className="left">
                <li><Link to="foodapp/"><img src={logo} alt="logo" /></Link></li>
            </ul>
            <ul className="right">
                <li ><Link to="foodapp/cart"><span className="shoppingCart dollor"><i className="fas fa-cart-plus"></i></span><span className="shoppingCartTotal">{totalQty}</span></Link></li>
            </ul>
        </nav>
    );

}

export default Navbar;