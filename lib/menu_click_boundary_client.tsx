"use client"

import React, { useEffect } from "react"
import { useMenuStore } from "@/stores/menu_store"
import { is } from "date-fns/locale"

export default function MenuClickBoundaryClient({
  children,
}: {
  children: React.ReactNode
}) {
  const { setIsOpen, isOpen, menuRef } = useMenuStore()

  useEffect(() => {
    console.log(isOpen ? "open" : "closed")
  }, [isOpen])

  const handleOutsideClick = (event: any) => {
    if (isOpen && menuRef?.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  return (
    <div className="flex flex-1 flex-col" onClick={handleOutsideClick}>
      {children}
    </div>
  )
}
