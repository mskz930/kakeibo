import * as React from 'react';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const expensePaymentList = [
  { label: '現金', value: 1 },
  { label: 'クレジットカード', value: 2 },
  { label: '電子マネー', value: 3 }
];

const incomePaymentList = [
  { label: '銀行振込み', value: 1 },
  { label: '現金', value: 2 },
  { label: 'Paypay', value: 3 },
]

const DatePicker = () => {
  const [value, setValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Date desktop"
        inputFormat="YYYY-MM-DD"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </LocalizationProvider>
  );
}

// セレクトボックス(支払い方法)
const SelectMethod = ({label, list}) => {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {list.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

const expenseCategoryList = [
  { label: '固定費', value: 1 },
  { label: '生活費', value: 2 },
  { label: '貯金', value: 3 },
];

const incomeCategoryList = [
  { label: '給与', value: 1 },
  { label: 'お小遣い', value: 2 },
  { label: '副収入', value: 3 }
];

// セレクトボックス(カテゴリ)
const SelectCategory = ({list}) => {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="select-category-label">カテゴリ</InputLabel>
      <Select
        labelId="select-category-label"
        id="select-category"
        value={value}
        label="カテゴリ"
        onChange={handleChange}
      >
        {list.map((item) => (
          <MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

// 収入用入力フォーム
function InputIncome() {
  return (
    <Stack spacing={3}>
      <DatePicker />
      <TextField
        id="form-price"
        label="金額"
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">円</InputAdornment>
        }}
        fullWidth
      />
      <TextField
        fullWidth
        id="form-title"
        label="メモ"
        variant="outlined"
      />
      <SelectCategory list={incomeCategoryList} />
      <SelectMethod label="受け取り" list={incomePaymentList} />
    </Stack>
  );
}

// 支出用入力フォーム
function InputExpense() {
  return (
    <Stack spacing={3}>
      <DatePicker />
      <TextField
        id="form-price"
        label="金額"
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">円</InputAdornment>
        }}
        fullWidth
      />
      <TextField
        fullWidth
        id="form-title"
        label="メモ"
        variant="outlined"
      />
      <SelectCategory list={expenseCategoryList} />
      <SelectMethod label="支払い" list={expensePaymentList} />
    </Stack>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


export default function InputForm({ handleClose }) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    console.log(value);
  }, [value])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: 500,
        mx: 'auto'
      }}
    >
      <Typography
        variant="h5"
        align="center"
        paddingBottom={3}
      >
        入力フォーム
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} fullWidth>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="支出" />
          <Tab label="収入" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <InputExpense />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InputIncome />
      </TabPanel>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="error"
          onClick={handleClose}
          sx={{ m: 1, p: 1 }}
        >
          キャンセル
        </Button>
        <Button variant="contained" sx={{ m: 1, p: 1 }}>確定</Button>
      </Box>
    </Box>
  )
}