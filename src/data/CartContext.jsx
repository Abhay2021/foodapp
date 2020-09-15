import React,{createContext, useReducer} from 'react';
import {CartReducer} from './CartReducer';
export const CartContext = createContext();

const CartContextProvider = (props) =>{
    let foodcart = localStorage.getItem("foodcart");
    if(typeof foodcart === 'undefined' || foodcart=='' || foodcart==null){
        foodcart = {shoppingCart:[],totalPrice:0,totalQty:0};
    }else{
        foodcart = JSON.parse(foodcart);
    }
    const [cart, dispatch] = useReducer(CartReducer,foodcart);
    //cart = {shoppingCart:[],totalPrice:0,totalQty:0}
    //dispatch = CartReducer : it's a reducer function defined in CartReducer.jsx
    // CartReducer function can access {shoppingCart:[],totalPrice:0,totalQty:0} as a state
    return(
        <CartContext.Provider value={{...cart,dispatch}} >
        {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;