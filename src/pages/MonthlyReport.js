import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Navbar from '../components/Navbar.js';
import DataTable from '../components/DataTable.js';

const cardList = [
  { label: '収入', price: 10000 },
  { label: '残高', price: 10000 },
  { label: '支出', price: 10000 }
]

export default function MonthlyReport() {
  const date = new Date();

  const [year, setYear] = React.useState(date.getFullYear());
  const [month, setMonth] = React.useState(date.getMonth() + 1);

  const handleClickPrev = (e) => {
    if (month === 1) {
      setYear(year-1);
      setMonth(12);
    } else {
      setMonth(month-1);
    }
  };

  const handleClickNext = (e) => {
    if (month === 12) {
      setYear(year+1);
      setMonth(1);
    } else {
      setMonth(month+1);
    }
  }

  React.useEffect(() => {
    console.log(year);
    console.log(month);
  })

  return (
    <Box>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton onClick={handleClickPrev}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography fontSize="1.5rem">
          {year}年{month}月
        </Typography>
        <IconButton onClick={handleClickNext}>
          <ChevronRightIcon />
        </IconButton>
      </Box>
      <Box paddingTop="50px">
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Paper>
              graph
            </Paper>
          </Grid>    
          <Grid item xs={6}>
            <Grid container spacing={3}>
              {cardList.map((item, index) => (
                <Grid item xs={12}>
                  <Paper>
                    <Box p={2}>
                      <Typography>
                        {item.label}
                      </Typography>
                      <Typography align="center" variant="h4">
                        {item.price}円
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box 
        paddingTop="50px" 
      >
        <Paper>
          <Box sx={{ p: 2 }}>
            <Typography>履歴</Typography>
            <DataTable />
          </Box>
        </Paper>
      </Box>
    </Box>
  )


}