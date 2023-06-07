import { TextField } from "@mui/material";
import React from "react";

const InputComp = ({ value, setValue, placeholder, type = "text", label, required, error }) => {
  return (
    <>
      <TextField
        label={label}
        value={value}
        placeholder={placeholder}
        type={type}
        variant="outlined"
        color="blue"
        fullWidth
        autoComplete="off"
        required={required}
        onChange={(e) => setValue(e.target.value)}
        error={error}
      />
    </>
  );
};

export default InputComp;
