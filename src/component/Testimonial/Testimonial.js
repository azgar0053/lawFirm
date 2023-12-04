import React from "react";
import styles from './Testimonial.module.css';
import ClientCard from "../ClientCard/ClientCard";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';



const Testimonial=()=>{
    return(
        <div className={styles.testimonialMain}>
            <div>
                <div className={styles.testimonialHeading}>
                    <h1>What says our</h1>
                    <h1>happy Clients</h1>
                </div>
                <div>
                    
                </div>
            </div>
            <div>
            <Swiper
            modules={[Navigation]}
            spaceBetween={25}
            slidesPerView={3}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide key='1'><ClientCard bgColor={"#1d1d1d"} clientName={'Azgar'}/></SwiperSlide>
                <SwiperSlide key='2'><ClientCard bgColor={"#2e2e2e"} clientName={'Hamza'}/></SwiperSlide>
                <SwiperSlide key='3'><ClientCard bgColor={"#1d1d1d"} clientName={'Ali'}/></SwiperSlide>
                <SwiperSlide key='4'><ClientCard bgColor={"#2e2e2e"} clientName={'Jane Cooper'}/></SwiperSlide>
                <SwiperSlide key='5'><ClientCard bgColor={"#1d1d1d"} clientName={'Devon jane'}/></SwiperSlide>
                <SwiperSlide key='6'><ClientCard bgColor={"#2e2e2e"} clientName={'Robert Fox'}/></SwiperSlide>


            </Swiper>

                
            </div>
        </div>
    )
}
export default Testimonial;