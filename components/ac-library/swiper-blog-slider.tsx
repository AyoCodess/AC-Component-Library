"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules"
import Image from "next/image"
import { RefAttributes } from "react"

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


const slides2 = [
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

export function SwiperBlogSlider() {
  return (
    <div className="w-full">
      <div className="">
        <Swiper
          // @ts-ignore
          {...({} as IntrinsicAttributes & RefAttributes)}
          slidesPerView={3}
          spaceBetween={30}
          // pagination={{
          //   clickable: true
          // }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}



interface Slide {
  label: string
  src: string
  description: string
}

function Slide({}: {}) {
  return (
    <div className="flex h-96 flex-col bg-white   ">
      <div className="flex h-full  flex-col ">
        <div className="relative flex h-1/2 w-full">
          <h2 className="flex self-end p-4 text-left text-xl font-bold ">
            {/* {selectedSlide.label} */}
            test
          </h2>
          <Image
            fill
            // alt={selectedSlide.label}
            alt="test"
            className=" z-0 h-full w-full   object-cover object-left-top opacity-30 "
            // src={selectedSlide.src}
            src="/images/blog/1.jpeg"
          />
        </div>
        <p className=" h-20 border-t p-4 ">
          {/* {selectedSlide.description} */}
          test
        </p>
      </div>
    </div>
  )
}
