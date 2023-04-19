import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Checkout.css"
import { useSelector } from "react-redux"

function Checkout() {
    const [totalprice, setTotalPrice] = useState(0)
    const navigate = useNavigate()
    const Addto = useSelector((state) => state.cartreducer.carts)

    const total = () => {
        let price = 0;
        Addto.map((ele, k) => {
            price = ele.price * ele.qnty + price
        })
        setTotalPrice(price)
    };
    useEffect(() => {
        total();
    }, [total])

    const getPayment = () => {
        alert("Your Order book Successfully ")
        navigate("/")
    }
    return (
        <>

            <div class="container container12 bg-light d-md-flex align-items-center">
                <div class="card box1 shadow-sm p-md-5 p-md-5 p-4">
                    <div class="fw-bolder mb-4">

                        <span class="ps-1">$-{totalprice}</span>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="d-flex align-items-center justify-content-between text">
                            <span class="">Commission</span>

                            <span class="ps-1">$-1.99</span>

                        </div>
                        <div class="d-flex align-items-center justify-content-between text mb-4">
                            <span>Total</span>
                            <span class="fas fa-dollar-sign">
                                <span class="ps-1">$-{totalprice}</span>
                            </span>
                        </div>
                        <div class="border-bottom mb-4"></div>
                        <div class="d-flex flex-column mb-4">
                            <span class="far fa-file-alt text">
                                <span class="ps-2">Invoice ID:</span></span>
                            <span class="ps-3">SN8478042099</span>
                        </div>
                        <div class="d-flex flex-column mb-5">
                            <span class="far fa-calendar-alt text">
                                <span class="ps-2">Next payment:</span></span>
                            <span class="ps-3">06-04-2023</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between text mt-5">
                            <div class="d-flex flex-column text">
                                <span>Customer Support:</span>
                                <span>online chat 24/7</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card box2 shadow-sm">
                    <div class="d-flex align-items-center justify-content-between p-md-5 p-4">
                        <span class="h5 fw-bold m-0">Payment methods</span>
                        <div class="btn btn-primary bar">
                            <span class="fas fa-bars"></span>
                        </div>
                    </div>
                    <ul class="nav nav-tabs mb-3 px-md-4 px-2">
                        <li class="nav-item"> <a class="nav-link px-2 active" aria-current="page" href="#">Credit Card</a> </li>

                    </ul>

                    <form action="">
                        <div class="row">
                            <div class="col-12">
                                <div class="d-flex flex-column px-md-5 px-4 mb-4">
                                    <span>Credit Card</span>
                                    <div class="inputWithIcon">
                                        <input class="form-control" type="text" value="5136 1845 5468 3894" />
                                        <span class="">
                                            <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt="" className="Img_Logo" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                                    <span>Expiration
                                        <span class="ps-1">Date</span>
                                    </span>
                                    <div class="inputWithIcon">
                                        <input type="text" class="form-control" value="05/23" />
                                        <span class="fas fa-calendar-alt"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                                    <span>Code CVV</span>
                                    <div class="inputWithIcon">
                                        <input type="password" class="form-control" value="123" />
                                        <span class="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="d-flex flex-column px-md-5 px-4 mb-4">
                                    <span>Name</span>
                                    <div class="inputWithIcon">
                                        <input class="form-control text-uppercase" type="text" placeholder="PREM SAINI" />
                                        <span class="far fa-user"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 px-md-5 px-4 mt-3">
                                <div class="btn btn-primary w-100" onClick={() => getPayment()}>Pay ${totalprice}</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Checkout