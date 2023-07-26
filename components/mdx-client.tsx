"use client"

import React, { useState, useRef } from "react"
import { Mdx } from "@/components/mdx-components"

export function MdxClient({ code }: { code: any }) {
  return (
    <div>
      <Mdx code={code} />
    </div>
  )
}
