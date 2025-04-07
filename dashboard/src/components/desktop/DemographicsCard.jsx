import { Card, CardContent } from "../ui/card"
import { ArrowRight } from "lucide-react"

const DemographicsCard = () => {
  return (
    <Card className="bg-[#111111] text-white col-span-2">
      <CardContent className="p-6">
        <h2 className="text-base font-bold text-white mb-4">Demographics</h2>

        <div className="mb-6 h-52 bg-[#0b0b0b] rounded-lg flex items-center justify-center text-gray-500">Mapinha aqui</div>

        <div className="space-y-4">
          {[
            { country: "India", percent: 44, color: "bg-purple-600" },
            { country: "USA", percent: 26, color: "bg-orange-500" },
            { country: "CANADA", percent: 12, color: "bg-red-500" },
            { country: "UAE", percent: 7, color: "bg-green-500" },
          ].map(({ country, percent, color }) => (
            <div key={country} className="flex justify-between items-center text-sm">
              <span className="w-1/4 text-white">{country}</span>
              <div className="w-2/3 h-2 bg-[#1c1c1c] rounded-full mx-2">
                <div className={`h-2 rounded-full ${color}`} style={{ width: `${percent}%` }} />
              </div>
              <span className="text-gray-400">{percent}%</span>
            </div>
          ))}
        </div>

        <div className="text-sm text-right text-gray-400 hover:text-white flex items-center justify-end gap-1 mt-6 cursor-pointer">
          View all countries <ArrowRight size={16} />
        </div>
      </CardContent>
    </Card>
  )
}

export default DemographicsCard
