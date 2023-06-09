import React from "react"
import "./Home.css"
// import sildeimg from "../Image/sildeimg.jpg"
// import silde2 from "../Image/silde1.jpg"
// import thirdimg from "../Image/silde3.jpg"
// import firstimg1 from "../Image/sildem.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import CateItem from "./CateItem"
import Addtion from "./Addtion"
import { Helmet } from "react-helmet"
import Slider from "../Silders"


function Home() {
    return (
        <>

            <div>
                <Helmet>
                    <title>MY HOME PAGE || Bhavik Outlets</title>
                    <meta name="description" content="My Page Description" />
                    <meta name="keywords" content="My, Page, Keywords" />
                </Helmet>

            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                rewind={true}

                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <div className="container-fluid">
                    {
                        Slider.map((value) => {
                            return (
                                <>
                                    <div className="container">
                                        <SwiperSlide >
                                            <img src={value.imges} alt="..." />
                                        </SwiperSlide>
                                    </div>


                                </>
                            )
                        })
                    }

                </div>

            </Swiper>
            <CateItem />
            <Addtion />


        </>
    )
}

export default Home












