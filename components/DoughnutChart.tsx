"use client"

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Read chartJSData docs to apply the doughnutChart Function to format chart
function DoughnutChart({ accounts }: DoughnutChartProps) {
    const accountNames = accounts.map((a) => a.name); 
    const balances = accounts.map((a) => a.currentBalance)

    const data = {
        datasets: [
            {
              label: "Banks",
              data: balances,
              backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
              }
            ],
            labels: accountNames
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