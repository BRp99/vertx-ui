import React from "react"

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className={`flex items-center justify-between h-[50px] font-semibold border-b`}>
      <div className="flex items-center justify-evenly desktop:justify-start h-full w-full text-xs desktop:text-base">
        <button
          onClick={() => setActiveTab("Overview")}
          className={`min-w-[120px] px-6 h-full transition-colors desktop:border-r ${
            activeTab === "Overview"
              ? "text-white border-b-2 desktop:border-b-0 border-white desktop:border-border"
              : "text-secondary hover:text-white"
          }`}
        >
          Overview
        </button>

        <button
          onClick={() => setActiveTab("Portfolio")}
          className={`min-w-[120px] px-6 h-full transition-colors desktop:border-r ${
            activeTab === "Portfolio" ? "text-white border-b-2 desktop:border-b-0 border-white desktop:border-border" : "text-[#555] hover:text-white"
          }`}
        >
          Portfolio
        </button>

        <button
          onClick={() => setActiveTab("Experience")}
          className={`min-w-[120px] px-6 h-full transition-colors desktop:border-r ${
            activeTab === "Experience"
              ? "text-white border-b-2 desktop:border-b-0 border-white desktop:border-border"
              : "text-[#555] hover:text-white"
          }`}
        >
          Experience
        </button>

        <button
          onClick={() => setActiveTab("Media")}
          className={`min-w-[120px] px-6 h-full transition-colors desktop:border-r ${
            activeTab === "Media" ? "text-white border-b-2 desktop:border-b-0 border-white desktop:border-border" : "text-[#555] hover:text-white"
          }`}
        >
          Media
        </button>
      </div>

      <button className={`min-w-[120px] h-full hidden desktop:block desktop:border-l`} onClick={() => console.log("More clicked")}>
        More
      </button>
    </div>
  )
}

export default DashboardTabs
