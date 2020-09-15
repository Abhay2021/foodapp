import React, {createContext, useState} from 'react';
import burger from '../assets/img/burger.jpg';
import coffee from '../assets/img/coffee.jpg';
import coldCoffee from '../assets/img/cold-coffee.jpg';
import dumplings from '../assets/img/dumplings.jpg';
import icecream from '../assets/img/icecream.jpg';
import noodles from '../assets/img/noodles.jpg';
import pasta from '../assets/img/pasta.jpg';
import piza from '../assets/img/piza.jpg';
import popcorn from '../assets/img/popcorn.jpg';

import sweet from '../assets/img/sweet.jpg';
import tofuNoodles from '../assets/img/tofu-noodles.jpg';
import tofuReceipe from '../assets/img/tofu-receipe.jpg';
import vegRoll from '../assets/img/veg-roll.jpg';
import chicken from '../assets/img/chicken.jpg';
import chickenbirynai from '../assets/img/chickenbirynai.jpg';
import friedfish from '../assets/img/friedfish.jpg';

export const ProductContext = createContext();
const ProductContextProvider = (props) =>{
const [ProductList] = useState([
    {id:1,name:'Veg Roll',price:2,img:vegRoll,vegNonveg:'veg',temperatue:'hot'},
    {id:2,name:'Tofu Gravy',price:5,img:tofuReceipe,vegNonveg:'veg',temperatue:'hot'},
    {id:3,name:'Tofu Noodles',price:2,img:tofuNoodles,vegNonveg:'veg',temperatue:'hot'},
    {id:4,name:'Sweet',price:10,img:sweet,vegNonveg:'veg',temperatue:'hot'},
    {id:5,name:'Popcorn',price:2,img:popcorn,vegNonveg:'veg',temperatue:'hot'},
    {id:6,name:'Pizza',price:10,img:piza,vegNonveg:'veg',temperatue:'hot'},
    {id:7,name:'Pasta',price:5,img:pasta,vegNonveg:'veg',temperatue:'hot'},
    {id:8,name:'Veg Noodles',price:5,img:noodles,vegNonveg:'veg',temperatue:'hot'},
    {id:9,name:'Ice cream',price:10,img:icecream,vegNonveg:'veg',temperatue:'chilled'},
    {id:10,name:'Dumplings',price:5,img:dumplings,vegNonveg:'veg',temperatue:'hot'},
    {id:11,name:'Chocolate coffee',price:5,img:coldCoffee,vegNonveg:'veg',temperatue:'chilled'},
    {id:12,name:'Coffee',price:2,img:coffee,vegNonveg:'veg',temperatue:'hot'},
    {id:13,name:'Burger',price:2,img:burger,vegNonveg:'veg',temperatue:'hot'},
    {id:14,name:'Gravy Chicken',price:10,img:chicken,vegNonveg:'nonveg',temperatue:'hot'},
    {id:15,name:'Chicken Birynai',price:10,img:chickenbirynai,vegNonveg:'nonveg',temperatue:'hot'},
    {id:16,name:'Fried Fish',price:10,img:friedfish,vegNonveg:'nonveg',temperatue:'hot'}
]);

return(
<ProductContext.Provider value={{ProductList:[...ProductList]}}>
{props.children}
</ProductContext.Provider>
);

}

export default ProductContextProvider;