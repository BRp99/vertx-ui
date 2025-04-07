import React from "react"

export default function ProfileBadge() {
  return (
    <div className="size-[50px] grid place-items-center border-b">
      <div className="relative size-[30px]">
        <div className="overflow-hidden size-[30px] grid place-items-center rounded-full ">
          <img
            className="h-full object-cover"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>

        <div className="absolute bottom-[1px] right-[1px] bg-[#01754F] size-2 rounded-full"></div>
      </div>
    </div>
  )
}
