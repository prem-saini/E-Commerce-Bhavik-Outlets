import React, { useState } from "react"
import "./SinglePage.css"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ADD } from "../actions/Action"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"

function Singlepage() {

    const location = useLocation()
    const [image, setImg] = useState(<img src={location.state?.images[0]
    } alt="..." />)
    const { id } = useParams()
    const dispatch = useDispatch()
    const senddata = () => {
        dispatch(ADD(location.state))
    }
    console.log(location.state, "prem");

    return (
        <>

            <div>
                <Helmet>
                    <title>MY SINGLE PAGE || Bhavik Outlets</title>
                    <meta name="description" content="My Page Description" />
                    <meta name="keywords" content="My, Page, Keywords" />
                </Helmet>

            </div>
            <div className="container-fluid mt-3">
                <div className="d-flex justify-content-between flex-wrap single_page p-4 mt-2 container">

                    <div className="d-flex mt-5 Card_main p-3">
                        <div className="d-flex flex-column col-lg-1" >
                            <img src={location.state?.images[0]} alt="..." className="single_img_page" onMouseOver={() => setImg(location.state.images[0])} />
                            <img src={location.state?.images[1]} alt="..." className="single_img_page" onMouseOver={() => setImg(location.state.images[1])} />
                            <img src={location.state?.images[2]} alt="..." className="single_img_page" onMouseOver={() => setImg(location.state.images[2])} />
                            <img src={location.state?.images[3]} alt="..." className="single_img_page" onMouseOver={() => setImg(location.state.images[3])} />
                            {/* <img src={location.state?.images[4]} alt="..." className="single_img_page" onMouseOver={() => setImg(location.state.images[4])} /> */}
                        </div>
                        <div class="col-lg-4" >
                            <img src={image} alt="..." className="m-1 singlepage_img" />
                        </div>


                        <div class="card-body mx-5 col-lg-5">
                            <p className="singlepage_data">{location.state?.title}</p>
                            <p className="singlepage_data">{location.state?.brand}</p>
                            <p class="siglepage_des">{location.state.description}</p>
                            <div className="d-flex justify-content-between">
                                <p className="singlepage_data">Price:{location.state.price}</p>
                                <p className="singlepage_data">Rating:{location.state.rating}</p>
                            </div>
                            <div className="">
                                <p className="singlepage_data">Colors:</p>
                                <p className="fs-4">🔴  🟠  🟡  🟢</p>

                            </div>
                            <button className="btn_addtcart mt-3" onClick={() => senddata(id)}>ADD TO CART</button>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Singlepage