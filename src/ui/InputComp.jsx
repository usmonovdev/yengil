import { TextField } from "@mui/material";
import React from "react";

const InputComp = ({ value, setValue, placeholder, type = "text", label }) => {
  return (
    <>
      <TextField
        label={label}
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        type={type}
        variant="filled"
        fullWidth
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default InputComp;
