import Header from './components/Header';
import ProductItem from './components/ProductItem';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './components/Product';
import Menulist from './components/menu-list';
import CartContext from './context/CartContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [data, setData] = useState([])
  const [cart, setCart] = useState([{name: 'Asan'}])
  const addToCart = () =>{
    console.log('click');
  }
  const store = {
    cart: [cart, setCart]
  }


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
          </Switch>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
