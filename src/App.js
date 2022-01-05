import Header from './components/Header';
import Productlist from './components/product-list';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './components/Product';
import Menulist from './components/menu-list';
import CartContext from './context/CartContext';
import Basket from './components/Basket';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  const addToCart = (basket) =>{
    // console.log(basket);
    setCart([...cart, basket])
  }
  const store = {
    cart,
    addToCart
  }
  // console.log('корзина', cart);


  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(res => {
      setData(res.data.categories)
      // console.log(res.data.categories);
    })
  }, [])

  return (
    <CartContext.Provider value={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path={"/"} exact>
              <Product data={data} />
            </Route>
            <Route exact path='/menu/:menu'>
              <Menulist />
            </Route>
            <Route exact path='/product/:product'>
              <Productlist />
            </Route>
            <Route exact path='/basket'>
              <Basket />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
