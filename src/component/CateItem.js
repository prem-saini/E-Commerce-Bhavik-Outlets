import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CateItem.css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Oval } from "react-loader-spinner";

function CateItem() {
    const navigate = useNavigate()
    const [item, setItem] = useState()
    const [type, setType] = useState([])
    console.log(type)



    const getCate = async (id) => {
        await fetch("https://dummyjson.com/products/categories", {
            method: "GET",
        })
            .then((res) => res.json())

            .then((res) => {
                setItem(res)


            })
    }
    useEffect(() => {
        getCate()
    }, [])

    const getsingleProduct = async (id) => {
        await fetch(`https://dummyjson.com/products/category/${id}`, {
            method: "GET",
        })
            .then((res) => res.json())

            .then((res) => {
                setType(res?.products)
                console.log(res, "joy")
                navigate("/categoriesitempage", { state: { id: 1, data: res.products } })

            })
    }

    return (
        <> {
            !item ? <span className="d-flex justify-content-center"> <Oval
                height={50}
                width={50}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}


            /> </span> : <>
                <div className="text-center">
                    <span className="Categories_heading">Categories</span>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    centeredSlides={true}

                    loop={true}
                    rewind={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,

                    }}
                    modules={[
                        Autoplay, Pagination, Navigation

                    ]} className="mySwiper mt-5"


                >

                    <div className="container-fluid">
                        {
                            item?.map((value, index) => {
                                return (
                                    <>
                                        <div className="container d-flex justify-content-between flex-wrap p-5 bg-white ">
                                            <SwiperSlide >
                                                <div className="item_span" onClick={() => getsingleProduct(value)}>{value}</div>
                                            </SwiperSlide>
                                        </div>


                                    </>
                                )
                            })
                        }

                    </div>

                </Swiper>
            </>
        }




        </>
    )
}

export default CateItem
