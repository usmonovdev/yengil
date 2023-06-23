import React, { useRef, useState } from "react";
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
import { useTranslation } from "react-i18next";
import { H2, H3, Paragraph } from "../../../ui/typography";
import { group } from "../../../localData/groupData";
import { useTheme } from "@emotion/react";
import SearchIcon from '@mui/icons-material/Search';
import { useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addGroupTables } from "../../../store/themeSlice";
import AddGroupTables from "../addGroupTables/AddGroupTables";
import exportD from "../../../assets/dark/export.png";
import exportW from "../../../assets/icons/export.png";
import { exportToExel } from "../../../utils/ExelExport";
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

  const handleChangePage = (newPage) => {
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <H2>Guruhlar</H2>
          <Tooltip title="Download groups data (Exel)">
            <IconButton
              sx={{ height: "fit-content", width: "fit-content" }}
              onClick={() => exportToExel("Group (Yengil App)", group)}
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
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
              <FormControl sx={{ width: { xs: "100%" } }} color="blue">
                <InputLabel>
                  {t("studentsSorting")}
                </InputLabel>
                <Select
                  label={t("studentsSorting")}
                  onChange={handleChange}
                  value={sorting}
                >
                  <MenuItem value="name">{t("groupTablesTeacher")}</MenuItem>
                  <MenuItem value="group">{t("groupTablesName")}</MenuItem>
                  <MenuItem value="day">{t("groupTablesDay")}</MenuItem>
                  <MenuItem value="payment">{t("groupTablesPayment")}</MenuItem>
                  <MenuItem value="clock">{t("groupTablesClock")}</MenuItem>
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
                    <StyledTableCell align="left">
                      {t("groupTablesId")}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {t("groupTablesName")}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {t("groupTablesTeacher")}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {t("groupTablesDay")}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {t("groupTablesPayment")}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {t("groupTablesClock")}
                    </StyledTableCell>
                    <StyledTableCell align="left">More</StyledTableCell>
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
                          <TableCell>{users.id}</TableCell>
                          <TableCell>{users.group}</TableCell>
                          <TableCell>{users.name}</TableCell>
                          <TableCell>{users.day}</TableCell>
                          <TableCell>{users.payment}</TableCell>
                          <TableCell>{users.clock}</TableCell>
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
            <H3>{t("studentsNotFound")}</H3>
          </Box>
        )}
      </Box>
    </>
  );
};
export default GroupTables;
