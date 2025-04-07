import React, { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const mockMetrics = {
  Visitors: [
    { name: "Mar 1", value: 400 },
    { name: "Mar 5", value: 900 },
    { name: "Mar 10", value: 800 },
    { name: "Mar 15", value: 650 },
    { name: "Mar 20", value: 1300 },
    { name: "Mar 25", value: 900 },
    { name: "Mar 30", value: 1400 },
  ],
  Connections: [
    { name: "Mar 1", value: 200 },
    { name: "Mar 5", value: 500 },
    { name: "Mar 10", value: 300 },
    { name: "Mar 15", value: 400 },
    { name: "Mar 20", value: 700 },
    { name: "Mar 25", value: 600 },
    { name: "Mar 30", value: 900 },
  ],
}

const colors = {
  Visitors: "#FFFFFF",
  Connections: "#A855F7",
}

const MetricChart = () => {
  const [primaryMetric, setPrimaryMetric] = useState("Visitors")
  const [compareMetric, setCompareMetric] = useState(null)

  const handleCompare = () => {
    setCompareMetric(compareMetric ? null : "Connections")
  }

  return (
    <div className="bg-[#0b0b0b] rounded-2xl p-6 shadow-lg">
      <div className="flex gap-2 mb-4">
        <button className="bg-[#141414] text-white text-sm px-3 py-1.5 rounded-md border border-[#333]">{primaryMetric}</button>
        <button className="bg-[#141414] text-white text-sm px-3 py-1.5 rounded-md border border-[#333]">Last 30 days</button>
        <button className="bg-[#141414] text-white text-sm px-3 py-1.5 rounded-md border border-[#333]" onClick={handleCompare}>
          {compareMetric ? "- Remove" : "+ Compare"}
        </button>
      </div>

      <div className="flex gap-6 text-white text-3xl font-semibold mb-4 mt-1">
        <div>{primaryMetric === "Visitors" && "13.49K"}</div>
        {compareMetric && <div className="text-[#A855F7]">3.49K</div>}
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#999" />
          <YAxis stroke="#999" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            data={mockMetrics[primaryMetric]}
            stroke={colors[primaryMetric]}
            strokeWidth={2}
            dot={{ r: 4 }}
            name={primaryMetric}
          />
          {compareMetric && (
            <Line
              type="monotone"
              dataKey="value"
              data={mockMetrics[compareMetric]}
              stroke={colors[compareMetric]}
              strokeWidth={2}
              dot={{ r: 4 }}
              name={compareMetric}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MetricChart
