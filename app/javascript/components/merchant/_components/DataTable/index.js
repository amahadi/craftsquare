import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';

import DataTableToolbar from './DataTableToolbar';
import DataTableHead from "./DataTableHead";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

export default function DataTable({
  data,
  columns
}) {

  const getTableHeadComponent = () => {
    const tableHeadComponent =
      <TableHead>
        <TableRow>
          {
            /**
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
              */

          }
          {
            columns.map((column, index) => {
              return (
                <TableCell
                  key={`dataTable__tableHead__tableCell__${index}`}
                  align={column.type === 'number' ? 'right' : 'left'}
                >
                  {column.headerName}
                </TableCell>
              )
            })
          }
        </TableRow>
      </TableHead>
    return tableHeadComponent;
  }

  const getTableRowComponent = (row, index) => {
    const tableRow =
      <TableRow
        key={`dataTable__tableBody__tableRow__${index}`}
        value={row.id}
        // onClick={}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        {
          /**
           * <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          */
          columns.map((column) => (
            <TableCell
              key={`dataTable__tableBody__tableRow__${index}__tableCell__${column.field}`}
              align={column.type === "string" ? "left" : "right" }
            >
              { row[column.field] }
            </TableCell>
          ))
        }

      </TableRow>
    return tableRow;
  }

  const getTableDataComponent = () => {
    const tableDataComponent =
      <TableBody>
        {data.map((row, index) => getTableRowComponent(row, index))}
      </TableBody>
    return tableDataComponent;
  }

  console.log(data);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {
          /**
           * <DataTableToolbar numSelected={selected.length} />
           */
        }
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {getTableHeadComponent()}
            {getTableDataComponent()}
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
