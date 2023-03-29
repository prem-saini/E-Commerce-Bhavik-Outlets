import React, { useState, useEffect } from "react"

import Header from "./Navbar"
import { useDispatch } from "react-redux"
import { ADD } from "../actions/Action"

function AllProduct() {
    const [response, setResponse] = useState()

    const dispatch = useDispatch()

    const senddata = (val) => {
        // console.log(val, "jjjjj")
        dispatch(ADD(val))

    }

    const getProduct = async (id) => {
        // e.preventDefault();

        await fetch("https://dummyjson.com/products/", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                setResponse(res?.products)
                // console.log(res)
            })
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <>
            <div className="mx-3">
                <p className="product_heading">ALL PRODUCTS</p>
            </div>
            <div className="d-flex justify-content-between flex-wrap p-2">
                {
                    response?.map((value) => {
                        return (
                            <>

                                <div className="card m-2 card_style">
                                    <img src={value?.thumbnail
                                    } alt="..." className="card_img" />
                                    <div className="card-body">
                                        <p className="card-text">{value?.category}</p>
                                        <p className="card-text">{value?.description.substring(0, 50)}</p>
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text">{value?.title}</p>
                                            <p className="card-text">Price:{value?.price}</p>
                                        </div>

                                        <button className="btn_addItem" onClick={() => senddata(value)}>ADD ITEM</button>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default AllProduct