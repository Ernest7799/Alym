import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import { Card,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Product = ({ data }) => {
    const cart = useContext(CartContext)
    console.log(data)
    return (
        <div>
            <h1>Products:({data.length})</h1>
            <div className='product'>
                {
                    data.map((e, i) => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Link to={`/product/${e.strCategory}`}>
                                    <Card.Img variant="top" src={e.strCategoryThumb} />
                                    <Card.Body>
                                        <Card.Title>{e.strCategory}</Card.Title>
                                        {/* <Button onClick={} variant="primary">В корзину</Button> */}
                                    </Card.Body>
                                </Link>
                            </Card>

                        )
                    })
                }
            </div>
        </div>
    );
};

export default Product;