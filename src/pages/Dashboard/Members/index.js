import React, { useState } from "react";
import isEmpty from "lodash/isEmpty";

import CustomTable from "../../../components/Table";
import SearchBar from "../../../components/SearchBar/Index";

const rowData = [
  {
    name: "Alice Johnson",
    gender: "Female",
    dob: "1990-04-12",
    email: "alice.johnson@example.com",
    phone: "+1-555-123-4567",
  },
  {
    name: "Bob Smith",
    gender: "Male",
    dob: "1985-11-25",
    email: "bob.smith@example.com",
    phone: "+1-555-987-6543",
  },
  {
    name: "Catherine Brown",
    gender: "Female",
    dob: "1978-08-03",
    email: "catherine.brown@example.com",
    phone: "+1-555-222-7890",
  },
  {
    name: "David Miller",
    gender: "Male",
    dob: "1995-02-18",
    email: "david.miller@example.com",
    phone: "+1-555-444-5678",
  },
];

function MembersPage() {
  const tableHeaders = ["name", "gender", "dob", "email", "phone"];
  const [filteredRowData, setFilteredrowData] = useState(rowData);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const selectOrDeselectAll = (e) => {
    let newRows = [...filteredRowData];
    if (e.target.checked) {
      newRows = newRows.map((row) => ({ ...row, isSelected: true }));
      setSelectedUsers(newRows);
    } else {
      newRows = newRows.map((row) => ({ ...row, isSelected: false }));
      setSelectedUsers([]);
    }
    setFilteredrowData(newRows);
  };

  const selectOrDeselectRow = (index, isChecked) => {
    let newRows = [...filteredRowData];
    newRows[index].isSelected = isChecked;
    setFilteredrowData(newRows);
    setSelectedUsers(newRows.filter((row) => row.isSelected));
  };

  const searchUsers = (name) => {
    if (name) {
      const filteredUsers = [...rowData].filter(
        (user) => user.name.toLowerCase().indexOf(name) > -1
      );
      setFilteredrowData(filteredUsers);
    } else setFilteredrowData(rowData);
  };

  const handleUser = (email) => {};

  const deleteUsers = () => {
    selectedUsers.forEach((user) => handleUser(user.email));
  };

  return (
    <>
      <header>
        <SearchBar searchUsers={searchUsers} />
        {!isEmpty(selectedUsers) && (
          <button className="delete-butt" onClick={deleteUsers}>
            DELETE SELECTED
          </button>
        )}
      </header>
      <CustomTable
        tableHeaders={tableHeaders}
        rowsData={filteredRowData}
        selectOrDeselectRow={selectOrDeselectRow}
        selectAll={selectOrDeselectAll}
        selectedRowsLength={selectedUsers.length}
        deleteRow={handleUser}
      />
    </>
  );
}

export default MembersPage;
