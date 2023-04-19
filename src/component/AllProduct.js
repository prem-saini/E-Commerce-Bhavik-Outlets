import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ADD } from "../actions/Action"
import { Helmet } from "react-helmet"
import { fetchProducts } from "../actions/ProductAction"

function AllProduct() {
    const AllProduct = useSelector((state) => state?.app)
    const [search, setSearch] = useState()
    const [result, setResult] = useState()

    const dispatch = useDispatch()
    const senddata = (val) => {
        dispatch(ADD(val))
    }
    useEffect(() => {
        dispatch(fetchProducts())
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

            <div>
                <Helmet>
                    <title>MY ALL PRODUCT PAGE || Bhavik Outlets</title>
                    <meta name="description" content="My Page Description" />
                    <meta name="keywords" content="My, Page, Keywords" />
                </Helmet>

            </div>
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
                {AllProduct?.products &&
                    AllProduct?.products?.map((value) => {
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