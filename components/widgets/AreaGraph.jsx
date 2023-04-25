'use client'
import { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


function AreaGraph({}) {
  const [series, setSeries] = useState(
    [{
      name: 'Tweets',
      data: [ 16.38, 17.95, 19.41, 21.16, 19.89, 18.88, 19.06, 18.21, 17.42, 16.12, 15.22, 14.5 ] 
    }]
  )
  const [options, setOptions] = useState(
    {
      chart: {
        type: 'area',
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' },
      colors: [ "#0373C9" ],
      xaxis: {
        type: 'datetime',
        categories: [
          "2018-09-19T06:00:00.000Z", 
          "2018-09-19T07:00:00.000Z", 
          "2018-09-19T08:00:00.000Z", 
          "2018-09-19T09:00:00.000Z", 
          "2018-09-19T10:00:00.000Z", 
          "2018-09-19T11:00:00.000Z", 
          "2018-09-19T12:00:00.000Z", 
          "2018-09-19T13:00:00.000Z", 
          "2018-09-19T14:00:00.000Z", 
          "2018-09-19T15:00:00.000Z", 
          "2018-09-19T16:00:00.000Z", 
          "2018-09-19T17:00:00.000Z",
        ]
      },
      tooltip: {
        x: { format: 'HH:mm' },
      },
    }
  )

  return (
    <>
      <Chart
        options={options}
        series={series}
        width='100%'
        height="100%"
        type="area"
      />
    </>
  )
}

export default AreaGraph