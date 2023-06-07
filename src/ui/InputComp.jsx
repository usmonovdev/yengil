import { TextField } from "@mui/material";
import React from "react";

const InputComp = ({ value, setValue, placeholder, type = "text", label, required }) => {
  return (
    <>
      <TextField
        label={label}
        value={value}
        placeholder={placeholder}
        type={type}
        variant="outlined"   
        color="white"
        fullWidth
        autoComplete="off"
        required={required}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default InputComp;
