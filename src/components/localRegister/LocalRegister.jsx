import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import InputComp from "../../ui/InputComp";

const LocalRegister = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  console.log(name);
  return (
    <Box
      sx={{
        width: "50%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <InputComp
        placeholder="Usmonov Azizbek"
        value={name}
        setValue={setName}
        label={"Name"}
        required={true}
      />
      <InputComp
        placeholder="+998 78 777 11 00"
        value={phone}
        setValue={setPhone}
        label={"Phone"}
        required={true}
      />
      <Button
        variant="contained"
        color="white"
        sx={{
          color: "#fff",
          width: "100%",
          boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
        }}
      >
        Register
      </Button>
    </Box>
  );
};

export default LocalRegister;
