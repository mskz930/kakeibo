import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DoughnutChart from '../components/DoughnutChart';


function InputRow(props) {
  const [error, setError] = React.useState(false);
  const {handleDelete, index, ...others} = props

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handleDelete}>
          <RemoveCircleOutlineIcon />
        </IconButton>
        <select name="types" id={`input-type-${index}`} style={{ width: '100px', margin: '0 10px' }}>
          <option value="収入">収入</option>
          <option value="支出">支出</option>
        </select>
        <input id={`input-category-${index}`}  placeholder="カテゴリ" style={{ width: '100px', margin: '0 10px' }} />
        <div style={{ position: 'relative', flexGrow: 1 }}>
          <input 
            id={`input-price-${index}`} 
            placeholder="金額"
            style={{ width: '100%', width: '100%' }} 
          />
          <p style={{ 
            display: error ? 'block' : 'none',
            position: 'absolute', 
            fontSize: '14px', 
            top: '-35px', 
            left: '0px', 
            color: 'red' 
          }}
          >
            半角数字を入力ください
          </p>
        </div>
      </Box>
    </Box>
  );
}


const createData = (inputData) => {

  const incomeList = inputData.filter(item => item.isIncome);
  
  const data = incomeList.map(item => item.price);

  return {
    datasets: [{
      data: data,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
};

function ResultWindow({result}) {
  const [data, setData] = React.useState({});
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (result && Object.keys(result).length > 0) {
      const totalIncome = result.totalIncome;
      const totalExpense = result.totalExpense;
      const values = [...Object.values(result.expenses), totalIncome - totalExpense];
      const labels = [...Object.keys(result.expenses), '残額'];
      console.log("hello")
      const data = {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: [
            'rgb(41, 98, 255)',
            'rgb(0, 200, 83)',
            'rgb(255, 145, 0)',
            'rgb(255, 234, 0)',
            'rgb(255, 23, 68)',
            'gray',
          ],
          hoverOffset: 4
        }],
      }
      setData(data);
      setVisible(true);
    }
  }, [result])
  

  return (
    <div>
      {visible && <DoughnutChart data={data}/>}
    </div>
  )
};



export default function Simulate() {
  const [rows, setRows] = React.useState([0]);
  const [countRows, setCountRows] = React.useState(rows.length);
  const [result, setResult] = React.useState({});

  React.useEffect(() => {
    console.log(rows);
  }, [rows])
  
  const handleAdd = () => {
    setRows([...rows, rows.at(-1) + 1]);
  }

  const handleDelete = (index) => (e) => {
    setRows([...rows.slice(0, index), ...rows.slice(index+1)]);
  }

  const validateForm = () => {
    
  }

  // 計算
  const handleCalc = () => {
    let totalIncome = 0;
    let totalExpense = 0;
    const expenses = {};
    rows.forEach(index => {
      const type = document.getElementById(`input-type-${index}`).value;
      const category = document.getElementById(`input-category-${index}`).value;
      const price = document.getElementById(`input-price-${index}`).value;
      if (type === '収入') {
        totalIncome += Number(price);
        return;
      }
      totalExpense += Number(price);
      if (category in expenses) {
        expenses[category] += Number(price);
      } else {
        expenses[category] = Number(price);
      }
    });
    
    const totalBalance = totalIncome - totalExpense;
    console.log({totalIncome, totalExpense, expenses})
    if (totalBalance > 0) {
      setResult({totalIncome, totalExpense, expenses})
    }
  }
  
  // リセット
  const handleReset = () => {
    setRows([0]);
    setResult({});
  }

  return (
    <Box>
      <Typography>Simulate</Typography>
      {false &&
      <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
        <ul>
          <li>
            金額は数字のみ入力してください
          </li>
        </ul>
      </Alert>
      }
      <Box textAlign="right">
        <Button 
          variant="contained" 
          color="error" 
          sx={{ margin: "5px" }}
          onClick={handleReset}
        >
          リセット
        </Button>
        <Button 
          variant="contained" 
          sx={{ margin: "5px" }}
          onClick={handleCalc}
        >
          計算する
        </Button>
      </Box>
      <div component="form" style={{ width: 600, margin: '0 auto', marginTop: 50 }}>
        <Stack spacing={2}>
          {rows.map((index) => (
            <InputRow 
              key={index}
              index={index}
              handleDelete={handleDelete(index)}
            />
          ))}
          <Box textAlign="center">
            <IconButton onClick={handleAdd}>
              <AddCircleIcon />
            </IconButton>
          </Box>
          
        </Stack>
      </div>
      <ResultWindow result={result} />
    </Box>
  )
}