import { ChartData } from "chart.js";
import React from 'react'
import { Pie } from 'react-chartjs-2';
import { MacroData } from '../types/types'

export default function PieChart(chartData: MacroData) {
    //when the data gets here it is already going to split into the object

    const data: ChartData = {
        labels: ['Protein', 'Fats', 'Carbs'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                hoverOffSet: 4
            },
        ],
    };

    return (
        <div>
            <Pie data={{ data }} />
        </div>
    )
}
