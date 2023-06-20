import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import TopDashboard from "../../topDashboard/TopDashboard";
import { useSelector } from "react-redux";
import { H1, H3 } from "../../../ui/typography";
import { group } from "../../../localData/groupData";
import { studentData } from "../../../localData/groupStudentsData";
import { Img } from "../../students/tablestudents/TableStyled";
import { useTheme } from "@emotion/react";
import search from "../../../assets/icons/search.png";
import remov from "../../../assets/icons/delete.png";
import searchDark from "../../../assets/dark/darkSearch.png";
import deleteDark from "../../../assets/dark/delete.png";
import edit from "../../../assets/icons/edit.png";
import editDark from "../../../assets/dark/edit.png";
import TableStud from "./TableStud";
import GroupDiscount from "./GroupDiscount";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "70%", md: "400px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  border: "none",
  borderRadius: "5px",
  gap: "15px",
};

const GroupOpen = () => {
  const { id } = useParams();
  const { sidebar } = useSelector((state) => state);
  const groups = group.filter((e) => e.id == id);
  const [filteredSt, setFilteredSt] = useState(studentData);
  const theme = useTheme();
  const [btn, setBtn] = useState(false);
  const [sorting, setSorting] = useState("name");

  const handleFilter = (event) => {
    if (sorting === "name") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          studentData.filter((f) =>
            f.name.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(studentData);
      }
    } else if (sorting === "tel") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          studentData.filter((f) =>
            f.phone.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(studentData);
      }
    } else if (sorting == "payment") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          studentData.filter((f) =>
            f.payment.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(studentData);
      }
    } else if (sorting == "dabt") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          studentData.filter((f) =>
            f.dabt.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(studentData);
      }
    }
  };

  const handleChange = (event) => {
    setSorting(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard header={"Guruh"} title={"Guruhlar & Yangi Guruh"} />
      <Box
        sx={{
          position: "relative",
          top: "100px",
          left: `${sidebar ? "90px" : "0"}`,
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <H1>Ustoz: {groups[0].name}</H1>
            <H3>Dars vaqti: {group[0].clock}</H3>
            <H3>Kunlar: Dushanba, seshanba, chorshanba</H3>
            <H3>To'lov: {group[0].payment}</H3>
            <H3>Jami o'quvchilar - {studentData.length}</H3>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              alignItems: "flex-start",
            }}
          >
            <IconButton aria-label="delete" size="large">
              <Img src={theme.palette.mode == "light" ? edit : editDark} />
            </IconButton>
            <IconButton aria-label="delete" size="large" onClick={handleOpen}>
              <Img src={theme.palette.mode == "light" ? remov : deleteDark} />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Button
            color="blue"
            variant={`${btn ? "outlined" : "contained"}`}
            onClick={() => setBtn(false)}
          >
            O'quvchilar
          </Button>
          <Button
            color="blue"
            variant={`${btn ? "contained" : "outlined"}`}
            onClick={() => setBtn(true)}
          >
            Chegirma
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            width: "100%",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "20px",
            }}
          >
            <TextField
              color="blue"
              label={"Qidirish"}
              onChange={handleFilter}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Img
                      src={theme.palette.mode == "light" ? search : searchDark}
                    />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            {btn ? (
              <FormControl sx={{ width: { xs: "100%" } }} color="blue">
                <InputLabel id="demo-simple-select-label">Saralash</InputLabel>
                <Select
                  label={"Saralash"}
                  onChange={handleChange}
                  value={sorting}
                >
                  <MenuItem value="name">Ism familiya</MenuItem>
                  <MenuItem value="tel">Tel</MenuItem>
                </Select>
              </FormControl>
            ) : (
              <FormControl sx={{ width: { xs: "100%" } }} color="blue">
                <InputLabel id="demo-simple-select-label">Saralash</InputLabel>
                <Select
                  label={"Saralash"}
                  onChange={handleChange}
                  value={sorting}
                >
                  <MenuItem value="name">Ism familiya</MenuItem>
                  <MenuItem value="tel">Tel</MenuItem>
                  <MenuItem value="payment">To'lov</MenuItem>
                  <MenuItem value="dabt">Qarz</MenuItem>
                </Select>
              </FormControl>
            )}
          </Box>
        </Box>
        {btn ? (
          <GroupDiscount filteredSt={filteredSt} />
        ) : (
          <TableStud filteredSt={filteredSt} />
        )}
      </Box>
    </Box>
  );
};

export default GroupOpen;
