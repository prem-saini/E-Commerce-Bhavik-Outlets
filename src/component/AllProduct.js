import React, { useState, useEffect } from "react"

import Header from "./Navbar"
import { useDispatch } from "react-redux"
import { ADD } from "../actions/Action"

function AllProduct() {
    const [response, setResponse] = useState()
    const [search, setSearch] = useState()
    const [result, setResult] = useState()
    // console.log(result, "hhh")

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

    const onSearch = async () => {

        await fetch(`https://dummyjson.com/products/search?q=${search}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                setResult(res?.products)

            })
    }
    return (
        <>
            <div className="mx-3 d-flex justify-content-between flex-wrap">
                <p className="product_heading">ALL PRODUCTS</p>
                <div >
                    <input type="text" className="mx-1 search_input" placeholder="Search Products..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={() => onSearch()} className="seacrh_btn">Search</button>
                </div>
            </div>

            <div className="d-flex justify-content-between flex-wrap p-2">
                {
                    result?.map((value) => {
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