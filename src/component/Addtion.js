import React from "react"
import Data from "../Data"
import banner1 from "../Image/productbanner-1.jpg"
import banner2 from "../Image/productbanner-2.jpg"
import "./Addtion.css"
import TreadingProduct from "./TreadingProduct"

function Addtion() {
    return (
        <>
            <div className="container-fluid mt-5">

                <div className=" container d-flex justify-content-between align-items-center flex-wrap responsive">
                    {
                        Data.map((item) => {
                            return (
                                <>
                                    <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                                        <div className="cart_func">
                                            <img src={item.imgdata} alt="..." className="mt-3" />
                                        </div>
                                        <div className="text-center">
                                            <p className="data_title">{item.title}</p>
                                            <p className="data_product">{item.product}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>


            <TreadingProduct />
            <div className="container-fluid bg-light ">
                <div className="container mt-5 d-flex bg-light flex-wrap ">
                    <div className="col-lg-8 main_cartdiv col-12">
                        <img src={banner1} alt="..." className="img_responsive" />
                        <div className="mx-3 itemcart_text">
                            <p className="fs-6 fw-semibold">Sale 20% Off all store</p>
                            <p className="fs-3">SmartPhone BLU G91 Pro 2022</p>
                            <p className="fs-5 text-success fw-bold">shop Now</p>
                        </div>
                    </div>
                    <div className="col-lg-4 main_cartdiv">
                        <img src={banner2} alt="..." className="img_responsive" />
                        <div className="mx-3 itemcart_text">
                            <p className="fs-4">HyperX Cloud 2 Wireless</p>
                            <p className="fs-6 fw-semibold">Sale 35% Off</p>
                            <p className="fs-5 text-success fw-bold">shop Now</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4 bg-light ">
                <div className="container  d-flex justify-content-between flex-wrap p-2 responsive">
                    <div className="d-flex flex-column bg-white p-3  box_responsive">
                        <div className="">
                            <img src="https://img.icons8.com/ios/50/null/free-shipping.png" alt="..." />
                        </div>
                        <span className="data_text">Free Delivary</span>
                        <sapn className="data_item">Orders from all Items</sapn>
                    </div>
                    <div className="d-flex flex-column bg-white p-3  box_responsive">
                        <div className="">
                            <img src="https://img.icons8.com/ios/50/null/refund-2.png" alt="..." />
                        </div>
                        <span className="data_text">Return & Refund</span>
                        <sapn className="data_item">Money Back Garntee</sapn>
                    </div>
                    <div className="d-flex flex-column bg-white p-3  box_responsive">
                        <div className="">
                            <img src="https://img.icons8.com/ios/50/null/discount--v1.png" alt="..." />
                        </div>
                        <span className="data_text">Member Discount</span>
                        <sapn className="data_item">on every Order $10.00</sapn>
                    </div>
                    <div className=" d-flex flex-column bg-white p-3  box_responsive">
                        <div className="">
                            <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt="..." />
                        </div>
                        <span className="data_text">Support 24/7</span>
                        <sapn className="data_item">Contatus Us 24 hoursa day</sapn>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Addtion