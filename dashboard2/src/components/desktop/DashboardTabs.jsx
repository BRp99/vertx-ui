import React from "react"

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className={`flex items-center justify-between h-[50px] font-semibold border-b`}>
      <div className="flex items-center justify-evenly desktop:justify-start h-full w-full text-xs desktop:text-base">
        <button
          onClick={() => setActiveTab("Overview")}
          className={`desktop:min-w-[120px] desktop:px-6 text[8px] h-full transition-colors desktop:border-r ${
            activeTab === "Overview"
              ? "text-primary border-b-2 desktop:border-b-0 border-white desktop:border-border"
              : "text-secondary hover:text-primary"
          }`}
        >
          Overview
        </button>

        <button
          onClick={() => setActiveTab("Portfolio")}
          className={`desktop:min-w-[120px] desktop:px-6 text[8px] h-full transition-colors desktop:border-r ${
            activeTab === "Portfolio"
              ? "text-primary border-b-2 desktop:border-b-0 border-white desktop:border-border"
              : "text-[#555] hover:text-primary"
          }`}
        >
          Portfolio
        </button>

        <button
          onClick={() => setActiveTab("Experience")}
          className={`desktop:min-w-[120px] desktop:px-6 text[8px] h-full transition-colors desktop:border-r ${
            activeTab === "Experience"
              ? "text-primary border-b-2 desktop:border-b-0 border-white desktop:border-border"
              : "text-[#555] hover:text-primary"
          }`}
        >
          Experience
        </button>

        <button
          onClick={() => setActiveTab("Media")}
          className={`desktop:min-w-[120px] desktop:px-6 text[8px] h-full transition-colors desktop:border-r ${
            activeTab === "Media" ? "text-primary border-b-2 desktop:border-b-0 border-white desktop:border-border" : "text-[#555] hover:text-primary"
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
