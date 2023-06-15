import React, { useEffect, useState } from "react";
import { H1, H2, Paragraph } from "../../../ui/typography";
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
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const theme = useTheme();

  const handleChange = (event) => {
    setSorting(event.target.value);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleFilter = (e) => {
    setSearch(e);
  };

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
      <form>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
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
              label="Qidirish"
              id="filled-start-adornment"
              onChange={(e) => handleFilter(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Img
                      src={
                        theme.palette.mode == "light" ? filters : filtersDark
                      }
                    />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <FormControl sx={{ width: { xs: "100%" } }} color="blue">
              <InputLabel id="demo-simple-select-label">Saralash</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Saralash"
                value={sorting}
                onChange={handleChange}
              >
                <MenuItem value="">Saralash</MenuItem>
                <MenuItem value="Matem">Matem</MenuItem>
                <MenuItem value="Ona tili">Ona tili</MenuItem>
                <MenuItem value="Kimyo">Kimyo</MenuItem>
                <MenuItem value="Fizika">Fizika</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" color="blue">
            Qo'shish
          </Button>
        </Box>
      </form>
      <TableContainer sx={{ borderRadius: "5px" }}>
        <Table stickyHeader sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">No</StyledTableCell>
              <StyledTableCell align="left">Ism Familiya</StyledTableCell>
              <StyledTableCell align="left">Telefon</StyledTableCell>
              <StyledTableCell align="left">Guruh</StyledTableCell>
              <StyledTableCell align="left">To'lov</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {search.length > 0
              ? students
                  .filter((users) => {
                    return search === ""
                      ? users
                      : users.name.toLowerCase().includes(search);
                  })
                  .map((users, index) => {
                    return (
                      <StyledTableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={users.id}
                      >
                        <TableCell>{index}</TableCell>
                        <TableCell>{users.name}</TableCell>
                        <TableCell>{users.tel}</TableCell>
                        <TableCell>{users.group}</TableCell>
                        <TableCell>{users.payment}</TableCell>
                      </StyledTableRow>
                    );
                  })
              : students
                  .filter((users) => {
                    return sorting === ""
                      ? users
                      : users.group.includes(sorting);
                  })
                  .map((users, index) => {
                    return (
                      <StyledTableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={users.id}
                      >
                        <TableCell>{index}</TableCell>
                        <TableCell>{users.name}</TableCell>
                        <TableCell>{users.tel}</TableCell>
                        <TableCell>{users.group}</TableCell>
                        <TableCell>{users.payment}</TableCell>
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
  );
};

export default TableStudents;
