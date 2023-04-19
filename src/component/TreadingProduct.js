import React from "react"
import Treading from "../Treading"

function TreadingProduct() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap container responsive">
                <span className="Trending_heading">Trending Products</span>
                <hr className="hr" />
                <div className="d-flex">
                    <p className="trending_text text-warning">New</p>
                    <p className="trending_text text-secondary">Featured</p>
                    <p className="trending_text text-secondary">Top Sellers</p>
                </div>
            </div>
            <div className="container-fluid bg-light ">
                <div className="container d-flex justify-content-between flex-wrap mt-3 responsive">
                    {
                        Treading.map((element) => {
                            return (
                                <>
                                    <div className="d-flex  flex-column trending_cart mt-2">
                                        <div className="">
                                            <img src={element.imgdata} alt="..." />
                                        </div>
                                        <div className="p-3">
                                            <p className="fs-6 fw-semibold">{element.title}</p>
                                            <p className="fs-6">{element.description.substring(0, 30)}</p>
                                            <p className="fs-6">{element.rating}</p>
                                            <p className="text-primary">Price:{element?.price}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default TreadingProduct