import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CateItem.css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Oval } from "react-loader-spinner";
import { CategoriesProducts, SingleCategoriesProducts } from "../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";

function CateItem() {
    const AllCategories = useSelector((state) => state?.app)
    console.log(AllCategories, "fok")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [type, setType] = useState([])
    console.log(type)

    useEffect(() => {
        dispatch(CategoriesProducts())
    }, [])

    const getsingleProduct = (id) => {

        dispatch(SingleCategoriesProducts(id))
        navigate("/categoriesitempage", { state: { id: 1, data: SingleCategoriesProducts.products } })

    }

    return (
        <> {
            !AllCategories ? <span className="d-flex justify-content-center"> <Oval
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
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,

                    }}
                    modules={[
                        Autoplay, Pagination, Navigation

                    ]} className="mySwiper mt-5">

                    <div className="container-fluid">
                        {
                            AllCategories?.products?.map((value, index) => {
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
