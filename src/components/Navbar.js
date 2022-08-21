import * as React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CustomBreadCrumbs = () => {

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary">
          Home
        </Typography>
      </Breadcrumbs>
    </div>
  )
}

const MenuList = () => {

  return (
    <Box sx={{ display: 'block' }}>
      <Button startIcon={<AddIcon />}>新規作成</Button>
    </Box>
  )

}

export default function Navbar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 3,
        width: '100%',
        justifyContent: 'space-between'
      }}
    >
      <CustomBreadCrumbs />
      <MenuList />
    </Box>
  )
}