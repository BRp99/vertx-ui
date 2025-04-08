import React from "react"

export default function ProfileBadge() {
  return (
    <div className="h-[140px] flex flex-col items-center justify-evenly border-b">
      <div className="relative size-[30px]">
        <div className="size-[30px] rounded-full bg-primary"></div>
        <div className="absolute bottom-[1px] right-[1px] bg-[#01754F] size-2 rounded-full"></div>
      </div>

      <div className="relative size-[30px]">
        <div className="size-[30px] rounded-full bg-primary"></div>
        <div className="absolute bottom-[1px] right-[1px] bg-[#8B3A08] size-2 rounded-full"></div>
      </div>

      <div className="relative size-[30px]">
        <div className="size-[30px] rounded-full bg-primary"></div>
        <div className="absolute bottom-[1px] right-[1px] bg-[#01754F] size-2 rounded-full"></div>
      </div>
    </div>
  )
}
