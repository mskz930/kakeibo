import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { Link } from 'react-router-dom';

const VisibilityIconButton = ({ visible, handleClick }) => {
  return (
    <IconButton
      onClick={handleClick}
    >
      {visible
        ? <VisibilityIcon />
        : <VisibilityOffIcon />
      }
    </IconButton>
  )
}

const PasswordField = () => {
  const [visible, setVisible] = React.useState(false);
  const handleClick = () => {
    console.log(visible);
    setVisible(!visible);
  }

  return (
    <TextField required type={visible ? "text" : "password"} label="Password" fullWidth
      InputProps={{
        endAdornment: (
          <VisibilityIconButton visible={visible} handleClick={handleClick} />
        ),
      }}
    />
  )
}


export default function Login() {

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Paper sx={{ width: '480px', margin: '100px auto', borderRadius: '16px' }}>
        <Card sx={{ borderRadius: '16px' }}>
          <Typography
            p={3}
            variant="h4"
            textAlign="center"
            sx={{ backgroundColor: 'primary.main', color: 'white' }}
          >
            Login
          </Typography>
          <Divider />
          <Box sx={{ p: 2 }}>
            <CardContent sx={{ paddingTop: 3 }}>
              <Stack spacing={3}>
                <TextField required label="UserID" fullWidth />
                <PasswordField />
              </Stack>
              <Box paddingTop={2}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                </FormGroup>
              </Box>
            </CardContent>
            <CardActions sx={{ flexDirection: 'column', justifyContent: 'center', paddingTop: 2 }}>
              <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{
                  width: '250px',
                }}
              >
                Sign in
              </Button>

              <Typography p={1}>
                登録が済んでいない方は<Link to="/">こちら</Link>
              </Typography>
            </CardActions>
          </Box>
        </Card>
      </Paper>
    </Box >
  )
}