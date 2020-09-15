export const CartReducer = (state,action) =>{
    /**
     * "action" variable contain product details object which is passed from ProductCards component on click "add to cart" button 
     * 
     * "state" variable contain initialize array or object defined in CartContext.jsx 
     * **/
    const {shoppingCart,totalPrice,totalQty}=state;//Destructuring 
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    let updatedCart;
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log("ADD_TO_CART case",action);
            const check = shoppingCart.find(cartProduct=>cartProduct.id===action.id);
            if(check){
                return state;
            }else{
                product = action.productDetails;
                product['qty'] = 1;
                updatedQty = totalQty+1;
                updatedPrice = totalPrice + product.price;
                updatedCart = { shoppingCart : [product,...shoppingCart],totalPrice:updatedPrice,totalQty:updatedQty};
                localStorage.setItem("foodcart",JSON.stringify(updatedCart));
                return updatedCart;
            }
            break;
        case 'INCREMENT':
                product = action.productDetails;
                product.qty = product.qty+1;
                updatedQty = totalQty+1;
                updatedPrice = totalPrice + product.price;
                //Serach index of product in  cart
                index = shoppingCart.findIndex(cartProduct=>cartProduct.id===action.id);
                //Update product details in cart
                shoppingCart[index]=product;
                updatedCart = { shoppingCart : [...shoppingCart],totalPrice:updatedPrice,totalQty:updatedQty};
                localStorage.setItem("foodcart",JSON.stringify(updatedCart));
                return updatedCart;
            break;
        case 'DECREMENT':
                product = action.productDetails;
                if(product.qty>1){
                    product.qty = product.qty-1;
                    updatedQty = totalQty-1;
                    updatedPrice = totalPrice - product.price;
                    //Serach index of product in  cart
                    index = shoppingCart.findIndex(cartProduct=>cartProduct.id===action.id);
                    //Update product details in cart
                    shoppingCart[index]=product;
                    updatedCart = { shoppingCart : [...shoppingCart],totalPrice:updatedPrice,totalQty:updatedQty};
                    localStorage.setItem("foodcart",JSON.stringify(updatedCart));
                    return updatedCart;
                }else{
                    return state;
                }
                
            break;
        case 'DELETE':
            product = action.productDetails;
            let filteredCart = shoppingCart.filter(cartProduct=>cartProduct.id!==action.id);
            updatedQty = totalQty-product.qty;
            updatedPrice = totalPrice - product.qty * product.price;   
            
            updatedCart = { shoppingCart : [...filteredCart],totalPrice:updatedPrice,totalQty:updatedQty};
            localStorage.setItem("foodcart",JSON.stringify(updatedCart));
            return updatedCart;
            break;
        case 'EMPTY_CART':
            localStorage.removeItem("foodcart");
            return { shoppingCart : [],totalPrice:0,totalQty:0};
            break;
        default: return state;
            
    }
}
