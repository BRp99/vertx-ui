import React from "react"

const Header = () => {
  return (
    <header className="min-h-[50px] flex items-center justify-between pl-6 border-b font-semibold">
      <div className="flex items-center gap-4">
        <span>Analytics</span>
      </div>

      <div className="flex h-full items-center">
        <button className="h-full w-[120px] border-l">Activity</button>
        <button className="h-full w-[120px] border-l">Log out</button>
      </div>
    </header>
  )
}

export default Header
