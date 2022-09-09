import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import Navbar from '../components/Navbar.js';



const SelectPayment = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">支払い方法</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="支払い方法"
        onChange={handleChange}
      >
        <MenuItem value={1}>現金</MenuItem>
        <MenuItem value={2}>クレジット</MenuItem>
      </Select>
    </FormControl>
  );
}


export default function New() {

  return (
    <Box
      sx={{
        width: 700,
        mx: 'auto'
      }}
    >
      <Typography
        variant="h5"
        py={5}
        align="center"
      >
        入力フォーム
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField id="form-date" label="日付" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="form-title" label="タイトル" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="form-price" label="金額" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="form-category" label="カテゴリ" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <SelectPayment />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" sx={{ m: 1, p: 1 }}>確定</Button>
            <Button variant="contained" color="error" sx={{ m: 1, p: 1 }}>キャンセル</Button>
          </Box>

        </Grid>
      </Grid>
    </Box>
  )
}