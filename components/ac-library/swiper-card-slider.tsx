"use client"

import Image from "next/image"
import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper/modules"

export default function SwiperCardSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>"
    },
  }

  return (
    <div className="relative mx-auto h-full w-full ">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.name}>
              <Slide selectedSlide={slide} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="flex gap-2">
        <div>next</div>
        <div>previous</div>
      </div>
    </div>
  )
}

interface Slide {
  label: string
  src: string
  description: string
}

function Slide({ selectedSlide }: { selectedSlide: Slide }) {
  return (
    <div className="flex h-[30rem] w-[30rem] flex-col bg-white   ">
      <div className="absolute top-0 flex h-full  flex-col ">
        <div className="relative flex h-1/2">
          <h2 className="flex self-end p-4 text-left text-xl font-bold ">
            {selectedSlide.label}
          </h2>
          <Image
            fill
            alt={selectedSlide.label}
            className=" absolute left-0 top-0 z-0 h-full w-full object-cover object-left-top opacity-30 "
            src={selectedSlide.src}
          />
        </div>
        <p className=" h-20 border-t border-gray-100 p-4 ">
          {selectedSlide.description}
        </p>
      </div>
    </div>
  )
}

const slides = [
  {
    name: "app",
    label: "The App slide",
    src: "/images/work3.jpg",
    description:
      "The App Slide - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at expedita ea recusandae reprehenderit hic accusantium, facere cumque maiores rem tempore voluptates accusamus atque veritatis, tenetur excepturi corporis sint natus!",
  },
  {
    name: " web ",
    label: "The Web slide",
    src: "/images/blog/2.jpeg",
    description:
      "The web slide - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at expedita ea recusandae reprehenderit hic accusantium, facere cumque maiores rem tempore voluptates accusamus atque veritatis, tenetur excepturi corporis sint natus!",
  },
  {
    ux: "ux",
    label: "The UX slide",
    src: "/images/blog/3.jpeg",
    description:
      "the ux side - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at expedita ea recusandae reprehenderit hic accusantium, facere cumque maiores rem tempore voluptates accusamus atque veritatis, tenetur excepturi corporis sint natus!",
  },
  {
    system: "system",
    label: "The System slide",
    src: "/images/work2.jpg",
    description:
      "the system side - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at expedita ea recusandae reprehenderit hic accusantium, facere cumque maiores rem tempore voluptates accusamus atque veritatis, tenetur excepturi corporis sint natus!",
  },
]
