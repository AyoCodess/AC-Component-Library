"use client"

// Add this to your global css
// .swiper-wrapper {
//   transition-timing-function: linear !important;
// }

const slides = [
  {
    logo: "test1",
    src: "/images/work3.jpg",
  },
  {
    logo: "test2",
    src: "/images/blog/2.jpeg",
  },
  {
    logo: "test3",
    src: "/images/blog/3.jpeg",
  },
  {
    logo: "test4",
    src: "/images/work2.jpg",
  },
]

import React, { RefAttributes, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image"

// import required modules
import { Autoplay, Pagination } from "swiper/modules"

export function SwiperLogoSlider() {
  const [swiper, setSwiper] = useState(null)
  console.log("swiper", swiper)
  return (
    <div className="mx-auto w-full">
      <div className=" relative mx-auto h-full w-full ">
        <Swiper
          // @ts-ignore
          {...({} as IntrinsicAttributes & RefAttributes)}
          modules={[Autoplay]}
          className="mySwiper pointer-events-none"
          autoplay={{
            enabled: true,
            delay: 0,
            disableOnInteraction: true,
          }}
          loop={true}
          speed={3000}
          onSwiper={(swiper) => {
            setSwiper(swiper)
          }}
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide key={slide.src}>
                <Slide selectedSlide={slide} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

interface Slide {
  logo: string
  src: string
}

function Slide({ selectedSlide }: { selectedSlide: Slide }) {
  return (
    <div className="flex h-[30rem] w-[30rem] flex-col bg-white   ">
      <Image
        fill
        alt={selectedSlide.logo}
        className="  h-full w-full object-cover object-left-top  "
        src={selectedSlide.src}
      />
    </div>
  )
}
