import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "./index.css"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {EffectCoverflow, Pagination, Navigation} from "swiper/modules";

import projects from "../../content/projects/projects";

const SliderProjects = () => {
    return (
        <div className = "custom_swiper">
        <h1 className="project_slider_title">Праекты</h1>
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
        {projects.map(element => {
            return(
            <SwiperSlide key={element.surname}>
                <div className="slider_content">
                    <img className="project_image" src={element.image} alt={element.name}></img>
                    <p className="slider_text">{element.name}</p>
                    <p className="slider_text">Аўтар: {element.author}</p>
                    <p className="slider_text">Рэжысёр: {element.director}</p>
                    <p className="slider_text">Музыка: {element.music}</p>
                    <p className="slider_text">Прэмьера: {element.premiere}</p>
                    <br/>
                    <p className="project_description">{element.discription}</p>
                    <p className="slider_text">Працягласць: {element.time}</p>
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

export default SliderProjects;