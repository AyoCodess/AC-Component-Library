"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

export function MiscDivider() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="mx-auto w-fit">
      <div
        onMouseEnter={() => {
          setIsHovered(true)
          console.log("is hovered")
        }}
        onMouseLeave={() => {
          setIsHovered(false)
          console.log("is not ")
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
          transition={{ duration: 0.7, ease: "easeOut" }}
          className=" absolute left-[52%] h-48 w-48 bg-blue-200"
        />
        <div className="h-72 w-72 bg-blue-400" />
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
          transition={{ duration: 0.7, ease: "easeOut" }}
          className=" absolute right-[52%] h-48 w-48 bg-blue-200"
        />
      </div>
    </div>
  )
}

export function MiscDividerMobile() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="mx-auto w-fit">
      <div
        onMouseEnter={() => {
          setIsHovered(true)
          console.log("is hovered")
        }}
        onMouseLeave={() => {
          setIsHovered(false)
          console.log("is not ")
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
          transition={{ duration: 0.7, ease: "easeOut" }}
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
          transition={{ duration: 0.7, ease: "easeOut" }}
          className=" absolute right-[52%] h-28 w-28 bg-blue-200"
        />
      </div>
    </div>
  )
}
