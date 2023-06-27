import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { H3 } from "../../../ui/typography";

const AdvancePay = () => {
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
          gap: "15px",
          marginTop: { xs: "0", md: "20px" },
          alignItems: "flex-end",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <TextField
          sx={{ width: "100%" }}
          id="outlined-multiline-static"
          multiline
          onChange={(e) => setInput(e.target.value)}
          color="blue"
          rows={11}
          defaultValue="Assalomu alaykum (STUDENT)! Sizning oylik to’lovdan umumiy qarzdorligingiz (SUM). O’qishni davom ettirishingiz uchun to’lovni amalga oshirishingizni so’raymiz. Hurmat bilan (MARKAZ)."
        />
        <Button variant="contained" color="blue">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AdvancePay;
