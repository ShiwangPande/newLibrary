import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../pages/Products.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function Gatecard1() {

    return (
        <div><Swiper
            slidesPerView={4}
            // spaceBetween={30}
            pagination={{
                type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><div className='cards'>
                <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://i.postimg.cc/mgywMD79/bce-cover-book.png" alt="" /> </a>
                <div className='cards__stats'>
                    {/* <span>{props.id}</span> */}
                </div>
                <p className='cards__title'>BCE</p>
            </div></SwiperSlide>
            <SwiperSlide><div className='cards'>
                <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://i.postimg.cc/mgywMD79/bce-cover-book.png" alt="" /> </a>
                <div className='cards__stats'>
                    {/* <span>{props.id}</span> */}
                </div>
                <p className='cards__title'>BCE</p>
            </div></SwiperSlide>
            <SwiperSlide><div className='cards'>
                <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://i.postimg.cc/mgywMD79/bce-cover-book.png" alt="" /> </a>
                <div className='cards__stats'>
                    {/* <span>{props.id}</span> */}
                </div>
                <p className='cards__title'>BCE</p>
            </div></SwiperSlide>
            <SwiperSlide><div className='cards'>
                <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://i.postimg.cc/mgywMD79/bce-cover-book.png" alt="" /> </a>
                <div className='cards__stats'>
                    {/* <span>{props.id}</span> */}
                </div>
                <p className='cards__title'>BCE</p>
            </div></SwiperSlide>
            <SwiperSlide><div className='cards'>
                <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://i.postimg.cc/mgywMD79/bce-cover-book.png" alt="" /> </a>
                <div className='cards__stats'>
                    {/* <span>{props.id}</span> */}
                </div>
                <p className='cards__title'>BCE</p>
            </div></SwiperSlide>
            <SwiperSlide><div className='cards'>
                <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://i.postimg.cc/mgywMD79/bce-cover-book.png" alt="" /> </a>
                <div className='cards__stats'>
                    {/* <span>{props.id}</span> */}
                </div>
                <p className='cards__title'>BCE</p>
            </div></SwiperSlide>
            <SwiperSlide><div className='cards'>
                <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://i.postimg.cc/mgywMD79/bce-cover-book.png" alt="" /> </a>
                <div className='cards__stats'>
                    {/* <span>{props.id}</span> */}
                </div>
                <p className='cards__title'>BCE</p>
            </div></SwiperSlide>
        </Swiper></div>
    )
}

export default Gatecard1