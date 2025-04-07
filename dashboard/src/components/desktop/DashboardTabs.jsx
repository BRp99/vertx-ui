import React from "react"

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Overview", "Demographics"]

  return (
    <div className="flex items-center justify-between border-b border-[#1c1c1c] mb-6 px-1 bg-[rgba(12,13,12,1)]">
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium transition-colors duration-150 ${
              activeTab === tab ? "text-white border-b-2 border-white" : "text-[#4B4B4B] hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <button className="text-sm text-[#4B4B4B] hover:text-white px-4 py-2 border-l border-[#1f1f1f]" onClick={() => console.log("More clicked")}>
        More
      </button>
    </div>
  )
}

export default DashboardTabs
