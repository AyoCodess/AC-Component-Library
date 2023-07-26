"use client"

import React from "react"
import { ResizeArea } from "./resize-area"

export function ComponentSection({
  initialWidth,
  initialHeight,
  componentMobile,
  componentDesktop,
}: {
  initialWidth: { Desktop: number; Mobile: number }
  initialHeight: { Desktop: number; Mobile: number }
  componentDesktop: React.ReactNode
  componentMobile: React.ReactNode
}) {
  return (
    <ResizeArea
      initialWidth={initialWidth!}
      initialHeight={initialHeight!}
      componentMobile={componentMobile}
      componentDesktop={componentDesktop}
    />
  )
}
