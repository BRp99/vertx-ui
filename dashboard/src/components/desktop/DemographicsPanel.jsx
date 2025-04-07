import worldMap from "src/assets/map.png"
import React from "react"

const demographicsData = [
  { country: "India", percent: 44, flag: "🇮🇳", color: "#6BE2BE" },
  { country: "USA", percent: 25, flag: "🇺🇸", color: "#A855F7" },
  { country: "Canada", percent: 10, flag: "🇨🇦", color: "#FACC15" },
  { country: "UAE", percent: 7, flag: "🇦🇪", color: "#F97316" },
]

const DemographicsPanel = () => {
  return (
    <div className="bg-[#0b0b0b] rounded-2xl p-6 shadow-lg text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Demographics</h2>
        <button className="text-sm text-white bg-[#141414] border border-[#333] rounded-md px-3 py-1">Visitors</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <img src={worldMap} alt="World Map" className="w-full h-auto rounded-md object-cover" />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          {demographicsData.map(({ country, percent, flag, color }) => (
            <div key={country}>
              <div className="flex justify-between text-sm mb-1">
                <span>
                  <span className="mr-1">{flag}</span>
                  {country}
                </span>
                <span className="text-gray-400">{percent}%</span>
              </div>
              <div className="w-full h-2 bg-[#1a1a1a] rounded-full">
                <div className="h-2 rounded-full" style={{ width: `${percent}%`, backgroundColor: color }}></div>
              </div>
            </div>
          ))}

          <button className="text-xs text-gray-400 hover:text-white text-left mt-2">View all countries →</button>
        </div>
      </div>
    </div>
  )
}

export default DemographicsPanel
