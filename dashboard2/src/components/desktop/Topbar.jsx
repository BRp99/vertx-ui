import React from "react"

const TopBar = () => {
  return (
    <div className="flex justify-end bg-[rgba(12,13,12,1)] border-b border-[#1f1f1f] text-sm text-[#4B4B4B]">
      <div className="flex">
        <button className="px-4 py-2 border-l border-[#1f1f1f] hover:text-white">Activity</button>
        <button className="px-4 py-2 border-l border-[#1f1f1f] hover:text-white">Log out</button>
      </div>
    </div>
  )
}

export default TopBar
