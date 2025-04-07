import React from "react"

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center justify-between border-b h-[50px] font-semibold">
      <div className="flex items-center h-full">
        <button
          onClick={() => setActiveTab("Overview")}
          className={`min-w-[120px] px-6 border-r h-full transition-colors ${activeTab === "Overview" ? "" : "text-secondary hover:text-white"}`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("Demographics")}
          className={`min-w-[120px] px-6 border-r h-full transition-colors ${activeTab === "Demographics" ? "" : "text-secondary hover:text-white"}`}
        >
          Demographics
        </button>
      </div>

      <button className="w-[120px] h-full border-l" onClick={() => console.log("More clicked")}>
        More
      </button>
    </div>
  )
}

export default DashboardTabs
