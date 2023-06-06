import { Box } from "@mui/material";
import React, { useState } from "react";
import InputComp from "../../ui/InputComp";

const LocalRegister = () => {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <Box sx={{ width: "50%", margin: "0 auto", display: "flex", alignItems: "center", flexDirection: "column", gap: "20px" }}>
      <InputComp placeholder="Usmonov Azizbek" value={name} setValue={setName} label={"Name"} />
      <InputComp placeholder="+998 78 777 11 00" value={name} setValue={setName} label={"Phone"} />
    </Box>
  );
};

export default LocalRegister;
