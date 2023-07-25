"use client"

import { useState } from "react"
import { Resizable } from "react-resizable"
import "react-resizable/css/styles.css" // Import the styles for the resizable component

export function ResizeArea({
  component,
  initialWidth: initialWidth,
}: {
  component: React.ReactNode
  initialWidth: number | undefined
}) {
  const [width, setWidth] = useState(initialWidth ? initialWidth : 300) // Set your initial width here

  return (
    <div className="relative bg-gray-100 p-4">
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "0px",
          height: "100%",
          background: "lightgray",
          cursor: "ew-resize", // Set the cursor to the resize icon
          zIndex: 1,
        }}
      />
      <Resizable
        width={width}
        height={700}
        minConstraints={[100, 100]}
        maxConstraints={[900, 900]}
        onResize={(e, data) => {
          setWidth(data.size.width)
        }}
      >
        <div style={{ width: `${width}px` }}>{component}</div>
      </Resizable>
    </div>
  )
}
