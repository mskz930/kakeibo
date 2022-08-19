import * as React from 'react';
import { List, ListItem, Divider } from '@mui/material';


export default function BreakdownList() {
  return (
    <List>
      <ListItem>固定費 2000円</ListItem>
      <ListItem>固定費 2000円</ListItem>
      <ListItem>固定費 2000円</ListItem>
      <ListItem>固定費 2000円</ListItem>
      <Divider />
      <ListItem>総計 10000円</ListItem>
    </List>
  );
}