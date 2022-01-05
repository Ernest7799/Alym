import React from 'react';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import CartContext from '../context/CartContext';
const Menulist = () => {
    const [menu, setMenu] = useState([]);
    const cart = useContext(CartContext)
    let param = useParams();
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${param.menu}`).then(res => {
            setMenu(res.data.meals)
            // console.log(res);
        })
    }, [menu])
    return (
        <div>
            <h1>{param.menu}:({menu.length})</h1>
            <div className='product'>
                {
                    menu.map((e, i) => {
                        return (
                            <ProductItem
                                addToCart={() => cart.addToCart(e)}
                                key={i}
                                children={e.strMeal}
                                img={e.strMealThumb} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Menulist;