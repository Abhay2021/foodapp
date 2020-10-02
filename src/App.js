import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductContextProvider from "./data/ProductContext";
import CartContextProvider from './data/CartContext';
import Products from './components/Products';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';
import './App.css';

function App() {
  return (
    <div >
      <ProductContextProvider>
        <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/foodapp/" exact component={Products} />
            <Route path="/foodapp/cart" exact component={Cart} />
            <Route  component={PageNotFound} />
          </Switch>
        </BrowserRouter>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
