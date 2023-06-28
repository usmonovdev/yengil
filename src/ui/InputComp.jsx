import { TextField } from "@mui/material";
import React from "react";

const InputComp = ({
  sx,
  value,
  setValue,
  placeholder,
  type = "text",
  label,
  required,
  error,
  inputProps = null,
  name,
  disabled = false
}) => {
  return (
    <>
      <TextField
        label={label}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
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
          inputComponent: inputProps,
        }}
      />
    </>
  );
};

export default InputComp;
