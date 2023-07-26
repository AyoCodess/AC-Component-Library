"use client"

import React from "react"
import { ResizeArea } from "./resize-area"

export function ComponentSection({
  initialWidth,
  initialHeight,
  componentMobile,
  componentDesktop,
}: {
  initialWidth: { Desktop: number; Mobile: number } | undefined
  initialHeight?: { Desktop: number; Mobile: number }
  componentMobile: React.ReactNode
  componentDesktop: React.ReactNode
}) {
  return (
    <ResizeArea
      initialWidth={initialWidth!}
      initialHeight={initialHeight ?? null}
      componentMobile={componentMobile}
      componentDesktop={componentDesktop}
    />
  )
}
