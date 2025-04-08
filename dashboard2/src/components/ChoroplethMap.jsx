import React, { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"
import * as ChartGeo from "chartjs-chart-geo"
import { feature } from "topojson-client"
import countries from "world-atlas/countries-110m.json"

const { ChoroplethController, GeoFeature, ColorScale, ProjectionScale } = ChartGeo

Chart.register(...registerables, ChoroplethController, GeoFeature, ColorScale, ProjectionScale)

const ChoroplethMap = () => {
  const chartRef = useRef(null)
  const chartInstanceRef = useRef(null)

  useEffect(() => {
    const canvas = chartRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const worldFeatures = feature(countries, countries.objects.countries).features

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy()
    }

    const chart = new Chart(ctx, {
      type: "choropleth",
      data: {
        labels: worldFeatures.map((d) => d.properties.name),
        datasets: [
          {
            label: "Users by country",
            data: worldFeatures.map((feature) => ({
              feature,
              value: 0,
            })),
            outline: {
              type: "FeatureCollection",
              features: worldFeatures,
            },
            borderWidth: 0.5,
            borderColor: "#333",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          xy: {
            projection: "equalEarth",
          },
          color: {
            interpolate: (t) => `rgba(20,20,20, 1)`,
            axis: false,
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
    })

    chartInstanceRef.current = chart

    return () => chart.destroy()
  }, [])

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="h-72 relative w-fit">
        <canvas ref={chartRef} className="w-full h-full" />
        {/* India */}
        <div className="absolute top-[33%] left-[70%] rounded-full size-[12px] border border-india bg-india/10 flex justify-center items-center">
          <div className="rounded-full size-[4px] bg-india"></div>
        </div>
        {/* UAE */}
        <div className="absolute top-[30%] left-[63.5%] rounded-full size-[12px] border border-uae bg-uae/10 flex justify-center items-center">
          <div className="rounded-full size-[4px] bg-uae"></div>
        </div>
        {/* Canada */}
        <div className="absolute top-[8%] left-[25%] rounded-full size-[12px] border border-canada bg-canada/10 flex justify-center items-center">
          <div className="rounded-full size-[4px] bg-canada"></div>
        </div>
        {/* USA */}
        <div className="absolute top-[18%] left-[23%] rounded-full size-[12px] border border-usa bg-usa/10 flex justify-center items-center">
          <div className="rounded-full size-[4px] bg-usa"></div>
        </div>
        {/* USA - Alaska*/}
        <div className="absolute top-[5%] left-[18%] rounded-full size-[12px] border border-usa bg-usa/10 flex justify-center items-center">
          <div className="rounded-full size-[4px] bg-usa"></div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-6 px-4 py-2 border border-[#222] rounded-full w-fit mx-auto bg-black text-primary text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-india rounded-full" />
          <span>India</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-usa rounded-full" />
          <span>USA</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-canada rounded-full" />
          <span>CANADA</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-uae rounded-full" />
          <span>UAE</span>
        </div>
      </div>
    </div>
  )
}

export default ChoroplethMap
