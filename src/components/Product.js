import React,{useContext} from 'react';
import ProductItem from './ProductItem';
import CartContext from '../context/CartContext';
const Product = ({ data }) => {
    const cart = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <h1>Products:({data.length})</h1>
            <div className='product'>
                {
                    data.map((e, i) => {
                        return (
                            <div>
                                <ProductItem key={i} children={e.strCategory} img={e.strCategoryThumb} />
                                <p>{cart.cart[0].name}</p>
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Product;