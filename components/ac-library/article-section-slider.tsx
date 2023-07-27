"use client"

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
