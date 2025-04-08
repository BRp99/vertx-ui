import React, { useState } from "react"
import DesktopLayout from "../layouts/DesktopLayout"
import InsightsCard from "../components/desktop/InsightsCard"
import DemographicsCard from "../components/desktop/DemographicsCard"
import MetricChart from "../components/desktop/MetricChart"
import DashboardTabs from "../components/desktop/DashboardTabs"
import MobileHeader from "../components/mobile/MobileHeader"
import BottomNav from "../components/mobile/BottomNav"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <>
      <MobileHeader />
      <DesktopLayout>
        <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="px-6 desktop:px-[58px] py-[34px] bg-tertiary">
          {activeTab === "Overview" && (
            <>
              <h1 className="text-2xl font-extrabold mb-4">Overview</h1>
              <div className="flex flex-col desktop:flex-row gap-4">
                <div className="w-full desktop:flex-1">
                  <MetricChart />
                </div>
                <InsightsCard />
              </div>
              <DemographicsCard />
            </>
          )}
        </div>
      </DesktopLayout>
      <BottomNav />
    </>
  )
}

export default Dashboard
