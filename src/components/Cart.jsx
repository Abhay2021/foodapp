import React,{useContext} from 'react';
import {CartContext} from '../data/CartContext';
// import StripeCheckout from 'react-stripe-checkout';
//https://www.npmjs.com/package/react-stripe-checkout
//https://www.npmjs.com/package/react-toastify : popup notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Cart = (props) =>{

const emptyCart=()=>{
    dispatch({type:"EMPTY_CART"});
    props.history.push("/");
    //POPUP NOTIFICATION 
    toast.success("Cart is deleted successfully.",{position:toast.POSITION.TOP_RIGHT});
}

const {shoppingCart,totalPrice,totalQty,dispatch} = useContext(CartContext);//destructuring
//dispatch is cartReducer.jsx function
    return(
        <div className="cart-container">
            <div className="cart-details" style={{marginTop:'100px'}}>
                {shoppingCart.length>0?  
                shoppingCart.map(cartProduct=>{
                   return(<div className="cart" key={cartProduct.id}>
                        <span className="cart-image">
                            <img src={cartProduct.img} alt={cartProduct.name}/>
                        </span>
                        <span className="cart-product-name-price">
                            <span className="cart-product-name">{cartProduct.name}</span>
                            <span className="cart-product-price">${cartProduct.price.toFixed(2)}</span>

                            {/***INCREMENT DECREMENT BUTTON *********/}
                            <span className="increase-decrease-btn">
                            <span className="increment" onClick={()=>dispatch({type:"INCREMENT",id:cartProduct.id,productDetails:cartProduct})}><i className="fas fa-plus"></i></span>
                            <span className="product-quantity">{cartProduct.qty}</span>
                            <span className="decrement" onClick={()=>dispatch({type:"DECREMENT",id:cartProduct.id,productDetails:cartProduct})}><i className="fas fa-minus"></i></span>
                            </span>
                        </span>

                        <span className="cart-total-price-delete">
                            <span className="product-total-price">${(cartProduct.price*cartProduct.qty).toFixed(2)}</span>

                            {/*****DELETE BUTTON ******/}
                            <span className="delete-product" onClick={()=>dispatch({type:"DELETE",id:cartProduct.id,productDetails:cartProduct})}><i className="fas fa-trash-alt"></i></span>
                        </span>
                    </div>)
                })
                 :'Empty Cart'}

                {/****EMPTY CART BUTTON *****/
                    shoppingCart.length>0? <div className="emptyCartBtn" onClick={emptyCart} >
                    Delete Cart
                    </div> 
                :''}
            </div>
            {shoppingCart.length>0?
            <div className="cart-summary">
                <div className="summary">
                    <h3>Cart Summary </h3>
                    <div className="total-items">
                        <div className="item-title">Total item</div>
                        <div className="items-count">{totalQty}</div>
                    </div>
                    <div className="total-items">
                        <div className="item-title">Total Price</div>
                        <div className="items-count">${totalPrice.toFixed(2)}</div>
                    </div>
                    <div className="stripe-section">
                        {/* <StripeCheckout
                            stripeKey=""
                            token=""
                            billingAddress
                            shippingAddress
                            amount={totalPrice*100}
                        >
                        
                        </StripeCheckout> */}
                    </div>
                </div>
            </div>
            :''}
        </div>
    );
}

export default Cart;