import React, { useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const mockDataByRange = {
  "Last 7 days": [
    { name: "Mon", value: 25 },
    { name: "Tue", value: 40 },
    { name: "Wed", value: 35 },
    { name: "Thu", value: 50 },
    { name: "Fri", value: 45 },
    { name: "Sat", value: 30 },
    { name: "Sun", value: 20 },
  ],
  "Last 30 days": [
    { name: "1", value: 30 },
    { name: "5", value: 45 },
    { name: "10", value: 60 },
    { name: "15", value: 40 },
    { name: "20", value: 80 },
    { name: "25", value: 70 },
    { name: "30", value: 90 },
  ],
  "Last 90 days": [
    { name: "Jan", value: 60 },
    { name: "Feb", value: 55 },
    { name: "Mar", value: 70 },
  ],
  "This year": [
    { name: "Jan", value: 60 },
    { name: "Feb", value: 55 },
    { name: "Mar", value: 70 },
    { name: "Apr", value: 40 },
    { name: "May", value: 80 },
  ],
}

const ActivityChart = ({ range }) => {
  const data = mockDataByRange[range] || []

  useEffect(() => {
    console.log("Selected range:", range)
    console.log("Loaded data:", data)
  }, [range])

  return (
    <div className="bg-[#040504] rounded-2xl p-6 shadow-lg">
      <p className="text-sm text-gray-400 mb-2">Range: {range}</p>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#6BE2BE" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="text-gray-500 text-center py-10">No data available for "{range}"</div>
      )}
    </div>
  )
}

export default ActivityChart
