import React, { useState, useEffect } from "react"
import "./SinglePage.css"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ADD } from "../actions/Action"
import { Helmet } from "react-helmet"

function Singlepage() {



    const { id } = useParams()

    const [single, setSingle] = useState()
    // console.log(single, "premsaini")
    const dispatch = useDispatch()
    const senddata = (val) => {
        dispatch(ADD(single))

    }

    const Add = (e) => {

        dispatch(ADD(e));

    }
    const getSingleProduct = async () => {

        await fetch(`https://dummyjson.com/products/${id}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                setSingle(res)
                // console.log({ ...res, qnty: 2 }, 'chandra');
            })
    }
    useEffect(() => {
        getSingleProduct();
    }, [])

    // console.log(single, 'single');
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
                    <div className="d-flex mt-5 Card_main">
                        <div class="col-lg-5" >
                            <img src={single?.images[0]
                            } alt="..." className="m-1 singlepage_img" />
                        </div>

                        <div class="card-body mx-5 col-lg-10">
                            <p className="singlepage_data">{single?.title}</p>
                            <p className="singlepage_data">{single?.brand}</p>
                            <p class="siglepage_des">{single?.description}</p>
                            <div className="d-flex justify-content-between">
                                <p className="singlepage_data">Price:{single?.price}</p>
                                <p className="singlepage_data">Rating:{single?.rating}</p>
                            </div>
                            <div className="">
                                <p className="singlepage_data">Colors:</p>
                                <p className="fs-4">🔴  🟠  🟡 🟢  </p>

                            </div>
                            <div className="d-flex justify-content-evenly align-items-start flex-column">
                                <div className="">Quantity</div>
                                <div className="bg-light">
                                    <span className="fs-5 mx-3 text_btn">-</span>
                                    <span className="fs-5 mx-3 text_btn">{single?.qnty}</span>
                                    <span className="fs-5 mx-3 text_btn" onClick={() => Add(single)}>+</span>
                                </div>
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