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
          color: false,
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
    <div className="w-full h-72 rounded-md overflow-hidden">
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  )
}

export default ChoroplethMap
