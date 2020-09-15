/*******HOME PAGE : PRODUCT LISTINGS ********/
import React,{useContext} from "react";
import ProductCards from './ProductCards';
import {ProductContext} from '../data/ProductContext';
import Banner from './Banner';
const Products = () =>{
const {ProductList} = useContext(ProductContext);
return(
    <>
    <Banner />
    <div className="container">
    <div className="ProductsListings">
        {ProductList.map((product)=>{
            return(<ProductCards
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.img}
                vegNonveg={product.vegNonveg}
                temperatue={product.temperatue}
                productDetails={product}
            />);
        })}
    </div>
    </div>
    </>
)
}

export default Products;