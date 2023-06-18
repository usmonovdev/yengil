import React, { useRef, useState } from "react";
import { H2, H3, Paragraph } from "../../../ui/typography";
import {
  Box,
  Button,
  InputAdornment,
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
import search from "../../../assets/icons/search.png";
import searchDark from "../../../assets/dark/darkSearch.png";
import { Img } from "./TableStyled";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { students } from "../../../localData/studentData";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";
import AddTables from "../addStudentsTables/AddTables";
import { useDispatch, useSelector } from "react-redux";
import { addTablesStudent } from "../../../store/themeSlice";

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
  const [filteredSt, setFilteredSt] = useState(students);
  const [student, setStudent] = useState(students);
  const [sorting, setSorting] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { addStudentTables } = useSelector((state) => state);

  const { t } = useTranslation();

  const handleFilter = (event) => {
    if (sorting === "name") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.name.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(student);
      }
    } else if (sorting === "group") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.group.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(student);
      }
    } else if (sorting == "tel") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.tel.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(student);
      }
    } else if (sorting == "payment") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.payment.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(student);
      }
    }
  };

  const handleChange = (event) => {
    setSorting(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <>
    <AddTables />
    <Box
      ref={ref}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      <H2>{t("students")}</H2>
      <Paragraph>{t("studentsAll")} - 1000</Paragraph>
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
              label={t("studentsSearch")}
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
                {t("studentsSorting")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={t("studentsSorting")}
                value={sorting}
                onChange={handleChange}
              >
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="group">Group</MenuItem>
                <MenuItem value="tel">Telefon</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" color="blue" onClick={() => dispatch(addTablesStudent())}>
            {t("studentsAdd")}
          </Button>
        </Box>
      </form>
      {filteredSt.length > 0 ? (
        <>
          <TableContainer sx={{ borderRadius: "5px" }}>
            <Table stickyHeader sx={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">ID</StyledTableCell>
                  <StyledTableCell align="left">
                    {t("studentsInfo")}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {t("studentsPhone")}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {t("studentsGroup")}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {t("studentsPayment")}
                  </StyledTableCell>
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
                        <TableCell>{users.id}</TableCell>
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
            labelRowsPerPage={t("studentsLabelRowsPerPage")}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={filteredSt.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      ) : (
        <Box
          sx={{
            bgcolor: "action.hover",
            borderRadius: "5px",
            width: "100%",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <H3>{t("studentsNotFound")}</H3>
        </Box>
      )}
    </Box>
    </>
  );
};

export default TableStudents;
