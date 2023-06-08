import { TextField } from "@mui/material";
import React from "react";

const InputComp = ({ value, setValue, placeholder, type = "text", label, required, error, inputProps = null, name }) => {
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
        name={name}
        onChange={(e) => setValue(e.target.value)}
        error={error}
        InputProps={{
          inputComponent: inputProps
        }}
      />
    </>
  );
};

export default InputComp;
