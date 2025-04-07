import React from "react"

export function Card({ className, ...props }) {
  return <div className={`rounded-2xl border border-gray-800 bg-[#0d0d0d] shadow-sm ${className}`} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={`p-4 ${className}`} {...props} />
}
