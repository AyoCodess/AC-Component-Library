"use client"

const slides = [
  {
    app: {
      label: "The App slide",
      src: "/images/work3.jpg",
      description:
        "The App Slide - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at expedita ea recusandae reprehenderit hic accusantium, facere cumque maiores rem tempore voluptates accusamus atque veritatis, tenetur excepturi corporis sint natus!",
    },
    web: {
      label: "The Web slide",
      src: "/images/blog/2.jpeg",
      description:
        "The web slide - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at expedita ea recusandae reprehenderit hic accusantium, facere cumque maiores rem tempore voluptates accusamus atque veritatis, tenetur excepturi corporis sint natus!",
    },
    ux: {
      label: "The UX slide",
      src: "/images/blog/3.jpeg",
      description:
        "the ux side - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at expedita ea recusandae reprehenderit hic accusantium, facere cumque maiores rem tempore voluptates accusamus atque veritatis, tenetur excepturi corporis sint natus!",
    },
    system: {
      label: "The System slide",
      src: "/images/work2.jpg",
      description:
        "the system side - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at expedita ea recusandae reprehenderit hic accusantium, facere cumque maiores rem tempore voluptates accusamus atque veritatis, tenetur excepturi corporis sint natus!",
    },
  },
]

import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper/modules"


export function SwiperHeroSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<span class="' + className + " " + 'mt-5 ">' + (index + 1) + "</span>"
      )
    },
  }

  return (
    <div className="mx-auto h-60 w-full">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-60 w-full bg-red-100"></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-60 w-full bg-red-200"></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-60 w-full bg-red-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-60 w-full bg-red-400"></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-60 w-full bg-red-500"></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-60 w-full bg-red-600"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
