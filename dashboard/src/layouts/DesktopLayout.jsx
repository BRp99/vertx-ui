import React from "react"
import Sidebar from "../components/desktop/Sidebar"
import Header from "../components/desktop/Header"

const DesktopLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-background text-primary">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default DesktopLayout
