import * as React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Box, Paper, Typography, Button, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const rows = [
  { date: '2022/4/1', content: '家賃', price: 4000, payment: 'クレジットカード', category: '固定費', memo: '' },
  { date: '2022/4/1', content: 'シャンプー', price: 4000, payment: '現金', category: '生活費', memo: '' },
  { date: '2022/4/2', content: 'Amazon', price: 4000, payment: 'Paypay', category: '食費', memo: '' },
  { date: '2022/4/2', content: 'Amazon', price: 4000, payment: '現金', category: '生活費', memo: '' },
  { date: '2022/4/3', content: 'Amazon', price: 4000, payment: 'クレジットカード', category: '雑費', memo: '' },
]

/*
<Button
  variant="contained" 
  startIcon={<DownloadIcon />}
  color="success"
>
  CSVで出力
</Button>
 */

const EditButton = () => {
  return (
    <IconButton>
      <EditIcon />
    </IconButton>
  );
}

const DeleteButton = () => {
  return (
    <IconButton>
      <DeleteIcon />
    </IconButton>
  )
};

export default function DataTable() {

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="" >
        <TableHead>
          <TableRow>
            <TableCell>日付</TableCell>
            <TableCell>内容</TableCell>
            <TableCell>金額</TableCell>
            <TableCell>支払い方法</TableCell>
            <TableCell>カテゴリ</TableCell>
            <TableCell>メモ</TableCell>
            <TableCell>編集</TableCell>
            <TableCell>削除</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.content}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.payment}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.memo}</TableCell>
              <TableCell><EditButton /></TableCell>
              <TableCell><DeleteButton /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}