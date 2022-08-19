import * as React from 'react';
import { Box, Button, Stack } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DatePicker from './DatePicker';

export default function InputFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleOk = () => {
    setOpen(false);
  }

  const handleCancel = () => {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="contained" startIcon={<AddCircleOutlineIcon />} onClick={handleClickOpen}>
        データを入力
      </Button>
      <Dialog open={open}>
        <DialogTitle>
          入力フォーム
        </DialogTitle>
        <DialogContent dividers>
          <Box component="form">
            <Stack spacing={2}>
              <DatePicker />
              <TextField label="Subject" variant="outlined" fullWidth/>
              <TextField label="Price" variant="outlined" fullWidth/>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleOk}>
            OK
          </Button>
          <Button autoFocus onClick={handleCancel}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}