"use client"
import React, { useState } from 'react';

interface DataRow {
  id: number;
  name: string;
  age: number;
}

interface DataTableProps {
  data: DataRow[]; // Specify the expected data type
}

function DataTable({ data }: DataTableProps) {
  const [tableData, setTableData] = useState(data); // Initialize with typed data

  const handleInputChange = (rowIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = [...tableData];
    newData[rowIndex][event.target.name as keyof DataRow] = event.target.value; // Type-safe access
    setTableData(newData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>
              <input
                type="text"
                name="name"
                value={row.name}
                onChange={(event) => handleInputChange(rowIndex, event)}
              />
            </td>
            <td>
              <input
                type="number" // Adjust input type based on data
                name="age"
                value={row.age}
                onChange={(event) => handleInputChange(rowIndex, event)}
              />
            </td>
            {/* Add more input fields as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
