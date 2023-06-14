import React, { useState } from "react";
import { H2, Paragraph } from "../../../ui/typography";
import {
  Box,
  Button,
  InputAdornment,
  Paper,
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
import filters from "../../../assets/icons/filter.png";
import filtersDark from "../../../assets/dark/fi-rr-filter.png";
import { Img, TD } from "./TableStyled";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { students } from "../../../localData/studentData";
import NewStudents from "../new/NewStudents";
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

const TableStudents = () => {
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();
  const [sorting, setSorting] = React.useState("");
  const theme = useTheme();

  const handleChange = (event) => {
    setSorting(event.target.value);
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
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
          width: "1400px",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <TextField
            label="Qidirish"
            id="filled-start-adornment"
            sx={{ width: "20ch", background: theme.palette.custom.whiteSmoke }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Img
                    src={theme.palette.mode == "light" ? filters : filtersDark}
                  />
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
      </form>
      <Button variant="contained" color="blue">
        Qo'shish
      </Button>
      <Box
        sx={{
          width: "100%",
          overflow: "scroll",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Ism Familiya</StyledTableCell>
                <StyledTableCell align="left">Telefon</StyledTableCell>
                <StyledTableCell align="left">Guruh</StyledTableCell>
                <StyledTableCell align="left">To'lov</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => {
                return (
                  <StyledTableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={student.id}
                  >
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.tel}</TableCell>
                    <TableCell>{student.group}</TableCell>
                    <TableCell>{student.payment}</TableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={students.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
};

export default TableStudents;
