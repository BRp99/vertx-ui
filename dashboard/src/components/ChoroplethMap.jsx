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
              value: Math.random(),
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
            quantize: 5,
            interpolate: (t) => `rgba(${t * 255}, ${t * 255}, ${t * 255}, 1)`,
            axis: false,
          },
        },
        plugins: {
          legend: { display: false },
        },
      },
    })

    chartInstanceRef.current = chart

    return () => chart.destroy()
  }, [])

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="h-72">
        <canvas ref={chartRef} className="w-full h-full" />
      </div>

      <div className="mt-4 flex items-center justify-center gap-6 px-4 py-2 border border-[#222] rounded-full w-fit mx-auto bg-black text-white text-sm">
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
