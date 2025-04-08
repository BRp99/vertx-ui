import React, { useState } from "react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChevronDown } from "lucide-react"

const mockMetrics = {
  Visitors: [
    { name: "Mar 1", value: 400 },
    { name: "Mar 3", value: 700 },
    { name: "Mar 5", value: 1200 },
    { name: "Mar 7", value: 1100 },
    { name: "Mar 9", value: 900 },
    { name: "Mar 11", value: 950 },
    { name: "Mar 13", value: 850 },
    { name: "Mar 15", value: 800 },
    { name: "Mar 17", value: 1300 },
    { name: "Mar 20", value: 1700 },
    { name: "Mar 22", value: 900 },
    { name: "Mar 25", value: 1500 },
    { name: "Mar 27", value: 1300 },
    { name: "Mar 30", value: 1800 },
  ],
  Connections: [
    { name: "Mar 1", value: 300 },
    { name: "Mar 3", value: 600 },
    { name: "Mar 5", value: 1000 },
    { name: "Mar 7", value: 950 },
    { name: "Mar 9", value: 1200 },
    { name: "Mar 11", value: 1300 },
    { name: "Mar 13", value: 600 },
    { name: "Mar 15", value: 1000 },
    { name: "Mar 17", value: 900 },
    { name: "Mar 20", value: 1800 },
    { name: "Mar 22", value: 700 },
    { name: "Mar 25", value: 1200 },
    { name: "Mar 27", value: 1000 },
    { name: "Mar 30", value: 1900 },
  ],
}

const colors = {
  Visitors: "#FFFFFF",
  Connections: "#C36DEE",
}

const Dropdown = ({ options, selected, onSelect }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-fit">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-2 text-sm font-medium px-4 py-[6px] border rounded-full text-white bg-[#000101] hover:bg-[#040504] transition min-w-[110px] max-w-[160px]"
      >
        {selected}
        <ChevronDown size={14} className="text-white" />
      </button>

      {open && (
        <div className="absolute top-10 left-0 w-full bg-[#000101] border border-[#222] rounded-md z-10 shadow-xl overflow-hidden">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onSelect(option)
                setOpen(false)
              }}
              className={`px-3 py-2 cursor-pointer text-sm text-ellipsis whitespace-nowrap overflow-hidden ${
                selected === option ? "bg-[#1a1a1a] text-white" : "text-[#aaa] hover:bg-[#222]"
              }`}
              title={option}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const MetricChart = () => {
  const [primaryMetric, setPrimaryMetric] = useState("Visitors")
  const [compareMetric, setCompareMetric] = useState(null)
  const [dateRange, setDateRange] = useState("Last 30 days")

  return (
    <div className="flex-1 bg-[#000101] border rounded-lg p-6 text-white">
      <div className="flex gap-3 mb-4">
        <Dropdown options={["Visitors", "Connections"]} selected={primaryMetric} onSelect={setPrimaryMetric} />

        <Dropdown
          options={["Today", "Yesterday", "This week", "Last week", "Last 7 days", "Last 30 days"]}
          selected={dateRange}
          onSelect={setDateRange}
        />

        <Dropdown
          options={["Connections", "Interactions", "Impressions"]}
          selected={compareMetric ? compareMetric : "+ Add"}
          onSelect={(value) => setCompareMetric(compareMetric === value ? null : value)}
        />
      </div>

      <div className="flex items-center gap-6 mb-4 mt-1">
        <div className="flex items-center gap-3">
          <p className="text-3xl font-extrabold text-white">13.49K</p>
          <div className="flex flex-col text-xs leading-tight">
            <span className="text-[#01754F] font-semibold">+469%</span>
            <span className="text-[#999]">(897)</span>
          </div>
        </div>

        {compareMetric && <div className="h-8 w-px border-r " />}

        {compareMetric && (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors[compareMetric] }} />
              <p className="text-3xl font-extrabold text-white">3.49K</p>
            </div>
            <div className="flex flex-col text-xs leading-tight">
              <span className="text-[#01754F] font-semibold">+180%</span>
              <span className="text-[#999]">(497)</span>
            </div>
          </div>
        )}
      </div>
      <div className="h-[170px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockMetrics[primaryMetric]} margin={{}}>
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fontWeight: 600, fill: "#555555" }}
              tickLine={false}
              axisLine={{ stroke: "#1D1D1D" }}
              interval={1}
              padding={{ left: 20 }}
            />
            <YAxis
              tick={{ fontSize: 10, fontWeight: 600, fill: "#555555" }}
              tickLine={false}
              axisLine={false}
              ticks={[200, 400, 800, 1200, 1600, 2000]}
              domain={[200, 2000]}
              width={35}
              tickFormatter={(value) => (value >= 1000 ? `${value / 1000}K` : value)}
            />

            <Line type="linear" dataKey="value" stroke={colors[primaryMetric]} strokeWidth={1.5} dot={false} />
            {compareMetric && (
              <Line
                type="linear"
                dataKey="value"
                data={mockMetrics[compareMetric]}
                stroke={colors[compareMetric] || "#8884d8"}
                strokeWidth={1.5}
                dot={false}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default MetricChart
