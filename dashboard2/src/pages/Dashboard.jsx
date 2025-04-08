import React, { useState } from "react"
import DesktopLayout from "../layouts/DesktopLayout"
import InsightsCard from "../components/desktop/InsightsCard"
import DemographicsCard from "../components/desktop/DemographicsCard"
import DashboardTabs from "../components/desktop/DashboardTabs"
import MobileHeader from "../components/mobile/MobileHeader"
import BottomNav from "../components/mobile/BottomNav"
import ProfileCompaniesCard from "../components/desktop/ProfileCompaniesCard"

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
              <div className="flex flex-col gap-y-6">
                <DemographicsCard />
                <div className="flex flex-col desktop:flex-row">
                  <div className="w-full desktop:flex-1">
                    <ProfileCompaniesCard
                      title="Founded Companies"
                      count="02"
                      companies={[
                        {
                          name: "Vertx",
                          logo: "/src/assets/images/vertx-logo.png",
                          tag: "CEO",
                          description: (
                            <>
                              Founded in 2025. in <span className="text-primary font-bold">Fintech</span>.
                            </>
                          ),
                        },
                        {
                          name: "Company",
                          logo: "/src/assets/images/company2-logo.png",
                          tag: "PROPRIETOR",
                          description: "Details/information like acquired /exit/m&a",
                        },
                      ]}
                    />
                  </div>
                  <InsightsCard />
                </div>
              </div>
            </>
          )}
        </div>
      </DesktopLayout>
      <BottomNav />
    </>
  )
}

export default Dashboard
