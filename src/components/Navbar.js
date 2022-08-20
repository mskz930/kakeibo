import * as React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

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

export default function Navbar() {

  

  return (
      <Box fullWidth>
        <CustomBreadCrumbs />
      </Box>
    )
}