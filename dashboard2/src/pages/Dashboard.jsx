import React, { useState } from "react"
import DesktopLayout from "../layouts/DesktopLayout"
import DashboardTabs from "../components/desktop/DashboardTabs"
import MobileHeader from "../components/mobile/MobileHeader"
import BottomNav from "../components/mobile/BottomNav"
import ProfileCompaniesCard from "../components/desktop/ProfileCompaniesCard"
import UserProfileCard from "../components/desktop/UserProfileCard"
import ExperienceCard from "../components/desktop/ExperienceCard"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <>
      <MobileHeader />
      <DesktopLayout>
        <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="px-6 desktop:px-[58px] pt-[34px] pb-[100px] desktop:pb-[34px] bg-tertiary">
          {activeTab === "Overview" && (
            <>
              <h1 className="text-2xl font-extrabold mb-4">Overview</h1>
              <div className="flex flex-col gap-y-6">
                <UserProfileCard />
                <div className="flex flex-col desktop:flex-row gap-6 desktop:items-stretch">
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
                            <div className="text-primary">
                              Founded in 2025. in <span className="text-primary font-bold">Fintech</span>.
                            </div>
                          ),
                        },
                        {
                          name: "Company",
                          logo: "/src/assets/images/company2-logo.png",
                          tag: "PROPRIETOR",
                          description: <div className="text-primary">Details/information like acquired /exit/m&a.</div>,
                        },
                      ]}
                    />
                  </div>
                  <ExperienceCard />
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
