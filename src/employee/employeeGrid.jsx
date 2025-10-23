
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const columns = [
  { field: "id", headerName: "직원번호", width: 100 },
  { field: "position", headerName: "직책", width: 120 },
  { field: "name", headerName: "이름", width: 120 },
  { field: "phone", headerName: "전화번호", width: 150 },
  { field: "email", headerName: "이메일", width: 200 },
  { field: "incentive", headerName: "인센티브", width: 120, type: "number" },
  { field: "note", headerName: "비고", width: 200 },
];

const rows = [
  {
    id: 1,
    position: "과장",
    name: "김민수",
    phone: "010-1234-5678",
    email: "minsu.kim@example.com",
    incentive: 500000,
    note: "우수 직원",
  },
  {
    id: 2,
    position: "대리",
    name: "이영희",
    phone: "010-9876-5432",
    email: "younghee.lee@example.com",
    incentive: 300000,
    note: "신입 교육 담당",
  },
];

export default function EmployeeGrid() {
  return (
    <>
      <div className='title-area'>
          <h2>직원관리</h2>
      </div>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
    </>
    
  );
}
