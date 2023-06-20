import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
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
import { useTranslation } from "react-i18next";
import { H2, H3, Paragraph, StyledLink } from "../../../ui/typography";
import { group } from "../../../localData/groupData";
import { Img } from "../../students/tablestudents/TableStyled";
import { useTheme } from "@emotion/react";
import search from "../../../assets/icons/search.png";
import searchDark from "../../../assets/dark/darkSearch.png";
import { useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addGroupTables } from "../../../store/themeSlice";
import AddGroupTables from "../addGroupTables/AddGroupTables";

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

const GroupTables = () => {
  const [filteredSt, setFilteredSt] = useState(group);
  const [student, setStudent] = useState(group);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sorting, setSorting] = useState("name");
  const dispatch = useDispatch();
  const { addTablesGroup } = useSelector((state) => state);

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
    } else if (sorting == "day") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.day.toLowerCase().includes(event.target.value)
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
    } else if (sorting == "clock") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.clock.toLowerCase().includes(event.target.value)
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

  const { t } = useTranslation();
  const theme = useTheme();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {addTablesGroup && <AddGroupTables />}
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
        <H2>Guruhlar</H2>
        <Paragraph>Jami - {group.length}</Paragraph>
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
                        src={
                          theme.palette.mode == "light" ? search : searchDark
                        }
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
                  onChange={handleChange}
                  value={sorting}
                >
                  <MenuItem value="name">Ustoz</MenuItem>
                  <MenuItem value="group">Guruh nomi</MenuItem>
                  <MenuItem value="day">Dars kuni</MenuItem>
                  <MenuItem value="payment">To'lov</MenuItem>
                  <MenuItem value="clock">Vaqti</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              variant="contained"
              color="blue"
              onClick={() => dispatch(addGroupTables())}
            >
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
                    <StyledTableCell align="left">Guruh nomi</StyledTableCell>
                    <StyledTableCell align="left">Ustoz</StyledTableCell>
                    <StyledTableCell align="left">Dars kuni</StyledTableCell>
                    <StyledTableCell align="left">To’lov</StyledTableCell>
                    <StyledTableCell align="left">Vaqti</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredSt
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((users) => {
                      return (
                        <StyledTableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={users.id}
                        >
                          <StyledLink to={`/dashboard/groups/${users.id}`}>
                            <TableCell>{users.id}</TableCell>
                          </StyledLink>
                          <TableCell>{users.group}</TableCell>
                          <TableCell>{users.name}</TableCell>
                          <TableCell>{users.day}</TableCell>
                          <TableCell>{users.payment}</TableCell>
                          <TableCell>{users.clock}</TableCell>
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
export default GroupTables;
