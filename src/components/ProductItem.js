import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductItem = ({ children, img }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{children}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductItem;