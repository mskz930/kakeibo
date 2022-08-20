import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import EditIcon from '@mui/icons-material/Edit';

import ExpensesBarChart from './components/ExpensesBarChart';
import Navbar from './components/Navbar.js';


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

  return (
    <Box>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper width="100%" elevation={0}>
            <Typography variant="h4" width="100%" textAlign="center">2022年8月23日</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="space-evenly">
            <Grid item xs={4}>
              <Paper>
                <Typography>収入</Typography>
                <Typography variant="h5">{status.totalIncome}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper>
                <Typography>支出</Typography>
                <Typography variant="h5">{status.totalOutgo}</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0}>
            <Typography textAlign="left" variant="h6">最近の支出グラフ</Typography>
            <ExpensesBarChart />
          </Paper>
        </Grid>
        <Grid item xs={12} my={5}>
          <CreateButton />
        </Grid>
      </Grid>
    </Box>
  )
}