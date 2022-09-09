import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Navbar from '../components/Navbar.js';

const cardList = [
  { label: '収入', price: 10000 },
  { label: '残高', price: 10000 },
  { label: '支出', price: 10000 }
]

export default function MonthlyReport() {
  const date = new Date();

  const [year, setYear] = React.useState(date.getFullYear() + 1);
  const [month, setMonth] = React.useState(date.getMonth() + 1);

  const handleClick = (which) => (e) => {
    if (which === 'prev') {
    } else {

    }
  }

  return (
    <Box>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <Typography fontSize="1.5rem">
          {year}年{month}月
        </Typography>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </Box>
      <Box paddingTop="50px">
        <Grid container spacing={5}>
          {cardList.map((item, index) => (
            <Grid item xs={4}>
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
      </Box>
      <Box paddingTop="50px">
        <Paper>
          <Box p={2}>
            <Typography>
              支出履歴
            </Typography>
            <Grid container>
              <Grid item xs={3}>
                a
              </Grid>
              <Grid item xs={9}>
                a
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Box>
  )


}