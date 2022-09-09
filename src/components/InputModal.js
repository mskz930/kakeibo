import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import InputForm from './InputForm.js';


const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -20%)',
  bgcolor: 'background.paper',
  borderColor: 'black',
  borderRadius: 5,
  outline: 0,
  p: 4,
};

const ModalContent = () => {
  return (
    <InputForm />
  )
}

export default function InputModal({ text }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        startIcon={<EditIcon />}
      >
        {!text ? '' : text}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <InputForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
