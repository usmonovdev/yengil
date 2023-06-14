import React, { useState } from "react";
import { H2, Paragraph } from "../../../ui/typography";
import { Box, Button, InputAdornment, Select, TextField } from "@mui/material";
import filters from "../../../assets/icons/filter.png";
import { Img, TD } from "./TableStyled";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { students } from "../../../localData/studentData";

const TableStudents = () => {
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();
  const [sorting, setSorting] = React.useState("");

  const handleChange = (event) => {
    setSorting(event.target.value);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        overflow: "scroll",
      }}
    >
      <H2>O’quvchilar</H2>
      <Paragraph>Jami - 1000</Paragraph>
      <form
        style={{
          display: "flex",
          gap: "20px",
          overflow: "scroll",   
          justifyContent: "space-between",
          width: "1400px"
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <TextField
            label="Qidirish"
            id="filled-start-adornment"
            sx={{ width: "20ch", background: "white" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Img src={filters} />
                </InputAdornment>
              ),
            }}
            variant="filled"
          />
          <Box sx={{ width: "203px", height: "20x", display: "flex" }}>
            <FormControl fullWidth sx={{ width: { xs: "100%" } }}>
              <InputLabel id="demo-simple-select-label">Saralash</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Saralash"
                value={sorting}
                onChange={handleChange}
              >
                <MenuItem value={10}>Matem</MenuItem>
                <MenuItem value={20}>Ona tili</MenuItem>
                <MenuItem value={30}>Kimyo</MenuItem>
                <MenuItem value={40}>Fizika</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Button variant="contained">Qo'shish</Button>
      </form>
      <>
        <table style={{ width: "1400px", padding: "10px", overflow: "scroll" }}>
          <tr>
            <th style={{ width: "5%", textAlign: "center" }}></th>
            <th>Ism familiya</th>
            <th>Guruh</th>
            <th>Telefon</th>
            <th>To’lov</th>
          </tr>
          {students.map((student) => {
            return (
              <tr>
                <TD style={{ textAlign: "center" }}>{student.id}</TD>
                <TD>{student.name}</TD>
                <TD>{student.group}</TD>
                <TD>{student.tel}</TD>
                <TD>{student.payment}</TD>
              </tr>
            );
          })}
        </table>
      </>
    </div>
  );
};

export default TableStudents;
