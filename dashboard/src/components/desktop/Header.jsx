import React from "react"
import { Triangle } from "lucide-react"

const Header = () => {
  return (
    <header className="min-h-[50px] flex items-center justify-between px-6 bg-[rgba(12,13,12,1)] border-b border-[#1f1f1f] text-white">
      <div className="flex items-center gap-4">
        <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
          <Triangle size={12} className="text-black" />
        </div>
        <span className="text-sm font-semibold">Vertxlabs, Inc</span>
        <span className="text-sm text-white/70">Analytics</span>
      </div>

      <div className="flex items-center text-sm text-[#4B4B4B]">
        <button className="px-4 py-2 border-l border-[#1f1f1f] hover:text-white">Activity</button>
        <button className="px-4 py-2 border-l border-[#1f1f1f] hover:text-white">Log out</button>
      </div>
    </header>
  )
}

export default Header
