import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "./index.css"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {EffectCoverflow, Pagination, Navigation} from "swiper/modules";

import comand from "../../content/comand/comand";

const Slider = () => {
    return (
        <div className = "custom_swiper">
        <h1 className="comand_slider_title">Каманда</h1>
        <Swiper         
            effect={ "coverflow" }
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            cowerflowEffect = {
                {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }
            }
            pagination={{el: ".swiper-pagination", clickable: true}}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
        >
        {comand.map(element => {
            return(
            <SwiperSlide >
                <img className="slider_image" src={element.photo} alt={element.name}></img>
                <p className="slider_text">{element.bio}</p>
                <div className="slider_icon_container">
                   <a className="slider_link_icon" href={element.insta}><ion-icon name="logo-instagram"></ion-icon></a>
                   <a className="slider_link_icon" href={element.mail}><ion-icon name="mail-open-outline"></ion-icon></a>
                </div>
            </SwiperSlide>
            )  
            })
        }

        <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
        </div>
        </Swiper>
       
        </div>
    )
};

export default Slider;