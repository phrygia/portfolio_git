import React from "react";
import styles from "../assect/css/main.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import TestImg from "../assect/img/test.png";

SwiperCore.use([Navigation]);

function Blog() {
    return (
        <>
            <ul className={styles.blog_wrap}>
                <li>
                    <h1>Blog</h1>
                    <Swiper
                        slidesPerView={3}
                        navigation
                        speed={600}
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log("slide change")}
                    >
                        <SwiperSlide>
                            <div className={styles.blog_inner}>
                                <a className={styles.thumb}>
                                    <img src={TestImg} />
                                </a>
                                <p>December 10, 2020</p>
                                <a>
                                    [javascript] Object.assign() &
                                    Object.create()
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.blog_inner}>
                                <a className={styles.thumb}>
                                    <img src={TestImg} />
                                </a>
                                <p>December 02, 2020</p>
                                <a>
                                    [html] 특정 영역으로 스크롤 이동 -
                                    앵커기능(anchor) vs data 속성
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.blog_inner}>
                                <a className={styles.thumb}>
                                    <img src={TestImg} />
                                </a>
                                <p>November 25, 2020</p>
                                <a>
                                    [javascript] 함수의 call, apply, bind 메서드
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.blog_inner}>
                                <a className={styles.thumb}>
                                    <img src={TestImg} />
                                </a>
                                <p>November 16, 2020</p>
                                <a>[react] 모달 팝업창 만들기 (react modal)</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.blog_inner}>
                                <a className={styles.thumb}>
                                    <img src={TestImg} />
                                </a>
                                <p>November 10, 2020</p>
                                <a>[web] 반응형(RWD)웹과 적응형(AWD)웹</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.blog_inner}>
                                <a className={styles.thumb}>
                                    <img src={TestImg} />
                                </a>
                                <p>November 04, 2020</p>
                                <a>
                                    [javascript] 객체 수정 제어 :
                                    preventExtensions(), seal(), freeze()
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </li>
                <li className={styles.circle} />
            </ul>
        </>
    );
}

export default Blog;
