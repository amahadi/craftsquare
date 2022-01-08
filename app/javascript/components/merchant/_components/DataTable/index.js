import * as React from 'react';
import MUIDataTable from "mui-datatables";

export default function DataTable({
  loading,
  data,
  columns,
  onRowClick=null
}) {

  const options = {
    onRowClick: onRowClick
  }

  return (
    <MUIDataTable
      data={data}
      columns={columns}
      options={options}
    />
  )
}