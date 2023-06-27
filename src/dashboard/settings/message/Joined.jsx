import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { H3 } from "../../../ui/typography";

const Joined = () => {
  const [input, setInput] = useState();
  return (
    <Box sx={{ width: "100%" }}>
      <H3>Xabar Matni</H3>
      <Box
        sx={{
          width: "100%",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          gap: "15px",
          alignItems: "flex-end",
        }}
      >
        <TextField
          sx={{ width: "100%" }}
          id="outlined-multiline-static"
          multiline
          onChange={(e) => setInput(e.target.value)}
          color="blue"
          rows={11}
          defaultValue="Assalomu alaykum (STUDENT)! (MARKAZ)’ining 
          (GROUP)’ida o’qishga qabul qilindingiz. 

          Dars kunlari: (DAYS)
          Dars vaqti: (HOURS)
          To’lov miqdori: (SUM)
          Ustoz: (TEACHER)"
        />
        <Button variant="contained" color="blue">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default Joined;
