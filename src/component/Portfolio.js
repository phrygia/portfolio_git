import React, { useState } from "react";
import SwiperCore, { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Thumbs]);

function Portfolio() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            {/* Main Swiper -> pass thumbs swiper instance */}
            <Swiper thumbs={{ swiper: thumbsSwiper }}>
                {/* ... */}
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
            </Swiper>

            {/* Thumbs Swiper -> store swiper instance */}
            {/* It is also required to set watchSlidesVisibility and watchSlidesProgress props */}
            <Swiper
                onSwiper={setThumbsSwiper}
                watchSlidesVisibility
                watchSlidesProgress
            >
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
            </Swiper>
        </>
    );
}

export default Portfolio;
