import React, { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChevronDown } from "lucide-react"

const mockMetrics = {
  Visitors: [
    { name: "Mar 1", value: 200 },
    { name: "Mar 5", value: 900 },
    { name: "Mar 10", value: 800 },
    { name: "Mar 15", value: 650 },
    { name: "Mar 20", value: 1300 },
    { name: "Mar 25", value: 900 },
    { name: "Mar 30", value: 1400 },
  ],
  Connections: [
    { name: "Mar 1", value: 200 },
    { name: "Mar 5", value: 400 },
    { name: "Mar 10", value: 800 },
    { name: "Mar 15", value: 1.2 },
    { name: "Mar 20", value: 700 },
    { name: "Mar 25", value: 600 },
    { name: "Mar 30", value: 900 },
  ],
}

const colors = {
  Visitors: "#FFFFFF",
  Connections: "#C36DEE",
}

const MetricChart = () => {
  const [primaryMetric, setPrimaryMetric] = useState("Visitors")
  const [compareMetric, setCompareMetric] = useState(null)

  const handleCompare = () => {
    setCompareMetric(compareMetric ? null : "Connections")
  }

  return (
    <div className="bg-background border rounded-lg p-6">
      <div className="flex gap-3 mb-4">
        <button className="flex items-center gap-2 text-sm font-medium px-4 py-[6px] border rounded-full">
          {primaryMetric}
          <ChevronDown size={14} className="text-muted-foreground" />
        </button>

        <button className="flex items-center gap-2 text-sm font-medium px-4 py-[6px] border rounded-full">
          Last 30 days
          <ChevronDown size={14} className="text-muted-foreground" />
        </button>

        <button onClick={handleCompare} className="flex items-center gap-2 text-sm font-medium px-4 py-[6px] border border-dashed rounded-full">
          {compareMetric ? "Remove" : "+ Add"}
        </button>
      </div>

      <div className="flex items-start gap-4 mb-4 mt-1">
        <p className="text-3xl font-extrabold leading-none">13.49K</p>
        <div className="flex flex-col text-xs leading-tight mt-1">
          <span className="text-[#01754F] text-xs font-semibold">+469%</span>
          <span className="text-secondary text-xs">(897)</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#999" />
          <YAxis stroke="#999" />
          {/* <Tooltip /> */}
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
