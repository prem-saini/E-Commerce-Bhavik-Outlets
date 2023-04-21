import React from "react"
import "./Footer.css"
import insta from "../Image/instagram.png"
import face from "../Image/facebook.png"
import twitter from "../Image/twitter.png"


function Footer() {
    return (
        <>
            <div className="container-fluid mt-2 footer">
                <div className="container d-flex justify-content-between flex-wrap ">
                    <div className="col-lg-3 mt-3">
                        <h1 className="footer_logo">BHAVIK OUTLETS</h1>
                        <p className="footer_dec">We are a collection of all Type Items and high quality products</p>
                        <p className="footer_text text-center">Social Media</p>
                        <div className="d-flex justify-content-center">
                            <a href="https://instagram.com/bhavik.outlets?igshid=YmMyMTA2M2Y=">  <img src={insta} alt="..." /></a>
                            <a href="https://www.google.com/"><img src={face} alt="..." /></a>
                            <a href="https://www.google.com/"><img src={twitter} alt="..." /></a>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p className="footer_heading">MY ACCOUNT</p>
                        <ul>
                            <li className="text-secondary fw-semibold ">Tracking</li>
                            <li className="text-secondary fw-semibold ">Shipping</li>
                            <li className="text-secondary fw-semibold ">My Accounts</li>
                        </ul>
                    </div>
                    <div className="mt-3">
                        <p className="footer_heading">INFORMATION</p>
                        <ul>
                            <li className="text-secondary fw-semibold ">Our Story</li>
                            <li className="text-secondary fw-semibold ">Careers</li>
                            <li className="text-secondary fw-semibold ">Contacts Us</li>
                        </ul>
                    </div>
                    <div className="mt-3">
                        <p className="footer_contact">Talk To Us</p>
                        <p className="footer_text text-secondary">Got Questions? Call us</p>
                        <p className="footer_contact">7426938951</p>
                        <p className="footer_text">premsainilsl2000@gmail.com</p>
                        <p className="footer_text">Main Market Losal 332025</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer