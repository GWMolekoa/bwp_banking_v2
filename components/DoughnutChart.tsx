"use client"

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Read chartJSData docs to apply the doughnutChart Function to format chart
function DoughnutChart({ accounts }: DoughnutChartProps) {
    const data = {
        datasets: [
            {
              label: "Banks",
              data: [1700, 2500, 3500],
              backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
              }
            ],
            labels: ['Bank 1', 'Bank 2', 'Bank 3']
        }

        // Edit the DoughnutChart Properties Here
        return <Doughnut 
                    data={data} 
                    options={{
                        cutout: '60%',
                        plugins:  {
                            legend: {
                                display: false
                            }
                        }
                    }}
                />
}

export default DoughnutChart