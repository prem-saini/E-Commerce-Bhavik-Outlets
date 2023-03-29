import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "./Navbar"
import { ADD, REMOVE, DLT } from "../actions/Action";
import "./Addtion.css"
import del from "../Image/delete.png"
import { useNavigate } from "react-router-dom";

function AddToCart() {

    const [price, setPrice] = useState(0)
    const Addto = useSelector((state) => state.cartreducer.carts)
    const Addlength = Addto?.Addlength
    // console.log(Addlength, "opl")
    // console.log(Addto, "mok")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const dlt = (id) => {
        dispatch(DLT(id))
        if (!Addlength) {
            navigate('/')
        } else {

        }
        // console.log(dlt, "prem")

    }


    const Add = (e) => {

        dispatch(ADD(e));
        console.log(Add, "prem")

    }

    const remove = (value) => {
        dispatch(REMOVE(value))
        console.log(remove, "ppp")
    }
    const total = () => {
        let price = 0;
        Addto.map((ele, k) => {
            price = ele.price * ele.qnty + price
        })
        setPrice(price)
    };

    useEffect(() => {
        total();
    }, [total])
    return (
        <>
            <div className="d-flex justify-content-between pricecart_responsive">
                <div className="container-fluid d-flex flex-column p-2">
                    {Addto &&
                        Addto?.map((value, index) => {
                            return (
                                <>
                                    <div className="Card_main d-flex container">
                                        <div className="card col-lg-5">
                                            <img src={value?.thumbnail} alt="..." />
                                        </div>
                                        <div>
                                            <div className="card-body mx-5 mt-2 col-lg-7">
                                                <p className="singlepage_data">{value?.title}</p>
                                                <p className="siglepage_des">{value?.description}</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="singlepage_data">{value?.category}</p>
                                                    <p className="text-black fw-lighter fs-6">Price:${value?.price * value.qnty}</p> </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex justify-content-evenly align-items-center flex-column">
                                                        <div className="">Quantity</div>
                                                        <div className="bg-light">
                                                            <span className="fs-5 mx-3 text_btn" onClick={value.qnty <= 1 ? () => dlt(value?.id) : () => remove(value)}>-</span>
                                                            <span className="fs-5 mx-3 text_btn">{value.qnty}</span>
                                                            <span className="fs-5 mx-3 text_btn" onClick={() => Add(value)}>+</span>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <img src={del} alt="..." onClick={() => dlt(value?.id)} />
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div >
                <div className="d-flex addCartprice mt-5 me-5 justify-content-between p-3">

                    <span className="mt-3">Total : ${price}</span>
                    <div className="mt-2">
                        <button className="btn btn-success">Buy Now</button></div>
                </div>
            </div>
            {/* <hr /> */}


        </>
    )
}
export default AddToCart