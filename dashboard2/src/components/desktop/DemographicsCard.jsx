import { Card, CardContent } from "../ui/card"
import { CheckCircle } from "lucide-react"

const DemographicsCard = () => {
  return (
    <Card className="w-full bg-tertiary pt-5">
      <CardContent className="bg-background border rounded-lg p-4 flex flex-col h-full">
        <div className="flex flex-col desktop:flex-row items-center desktop:items-start gap-6 desktop:gap-8">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden bg-white">
            <img src="/src/assets/images/avatar.png" alt="Avatar Profile" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col gap-2 items-center desktop:items-start text-center desktop:text-left">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-[24px]">Mr A</span>
              <CheckCircle className="text-[#1DA1F2]" size={18} />
            </div>

            <div className="flex items-center gap-2 text-sm text-white">
              <span className="text-sx font-medium">Co-Founder & CEO @Vertx</span>
              <img src="/vertxWhite.png" alt="Vertx Logo" className="w-2 h-2" />
            </div>

            <span className="text-xs bg-white text-black px-2 py-0.5 rounded font-medium">Entrepreneur</span>

            <div className="mt-2">
              <img src="/src/assets/images/socials.png" alt="Social Media" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default DemographicsCard
