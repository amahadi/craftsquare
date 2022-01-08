import * as React from 'react';
import MUIDataTable from "mui-datatables";

export default function DataTable(props) {
  const { data, columns } = props;

  return (
    <MUIDataTable
      data={data}
      columns={columns}
    />
  )
}