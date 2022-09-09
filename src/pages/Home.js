import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import EditIcon from '@mui/icons-material/Edit';

import DataTable from '../components/DataTable.js';
import ExpensesBarChart from '../components/ExpensesBarChart';
import Navbar from '../components/Navbar.js';


const CreateButton = () => {

  return (
    <Button
      variant="contained"
      sx={{ width: 200, height: 100 }}
    >
      <EditIcon sx={{ fontSize: 24, marginRight: 1 }} />
      <Typography sx={{ fontSize: 24 }}>
        作成する
      </Typography>
    </Button>
  );
}

const status = {
  totalIncome: 200000,
  totalOutgo: 180000,
};


export default function Home() {
  const month = new Date().getMonth() + 1;


  return (
    <Box>
      <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ padding: 1 }}>
            <Typography>今月の使用状況</Typography>
            <Box>

            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ padding: 1 }}>
            <Typography>履歴</Typography>
          </Paper>
        </Grid>
      </Grid>

    </Box >
  )
}