import * as React from 'react';
import { Box } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function SelectBox({list}) {
  return (
    <Box sx={{ p: 1 }}>
      <FormControl variant="standard" sx={{ minWidth: 120 }} >
        <InputLabel>{list.label}</InputLabel>
        <Select
          label={list.label}
        >
          {list.data.map(item => (
            <>
              <MenuItem>{item}</MenuItem>
            </>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}