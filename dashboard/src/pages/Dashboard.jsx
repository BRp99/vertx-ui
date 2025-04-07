import React, { useState } from "react"
import DesktopLayout from "../layouts/DesktopLayout"
import InsightsCard from "../components/desktop/InsightsCard"
import DemographicsCard from "../components/desktop/DemographicsCard"
import MetricChart from "../components/desktop/MetricChart"
import DashboardTabs from "../components/desktop/DashboardTabs"
import DemographicsPanel from "../components/desktop/DemographicsPanel"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <DesktopLayout>
      <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Overview" && (
        <>
          <h1 className="text-2xl font-bold text-white mb-4 px-1">Overview</h1>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-2 flex flex-col gap-4 h-full">
              <MetricChart />
            </div>
            <div className="h-full">
              <InsightsCard />
            </div>
          </div>
          <DemographicsCard />
        </>
      )}

      {activeTab === "Demographics" && <DemographicsPanel />}
    </DesktopLayout>
  )
}

export default Dashboard
