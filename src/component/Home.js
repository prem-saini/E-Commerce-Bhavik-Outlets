import React from "react"
import "./Home.css"
import sildeimg from "../Image/sildeimg.jpg"
import silde2 from "../Image/silde1.jpg"
import thirdimg from "../Image/silde3.jpg"
import firstimg1 from "../Image/sildem.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import "./styles.css";
import { Autoplay, Pagination, Navigation } from 'swiper';
import CateItem from "./CateItem"
import Addtion from "./Addtion"


function Home() {
    return (
        <>
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
                <SwiperSlide><img src={sildeimg} alt="..." /></SwiperSlide>
                <SwiperSlide><img src={silde2} alt="..." /></SwiperSlide>
                <SwiperSlide><img src={thirdimg} alt="..." /></SwiperSlide>
                <SwiperSlide><img src={firstimg1} alt="..." /></SwiperSlide>

            </Swiper>
            <CateItem />
            <Addtion />


        </>
    )
}

export default Home













