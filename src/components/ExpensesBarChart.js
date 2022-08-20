import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import { Chart,registerables  } from 'chart.js'
Chart.register(...registerables);


const options = {
  responsive: true,
  maintainAspectRatio: false,
  datasets: {
    bar: {
      //barThickness: 30,
      barPercentage: 0.8,
      categoryPercentage: 0.5
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 1.0)'
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 1.0)'
    }
  ]
}

export default function ExpensesBarChart() {

  return (
    <Box>
      <Bar
        height={300}
        data={data} 
        options={options}
      />
    </Box>
   
  );
}