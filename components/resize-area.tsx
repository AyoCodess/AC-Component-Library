"use client"


import { useReducer, useState } from "react"
import { Resizable } from "react-resizable"
import "react-resizable/css/styles.css" // Import the styles for the resizable component

function handleComponentSwitch(state: any, action: any) {
  switch (action) {
    case "mobile":
      return { type: "mobile", width: 300 }
    case "desktop":
      return { type: "desktop", width: 600 }
    default:
      return state
  }
}

export function ResizeArea({
  componentMobile,
  componentDesktop,
  initialWidth,
  initialHeight,
}: {
  componentMobile: React.ReactNode
  componentDesktop: React.ReactNode
  initialWidth: { Desktop: number; Mobile: number }
  initialHeight: { Desktop: number; Mobile: number }
}) {
  const [widthMobile, setWidthMobile] = useState(initialWidth.Mobile)
  const [widthDesktop, setWidthDesktop] = useState(initialWidth.Desktop)
  const [heightMobile, setHeightMobile] = useState(initialHeight.Mobile)
  const [heightDesktop, setHeightDesktop] = useState(initialHeight.Desktop)

  const [components, switchComponent] = useReducer(handleComponentSwitch, {
    type: "mobile",
    width: 300,
  })

  return (
    <div className="h-[40rem] w-full">
      <div className="mb-4 flex items-center justify-between ">
        <div className="flex gap-4">
          <div
            className="cursor-pointer rounded-sm bg-black px-4 py-2 text-white "
            role="button"
            onClick={() => switchComponent("mobile")}
          >
            mobile
          </div>
          <div
            role="button"
            className="cursor-pointer rounded-sm bg-black px-4 py-2 text-white "
            onClick={() => switchComponent("desktop")}
          >
            desktop
          </div>
        </div>
        <div className="rounded-sm px-4 py-2 font-bold shadow">
          Viewing: {components.type}
        </div>
      </div>
      <div className="relative flex h-full  items-center justify-center overflow-hidden bg-gray-100 p-4">
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
        {components.type === "mobile" && (
          <Resizable
            width={widthMobile}
            height={heightMobile ?? 700}
            minConstraints={[100, 100]}
            maxConstraints={[900, 900]}
            onResize={(e, data) => {
              setWidthMobile(data.size.width)
              setHeightMobile(data.size.height)
            }}
          >
            <div style={{ width: `${widthMobile}px` }}>{componentMobile}</div>
          </Resizable>
        )}
        {components.type === "desktop" && (
          <Resizable
            width={widthDesktop}
            height={heightDesktop ?? 700}
            minConstraints={[100, 100]}
            maxConstraints={[900, 900]}
            onResize={(e, data) => {
              setWidthDesktop(data.size.width)
              setHeightDesktop(data.size.height)
            }}
          >
            <div style={{ width: `${widthDesktop}px` }}>{componentDesktop}</div>
          </Resizable>
        )}
      </div>
    </div>
  )
}
