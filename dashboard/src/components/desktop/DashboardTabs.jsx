import React from "react"

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center justify-between border-b h-[50px] font-semibold">
      <div className="flex items-center h-full">
        <button
          onClick={() => setActiveTab("Overview")}
          className={`min-w-[120px] px-6 h-full transition-colors desktop:border-r ${
            activeTab === "Overview" ? "text-white border-b-2 border-white" : "text-secondary hover:text-white"
          }`}
        >
          Overview
        </button>

        <button
          onClick={() => setActiveTab("Reports")}
          className={`min-w-[120px] px-6 h-full transition-colors desktop:hidden ${
            activeTab === "Reports" ? "text-white border-b-2 border-white" : "text-secondary hover:text-white"
          }`}
        >
          Reports
        </button>

        <button
          onClick={() => setActiveTab("Demographics")}
          className={`min-w-[120px] px-6 h-full transition-colors desktop:border-r ${
            activeTab === "Demographics" ? "text-white border-b-2 border-white" : "text-secondary hover:text-white"
          }`}
        >
          Demographics
        </button>
      </div>

      <button className="w-[120px] h-full desktop:border-l hidden desktop:block" onClick={() => console.log("More clicked")}>
        More
      </button>
    </div>
  )
}

export default DashboardTabs
