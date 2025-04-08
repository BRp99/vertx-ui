import React from "react"
import Sidebar from "../components/desktop/Sidebar"
import Header from "../components/desktop/Header"

const DesktopLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-background text-primary overflow-y-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="hidden mobile:block">
          <Header />
        </div>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default DesktopLayout
