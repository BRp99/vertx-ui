import React from "react"

const Header = () => {
  return (
    <header className="min-h-[50px] hidden items-center justify-between pl-6 border-b font-semibold desktop:flex">
      <div className="flex items-center gap-4">
        <span className="text-base font-semibold">Profile</span>
      </div>

      <div className="flex h-full items-center">
        <button className="h-full w-[120px] border-l text-base font-semibold">Activity</button>
        <button className="h-full w-[120px] border-l text-base font-semibold">Log out</button>
      </div>
    </header>
  )
}

export default Header
