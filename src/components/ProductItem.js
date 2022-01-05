import React from 'react';

import { Card, Button } from 'react-bootstrap';

const ProductItem = ({ children, img, addToCart }) => {
  
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{children}</Card.Title>
                <Button onClick={addToCart} variant="primary">В корзину</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductItem;