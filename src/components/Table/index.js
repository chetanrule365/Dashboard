import React from "react";
import Checkbox from "@mui/material/Checkbox";
import ControlledCheckbox from "../ControlledCheckbox";
import "./styles.scss";
import EditRounded from "@mui/icons-material/EditRounded";
import IconButton from "@mui/material/IconButton";
import DeleteRounded from "@mui/icons-material/DeleteRounded";

function CustomTable({
  page,
  tableHeaders,
  rowsData,
  selectAll,
  selectOrDeselectRow,
  selectedRowsLength,
  deleteRow = () => {},
}) {
  return (
    <table className="custom-table">
      <thead>
        <tr className="table-header">
          <th>
            <Checkbox
              size="small"
              checked={rowsData.length === selectedRowsLength}
              onChange={selectAll}
            />
          </th>
          {tableHeaders.map((columnName) => {
            return (
              <th key={columnName} className={columnName}>
                {columnName}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rowsData.map((row, index) => (
          <tr key={`${row.name}${row.email}`}>
            <td>
              <ControlledCheckbox
                size="small"
                isSelected={row.isSelected}
                rowIndex={index}
                selectOrDeselectRow={selectOrDeselectRow}
              />
            </td>
            {Object.keys(row).map((key) => {
              const rowObj = { ...row };
              return (
                key !== "uuid" && (
                  <td key={key} className={key}>
                    {rowObj[key]}
                  </td>
                )
              );
            })}
            <td>
              <IconButton>
                <EditRounded fontSize="small" color="warning" />
              </IconButton>
              <IconButton>
                <DeleteRounded fontSize="small" color="error" />
              </IconButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomTable;
