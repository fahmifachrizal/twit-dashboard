'use client'
import { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


function LineGraph({}) {
  const [series, setSeries] = useState([
    { "name": "Growth",
        "data": [ 
          { "x": "Week 1", "y": "1.06" }, 
          { "x": "Week 2", "y": "1.26" }, 
          { "x": "Week 3", "y": "1.08" }, 
          { "x": "Week 4", "y": "1.36" }, 
          { "x": "Week 5", "y": "1.19" }, 
          { "x": "Week 6", "y": "1.24" },
          { "x": "Week 7", "y": "1.01" }, 
          { "x": "Week 8", "y": "1.36" }, 
          { "x": "Week 9", "y": "1.10" }, 
          { "x": "Week 10", "y": "1.24" }
        ]
    }
],)
  const [options, setOptions] = useState({
    tooltip: {  x: { show: false } },
    chart: {
      animations: {
          enabled: true,
      },
      id: "2BMZL",
      toolbar: { show: false },
    },
    plotOptions: { bar: { borderRadius: 6} },
    colors: [ "#01579b" ],
    dataLabels: { enabled: false },
    grid: {
      borderColor: "#000000",
      strokeDashArray: 8,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: false } },
      padding: {
        top: -10,
        bottom: -10,
        right: 25,
        left: 25
      }
    },
    legend: { show: false },
    stroke: { curve: "smooth", width: 3 },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: { show: false },
  })

  return (
    <>
      <Chart
        options={options}
        series={series}
        width='100%'
        height="200"
      />
    </>
  )
}

export default LineGraph