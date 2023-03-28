import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import whitecart from "../Image/whitecart.png"
import "./Navbar.css"
import { useSelector } from 'react-redux';

function Header() {

    const getdata = useSelector((state) => state.cartreducer.carts)
    // console.log(getdata, "gggg")

    return (
        <>
            <Navbar className='bg-light' expand="lg">
                <Container>
                    <Navbar.Brand href="/">Bhavik Outlets</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/allproduct">All Product</Nav.Link>

                            <Link to="/login"><img src='https://img.icons8.com/ios/50/000000/test-account.png' alt='...' className='cart_icon' /></Link>
                            <Link to='/addtocart'> <img src={whitecart} alt="..." className='cart_icon' />
                                <p className="Item">{getdata.length}</p>

                            </Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header