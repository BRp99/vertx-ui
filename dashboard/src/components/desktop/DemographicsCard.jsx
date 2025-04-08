import { Card, CardContent } from "../ui/card"
import { ArrowRight, ChevronDown } from "lucide-react"
import ChoroplethMap from "../ChoroplethMap"
import india from "../../assets/flags/india.png"
import canada from "../../assets/flags/canada.png"
import usa from "../../assets/flags/usa.png"
import uae from "../../assets/flags/uae.png"

const DemographicsCard = () => {
  const countries = [
    { country: "India", percent: 40, flag: india, color: "bg-india" },
    { country: "USA", percent: 25, flag: usa, color: "bg-usa" },
    { country: "CANADA", percent: 10, flag: canada, color: "bg-canada" },
    { country: "UAE", percent: 7, flag: uae, color: "bg-uae" },
  ]

  return (
    <Card className="w-full h-[296px] bg-tertiary pt-5">
      <CardContent className="bg-background border rounded-lg p-4 flex flex-col h-full">
        <h2 className="font-bold text-white text-lg mb-2">Demographics</h2>
        <button className="flex items-center justify-between gap-2 text-sm font-medium px-4 py-[6px] border rounded-full text-white bg-[#000101] hover:bg-[#040504] transition w-[130px]">
          Visitors
          <ChevronDown size={14} className="text-white" />
        </button>

        <div className="flex flex-1 gap-6 overflow-hidden">
          <div className="w-2/3 flex flex-col justify-between">
            <ChoroplethMap />
            <div className="mt-3 px-2"> 
              <div className="flex items-center gap-4 bg-[#0b0b0b] border rounded-full px-4 py-1 w-fit text-xs">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-india" />
                  <span className="text-white">India</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-usa" />
                  <span className="text-white">USA</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-canada" />
                  <span className="text-white">CANADA</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-uae" />
                  <span className="text-white">UAE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/3 flex flex-col h-full justify-between overflow-hidden">
            <div className="space-y-4 overflow-auto">
              {countries.map(({ country, percent, flag, color }) => (
                <div key={country} className="flex justify-between items-center text-sm">
                  <span className="w-1/4 text-white flex items-center gap-1">
                    <img className="h-4" src={flag} /> {country}
                  </span>
                  <div className="w-2/3 h-2 bg-[#1c1c1c] rounded-full mx-2">
                    <div className={`h-2 rounded-full ${color}`} style={{ width: `${percent}%` }} />
                  </div>
                  <span className="text-white">{percent}%</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-3 border-t border-[#2e2e2e] text-primary text-sm text-right flex items-center justify-end gap-1 cursor-pointer">
              View all countries <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default DemographicsCard
