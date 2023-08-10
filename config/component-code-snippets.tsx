import { ArticleSectionSlider } from "@/components/ac-library/article-section-slider"
import { MiscDivider } from "@/components/ac-library/misc-divider"
import { SwiperBackgroundSlider } from "@/components/ac-library/swiper-background-slider"
import { SwiperBlogSlider } from "@/components/ac-library/swiper-blog-slider"
import SwiperCardSlider from "@/components/ac-library/swiper-card-slider"
import { SwiperHeroSlider } from "@/components/ac-library/swiper-hero-slider"

import { SwiperLogoSlider } from "@/components/ac-library/swiper-logo-slider"

export const components = [
  {
    Title: "Animated Div Split",
    component: <MiscDivider />,
    code: `"use client"
import { motion } from "framer-motion"
import React, { useState } from "react"

export function MiscDivider() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="mx-auto w-fit">
      <div
        onMouseEnter={() => {
          setIsHovered(true)   
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
        className="relative flex items-center justify-center  "
      >
        <motion.div
          initial={false}
          animate={
            isHovered
              ? {
                  backgroundColor: "red",
                  translateX: "30%",
                }
              : {}
          }
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className=" absolute left-[52%] h-28 w-28 bg-blue-200"
        />
        <div className="h-40 w-40 bg-blue-400" />
        <motion.div
          initial={false}
          animate={
            isHovered
              ? {
                  backgroundColor: "red",
                  translateX: "-30%",
                }
              : {}
          }
           transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className=" absolute right-[52%] h-28 w-28 bg-blue-200"
        />
      </div>
    </div>
  )
}`,
  },
  {
    Title: "Article Section Slider",
    component: <ArticleSectionSlider />,
    code: `"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const slides = [
  {
    app: {
      label: "The App slide",
      src: "/images/work3.jpg",
      description:
        "The App Slide - eprehenderit hic accusantium, facere cumque maiores rem tempore voluptates accusamus atque veritatis, tenetur excepturi corporis sint natus!",
    },
    web: {
      label: "The Web slide",
      src: "/images/blog/2.jpeg",
      description:
        "The web slide - Loredolor sit amet consectetur adipisicing elit. Quaerat at expedita ea recusandae reprehenderit hic accusantium, facere cumque maiores rem tempore voluptates accusamus !",
    },
    ux: {
      label: "The UX slide",
      src: "/images/blog/3.jpeg",
      description:
        "the ux side - facere cumque maiores rem tempore voluptates accusamus atque veritatis, tenetur excepturi corporis sint natus! Lorem ipsum dolor sit amet conat expedita ea recusandae rnatus!",
    },
    system: {
      label: "The System slide",
      src: "/images/work2.jpg",
      description:
        "the system side - hic atque veritatis, tenetur excepturi corporis sint natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at turi sint natus!",
    },
  },
]

export function ArticleSectionSlider() {
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(
    slides[0].app
  )
  return (
    <div className=" mx-4 lg:mx-auto lg:max-w-4xl  ">
      <div className="flex w-full flex-col bg-white sm:h-96 sm:flex-row  ">
        <div className="flex h-full flex-col  items-center justify-center py-6 sm:w-1/2 sm:py-0">
          <ul className="flex flex-col items-center justify-center gap-4 sm:items-start sm:justify-start">
            {slides.map((slide) => {
              return Object.values(slide).map((slideItem) => {
                return (
                  <LinkComponent
                    key={slideItem.label}
                    label={slideItem.label}
                    setSelectedSlide={setSelectedSlide}
                    slide={slideItem}
                  />
                )
              })
            })}
          </ul>
        </div>
        {/* slide area */}
        <div className=" relative flex h-[20rem] flex-col border-l border-gray-100 sm:h-full sm:w-1/2">
          <AnimatePresence initial={false}>
            {selectedSlide && (
              <motion.div
                className="h-full w-full "
                key={selectedSlide.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  ease: "linear",
                  duration: 0.3,
                }}
              >
                <Slide selectedSlide={selectedSlide} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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
    <div className="flex h-full flex-col bg-white   ">
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

function LinkComponent({
  label,
  setSelectedSlide,
  slide,
}: {
  label: string
  setSelectedSlide: any
  slide: Slide | null
}) {
  const [isHovered, setIsHovered] = useState(false)
  function handleSelectSlide(slide: Slide | null) {
    setSelectedSlide(slide)
  }

  return (
    <li
      className="font bold relative w-fit  cursor-pointer transition-transform duration-300 ease-in-out sm:hover:translate-x-5"
      onClick={() => {
        handleSelectSlide(slide)
        setIsHovered(false)
      }}
      onMouseEnter={() => {
        handleSelectSlide(slide)
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
    >
      <div>
        <p className="text-xl">{label}</p>

        <AnimatedUnderline
          label={label}
          slide={slide}
          isHovered={isHovered}
          handleSelectSlide={handleSelectSlide}
        ></AnimatedUnderline>
      </div>
    </li>
  )
}

function AnimatedUnderline(props: {
  label: string
  slide: Slide | null
  isHovered: boolean
  handleSelectSlide: any
}) {
  return (
    <AnimatePresence>
      {props.isHovered && (
        <motion.div
          key={props.label}
          className="absolute h-0.5 cursor-pointer bg-black"
          initial={{
            width: "0%",
          }}
          animate={{
            width: "100%",
            transition: {
              duration: 0.7,
            },
          }}
          exit={{
            width: "0%",
            transition: {
              duration: 0.5,
            },
          }}
          onMouseEnter={() => props.handleSelectSlide(props.slide)}
          onMouseLeave={() => props.handleSelectSlide(props.slide)}
          onClick={() => props.handleSelectSlide(props.slide)}
        ></motion.div>
      )}
    </AnimatePresence>
  )
}
`,
  },
  {
    Title: "Swiper Blog Slider",
    component: <SwiperBlogSlider />,
    code: `"use client"

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
`,
  },
  {
    Title: "Swiper Hero Slider",
    component: <SwiperHeroSlider />,
    code: `"use client"

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

import React, { RefAttributes, useRef, useState } from "react"
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
        '<div class="' +
        className +
        ' " style="background-color: white; width: 35px; height: 4px; border-radius: 0"></div>'
      )
    },
  }

  return (
    <div className="mx-auto w-full">
      <Swiper
        // @ts-ignore
        {...({} as IntrinsicAttributes & RefAttributes)}
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
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

`,
  },
  {
    Title: "Swiper Background Slider",
    component: <SwiperBackgroundSlider />,
    code: `"use client"

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
`,
  },
  {
    Title: "Swiper Card Slider",
    component: <SwiperCardSlider />,
    code: `"use client"

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
`,
  },
  {
    Title: "Swiper Logo Slider",
    component: <SwiperLogoSlider />,
    code: `"use client"

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


`,
  },
]
