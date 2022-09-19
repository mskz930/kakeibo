import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables);

/*
const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

*/

export default function DoughnutChart({data}) {

  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: 10
    },
  };

  return (
    <Box>
      <Doughnut 
        width={300}
        height={300}
        data={data} 
        options={options}
        id="expensesGraph"
      />
    </Box>
   
  );
}