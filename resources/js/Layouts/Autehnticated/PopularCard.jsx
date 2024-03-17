import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../css/swiper.css";
import { Pagination } from "swiper/modules";

import { Head, Link } from "@inertiajs/react";

export default function PopularCard() {
    return (
        <>
            <section className="popular-card">
                <div className="popular-items">
                    <h5 className="title">Popular artists</h5>
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            568: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                            1200: {
                                spaceBetween: 25,
                                slidesPerView: 5,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card-items-popular">
                                <img src="/images/test.jpg" alt="" />
                                <h5>The Creator</h5>
                            </div>{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-items-popular">
                                <img src="/images/test.jpg" alt="" />
                                <h5>The Creator</h5>
                            </div>{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-items-popular">
                                <img src="/images/test.jpg" alt="" />
                                <h5>The Creator</h5>
                            </div>{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-items-popular">
                                <img src="/images/test.jpg" alt="" />
                                <h5>The Creator</h5>
                            </div>{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-items-popular">
                                <img src="/images/test.jpg" alt="" />
                                <h5>The Creator</h5>
                            </div>{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-items-popular">
                                <img src="/images/test.jpg" alt="" />
                                <h5>The Creator</h5>
                            </div>{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-items-popular">
                                <img src="/images/test.jpg" alt="" />
                                <h5>The Creator</h5>
                            </div>{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-items-popular">
                                <img src="/images/test.jpg" alt="" />
                                <h5>The Creator</h5>
                            </div>{" "}
                        </SwiperSlide>
                    </Swiper>
                    {/* <div className="card-items-popular">
                        <img src="/images/test.jpg" alt="" />
                        <h5>The Creator</h5>
                    </div> */}
                </div>
            </section>
        </>
    );
}
