import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  styled,
  tableCellClasses,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TopDashboard from "../../topDashboard/TopDashboard";
import { useSelector } from "react-redux";
import { H3 } from "../../../ui/typography";
import { group } from "../../../localData/groupData";
import { studentData } from "../../../localData/groupStudentsData";
import dots from "../../../assets/icons/dots.png";
import dotsDark from "../../../assets/dark/dots.png";
import search from "../../../assets/icons/search.png";
import remov from "../../../assets/icons/delete.png";
import searchDark from "../../../assets/dark/darkSearch.png";
import deleteDark from "../../../assets/dark/delete.png";
import edit from "../../../assets/icons/edit.png";
import editDark from "../../../assets/dark/edit.png";
import { Img } from "../../students/tablestudents/TableStyled";
import { useTheme } from "@emotion/react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.blue.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const GroupOpen = () => {
  const { id } = useParams();
  const { sidebar } = useSelector((state) => state);
  const groups = group.filter((e) => e.id == id);
  const [filteredSt, setFilteredSt] = useState(studentData);
  const theme = useTheme();
  const [student, setStudent] = useState(group);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <H3>Ustoz: {groups[0].name}</H3>
            <H3>Dars vaqti: {group[0].clock}</H3>
            <H3>Kunlar: Dushanba, seshanba, chorshanba</H3>
            <H3>{group[0].payment}</H3>
            <H3>Jami - {studentData.length}</H3>
          </div>
          <div>
            <IconButton aria-label="delete" size="large">
              <Img src={theme.palette.mode == "light" ? edit : editDark} />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <Img src={theme.palette.mode == "light" ? remov : deleteDark} />
            </IconButton>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "30px",
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
              label={"qidirish"}
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
            <FormControl sx={{ width: { xs: "100%" } }} color="blue">
              <InputLabel id="demo-simple-select-label">
                {"saralash"}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={"asd"}
                onChange={handleChange}
                value={sorting}
              >
                <MenuItem value="name">Ism familiya</MenuItem>
                <MenuItem value="tel">Tel</MenuItem>
                <MenuItem value="payment">To'lov</MenuItem>
                <MenuItem value="dabt">Qarz</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <TableContainer sx={{ borderRadius: "5px" }}>
          <Table stickyHeader sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Ism Familiya</StyledTableCell>
                <StyledTableCell align="left">Phone</StyledTableCell>
                <StyledTableCell align="left">To’lov </StyledTableCell>
                <StyledTableCell align="left">Qarz</StyledTableCell>
                <StyledTableCell align="left">Edit</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSt
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((users, index) => {
                  return (
                    <StyledTableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={users.id}
                    >
                      <TableCell>{users.name}</TableCell>
                      <TableCell>{users.phone}</TableCell>
                      <TableCell>{users.payment}</TableCell>
                      <TableCell>{users.dabt}</TableCell>
                      <TableCell>
                        <Img
                          src={theme.palette.mode == "light" ? dots : dotsDark}
                        />
                      </TableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default GroupOpen;
