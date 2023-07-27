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
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className=" absolute right-[52%] h-48 w-48 bg-blue-200"
        />
      </div>
    </div>
  )
}

