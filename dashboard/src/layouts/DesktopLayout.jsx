import React from "react"
import Sidebar from "../components/desktop/Sidebar"
// import Topbar from "../components/desktop/Topbar"
import Header from "../components/desktop/Header"

const DesktopLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}

export default DesktopLayout
