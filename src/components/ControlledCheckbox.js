import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";

function ControlledCheckbox({
  size,
  rowIndex,
  selectOrDeselectRow,
  isSelected,
}) {
  const [isChecked, setisChecked] = useState(false);
  useEffect(() => {
    setisChecked(isSelected);
  }, [isSelected]);
  return (
    <Checkbox
      size={size}
      checked={isChecked}
      onChange={(e) => selectOrDeselectRow(rowIndex, e.target.checked)}
    />
  );
}

export default ControlledCheckbox;
