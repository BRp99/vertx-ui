import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

const options = ["Last 7 days", "Last 30 days", "Last 90 days", "This year"]

const DateRangeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState("Last 30 days")

  const handleSelect = (option) => {
    setSelected(option)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 bg-[#0a0a0a] text-sm text-gray-400 px-3 py-1.5 rounded-md cursor-pointer"
      >
        {selected}
        <ChevronDown size={16} />
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#1a1a1a] border border-gray-700 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <div key={option} onClick={() => handleSelect(option)} className="px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DateRangeDropdown
