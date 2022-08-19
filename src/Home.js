import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import EditIcon from '@mui/icons-material/Edit';


const CreateButton = () => {
  
  return (
    <Card component={Button} sx={{ backgroundColor: 'primary.main', color: 'white' }}>
        <CardContent>
          <Box sx={{ 
              display: 'flex', 
              flexDirection: 'row',
              
          }}>
            <EditIcon />
            <Typography>入力する</Typography>
          </Box>
        </CardContent>
      </Card>
  );
}


export default function Home() {


  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" >2022年8月</Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <Typography>直近の支出グラフ</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <CreateButton />
      </Grid>
    </Grid>
  )
}