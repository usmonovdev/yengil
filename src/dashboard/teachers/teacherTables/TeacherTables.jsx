import { teacher } from "../../../localData/teacherData";
import { exportToExel } from "../../../utils/ExelExport";
import React, { useEffect, useRef, useState } from "react";
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
  Tooltip,
  styled,
  tableCellClasses,
} from "@mui/material";
import { H2, H3, Paragraph, StyledLink } from "../../../ui/typography";
import { Img } from "../../students/tablestudents/TableStyled";
import { useTheme } from "@emotion/react";
import search from "../../../assets/icons/search.png";
import searchDark from "../../../assets/dark/darkSearch.png";
import { useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  addGroupTables,
  addTecherTables,
  studentsInfoTables,
} from "../../../store/themeSlice";
import exportD from "../../../assets/dark/export.png";
import exportW from "../../../assets/icons/export.png";
import { useTranslation } from "react-i18next";
import AddTeacher from "../addTeacher/AddTeacher";
import TableActions from "./TableActions";

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

const TeacherTables = () => {
  const theme = useTheme();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const [filteredSt, setFilteredSt] = useState(teacher);
  const [student, setStudent] = useState(teacher);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sorting, setSorting] = useState("name");
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { addTablesTeacher } = useSelector((state) => state);

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
    } else if (sorting == "salary") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.salary.toLowerCase().includes(event.target.value)
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
  return (
    <>
      {addTablesTeacher && <AddTeacher />}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <H2>{t("dashboardTeachers")}</H2>
          <Tooltip title={t("teachersDownloadTitle")} arrow>
            <IconButton
              sx={{ height: "fit-content", width: "fit-content" }}
              onClick={() => exportToExel("Teacher (Yengil App)", teacher)}
            >
              <img
                src={theme.palette.mode == "light" ? exportW : exportD}
                alt=""
                width="20px"
                height="20px"
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Paragraph>{t("groupTablesAll")} - {teacher.length}</Paragraph>
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
                  <MenuItem value="name">{t("studentsInfo")}</MenuItem>
                  <MenuItem value="tel">{t("studentsPhone")}</MenuItem>
                  <MenuItem value="group">{t("studentsGroup")}</MenuItem>
                  <MenuItem value="salary">{t("teachersEditLabel")}</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              variant="contained"
              color="blue"
              onClick={() => dispatch(addTecherTables())}
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
                    <StyledTableCell align="left">
                      {t("groupTablesId")}
                    </StyledTableCell>
                    <StyledTableCell align="left">{t("groupOpenName")}</StyledTableCell>
                    <StyledTableCell align="left">{t("gruopOpenPhone")}</StyledTableCell>
                    <StyledTableCell align="left">{t("groupTables")}</StyledTableCell>
                    <StyledTableCell align="left">{t("teachersEditLabel")}</StyledTableCell>
                    <StyledTableCell align="left">{t("groupOpenEdit")}</StyledTableCell>
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
                          <TableCell
                            onClick={() => dispatch(studentsInfoTables())}
                          >
                            {users.id}
                          </TableCell>
                          <TableCell
                            onClick={() => dispatch(studentsInfoTables())}
                          >
                            {users.name}
                          </TableCell>
                          <TableCell
                            onClick={() => dispatch(studentsInfoTables())}
                          >
                            {users.tel}
                          </TableCell>
                          <TableCell
                            onClick={() => dispatch(studentsInfoTables())}
                          >
                            {t("groupTablesAll")} - {users.group}
                          </TableCell>
                          <TableCell
                            onClick={() => dispatch(studentsInfoTables())}
                          >
                            {users.salary}
                          </TableCell>
                          <TableCell>
                            <TableActions id={users.id} />
                          </TableCell>
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
            <H3>{t("teachersEditNotFound")}</H3>
          </Box>
        )}
      </Box>
    </>
  );
};

export default TeacherTables;
