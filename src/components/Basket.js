import React from 'react';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import ProductItem from './ProductItem';

const Basket = () => {

    const cart = useContext(CartContext)
    return (
        <div>
            <div className='product'>
                {
                    cart.cart.map((e, i) => {
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

export default Basket;