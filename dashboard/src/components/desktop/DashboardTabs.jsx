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
          onClick={() => setActiveTab("Reports")}
          className={`min-w-[120px] px-6 h-full transition-colors desktop:hidden ${
            activeTab === "Reports" ? "text-white border-b-2 desktop:border-b-0 border-white" : "text-secondary hover:text-white"
          }`}
        >
          Reports
        </button>

        <button
          onClick={() => setActiveTab("Demographics")}
          className={`min-w-[120px] px-6 h-full transition-colors desktop:border-r  ${
            activeTab === "Demographics"
              ? "text-white border-b-2  desktop:border-b-0 border-white desktop:border-border"
              : "text-secondary hover:text-white"
          }`}
        >
          Demographics
        </button>
      </div>

      <button className={`min-w-[120px] h-full hidden desktop:block desktop:border-l`} onClick={() => console.log("More clicked")}>
        More
      </button>
    </div>
  )
}

export default DashboardTabs
