import React from "react"
import "./Footer.css"


function Footer() {
    return (
        <>
            <div className="container-fluid  bg-light mt-5 footer">
                <div className="container d-flex justify-content-between flex-wrap ">
                    <div className="col-lg-3 mt-3">
                        <h1>BHAVIK OUTLETS</h1>
                        <p className="fs-5">We are a team of designers and developers that create high quality WordPress</p>
                    </div>
                    <div className="mt-3">
                        <h5>MY ACCOUNT</h5>
                        <ul>
                            <li className="text-secondary fw-semibold ">Tracking</li>
                            <li className="text-secondary fw-semibold ">Shipping</li>
                            <li className="text-secondary fw-semibold ">My Accounts</li>
                        </ul>
                    </div>
                    <div className="mt-3">
                        <h5>INFORMATION</h5>
                        <ul>
                            <li className="text-secondary fw-semibold ">Our Story</li>
                            <li className="text-secondary fw-semibold ">Careers</li>
                            <li className="text-secondary fw-semibold ">Contacts Us</li>
                        </ul>
                    </div>
                    <div className="mt-3">
                        <h4 className="text-black fw-semibold ">Talk To Us</h4>
                        <p>Got Questions? Call us</p>
                        <h4>7426938951</h4>
                        <p>premsainilsl2000@gmail.com</p>
                        <p>Main Market Losal 332025</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer