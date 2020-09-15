import React,{useContext} from 'react';
import {CartContext} from '../data/CartContext';
const ProductCards = (props) =>{
const {dispatch} = useContext(CartContext);//dispatch is cardReducer.jsx function
    return(
        <div className="product" pid={props.id}>
            <div className="product-image">
              <img src={props.image} alt={props.name} />
            </div>
            <div className="product-details">
                <div className="product-name">
                    {props.name}
                </div>
                <div className="product-price">
                    ${props.price.toFixed(2)}
                </div>
            </div>
            {/****Hot and Cold recipe ********/
                props.temperatue==="hot"?<div className="hotIcon">Hot</div>:<div className="coldIcon">Chilled</div>}
            {/*********Veg or NonVeg Icon**********/
                props.vegNonveg==="veg"?<div className="vegIcon" title="veg"></div>:<div className="nonVegIcon" title="non veg"></div>}
            <div className="addToCart" onClick={()=>dispatch({type:"ADD_TO_CART",id:props.id,productDetails:props.productDetails})} >
                Add To Cart
            </div>
        </div>
    )
}

export default ProductCards;