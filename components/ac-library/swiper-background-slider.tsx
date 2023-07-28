"use client"

import { RefAttributes, useRef } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Autoplay } from "swiper/modules"

export function SwiperBackgroundSlider() {
  return (
    <div className="relative mx-auto ">
      <div className=" absolute z-10 h-full w-full  ">
        <div className="flex h-full flex-col items-center justify-center">
          <div className="flex w-full flex-col gap-2 p-4">
            <h1 className="font-bold">OUR FAKE SERVICE IS AWESOME</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim
              suscipit perspiciatis itaque illo, repudiandae veniam hic eos
              minima at doloribus, impedit odio consequuntur. Nemo eveniet a
              error maiores quas?
            </p>
            <div className="mt-2  w-fit rounded-sm bg-black px-4 py-2 text-center text-white">
              Learn more about our service
            </div>
          </div>
        </div>
      </div>
      <Swiper
        style={{}}
        // @ts-ignore
        {...({} as IntrinsicAttributes & RefAttributes)}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={700}
      >
        <SwiperSlide>
          <div className="h-96 w-full bg-red-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 w-full bg-blue-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 w-full bg-gray-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 w-full bg-yellow-400"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 w-full bg-green-500"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 w-full bg-violet-300"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
