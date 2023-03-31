import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from "react"
import { Link } from 'react-router-dom';
import whitecart from "../Image/whitecart.png"
import "./Navbar.css"
import { useSelector } from 'react-redux';

function Header() {

    const [show, setShow] = useState(false)
    const getdata = useSelector((state) => state.cartreducer.carts)

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

                            <img src='https://img.icons8.com/ios/50/000000/test-account.png' alt='...' className='cart_icon' onClick={() => setShow(!show)
                            } />
                            <Link to='/addtocart'> <img src={whitecart} alt="..." className='cart_icon' />
                                <p className="Item">{getdata.length}</p>

                            </Link>

                        </Nav>


                    </Navbar.Collapse>

                </Container>

            </Navbar>
            {show &&
                <div className="profile_main" >
                    <div className="edit_part"><Link to="/login" className="Linkes">Login</Link></div>
                    <div className="edit_part" ><Link to="/signup" className="Linkes">Sign In</Link></div>
                    <div className="edit_part"><Link to="/signout" className="Linkes">Log Out</Link></div>
                </div>}

        </>
    );
}

export default Header