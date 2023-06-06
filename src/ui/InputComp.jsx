import { TextField } from "@mui/material";
import React from "react";

const InputComp = ({ value, setValue, placeholder, type = "text", label, required, inputProps = "" }) => {
  return (
    <>
      <TextField
        label={label}
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        type={type}
        variant="outlined"
        color="white"
        fullWidth
        required={required}
        inputProps={inputProps}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default InputComp;
