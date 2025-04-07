import { Card, CardContent } from "../ui/card"
import { ArrowRight } from "lucide-react"
import ChoroplethMap from "../ChoroplethMap"

const DemographicsCard = () => {
  const countries = [
    { country: "India", percent: 40, flag: "🇮🇳", color: "bg-india" },
    { country: "USA", percent: 25, flag: "us", color: "bg-usa" },
    { country: "CANADA", percent: 10, flag: "🇨🇦", color: "bg-canada" },
    { country: "UAE", percent: 7, flag: "🇦🇪", color: "bg-uae" },
  ]

  return (
    <Card className="bg-tertiary col-span-2 mt-6">
      <CardContent className="bg-background border rounded-lg p-6">
        <h2 className="font-bold mb-4 text-white text-lg">Demographics</h2>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3">
            <ChoroplethMap />
          </div>

          <div className="w-full md:w-1/3 flex flex-col justify-between">
            <div className="space-y-4">
              {countries.map(({ country, percent, flag, color }) => (
                <div key={country} className="flex justify-between items-center text-sm">
                  <span className="w-1/4 text-white flex items-center gap-1">
                    <span className="text-lg">{flag}</span> {country}
                  </span>
                  <div className="w-2/3 h-2 bg-[#1c1c1c] rounded-full mx-2">
                    <div className={`h-2 rounded-full ${color}`} style={{ width: `${percent}%` }} />
                  </div>
                  <span className="text-white">{percent}%</span>
                </div>
              ))}
            </div>

            <div className="text-right hover:text-white flex items-center justify-end gap-1 mt-6 cursor-pointer text-sm text-primary">
              View all countries <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default DemographicsCard
