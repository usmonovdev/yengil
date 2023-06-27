import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { H3 } from "../../../ui/typography";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ width: "30%" }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Joined = ({ value, index }) => {
  const [input, setInput] = useState();
  return (
    <TabPanel value={value} index={index}>
      <H3>Xabar Matni</H3>
      <Box
        sx={{
          width: { xs: "490%", sm: "350%", md: "150%" },
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
    </TabPanel>
  );
};

export default Joined;
