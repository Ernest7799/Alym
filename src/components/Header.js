import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Nav, NavDropdown, Navbar, Form, Container, FormControl, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    const [list, setList] = useState([]);
    let history = useHistory();
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list').then(res => {
            setList(res.data.meals)
            // console.log(res.data.meals);
        })
    }, [])
    const handleClick = (name) => {
        history.push(`/menu/${name}`);
    }
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container fluid>
                    <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Basket</Nav.Link>
                            <NavDropdown title="Categories" id="navbarScrollingDropdown">
                                {
                                    list.map((e, i) => {
                                        return (
                                            <NavDropdown.Item key={i} onClick={() => handleClick(e.strArea)}>{e.strArea}</NavDropdown.Item>
                                        )
                                    })
                                }
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;