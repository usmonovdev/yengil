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
  tableCellClasses,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { H2, H3, Paragraph } from "../../../ui/typography";
import { exportToExel } from "../../../utils/ExelExport";
import { useTheme } from "@emotion/react";
import exportD from "../../../assets/dark/export.png";
import exportW from "../../../assets/icons/export.png";
import { profit } from "../../../localData/profitData";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
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

const MoneyTables = () => {
  const theme = useTheme();
  const [filteredSt, setFilteredSt] = useState(profit);
  const [student, setStudent] = useState(profit);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sorting, setSorting] = useState("name");

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
    } else if (sorting === "tel") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.tel.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(student);
      }
    } else if (sorting == "cash") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.cash.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(student);
      }
    } else if (sorting == "date") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.date.toLowerCase().includes(event.target.value)
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
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <>
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
          <H2>{t("dashboardMoneyBenefit")}</H2>
          <Tooltip title="Download profit data (Exel)" arrow>
            <IconButton
              sx={{ height: "fit-content", width: "fit-content" }}
              onClick={() => exportToExel("Profit (Yengil App)", profit)}
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
        <Paragraph>{t("dashboardMoneyBenefitTitle")} - 50.000.000</Paragraph>
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
                <InputLabel>{t("studentsSorting")}</InputLabel>
                <Select
                  label={t("studentsSorting")}
                  onChange={handleChange}
                  value={sorting}
                >
                  <MenuItem value="name">{t("moneyBenefitTable")}</MenuItem>
                  <MenuItem value="tel">{t("userMoPhone")}</MenuItem>
                  <MenuItem value="cash">{t("moneyBenefitSumma")}</MenuItem>
                  <MenuItem value="date">{t("groupOpenDay")}</MenuItem>
                  <MenuItem value="clock">{t("groupTablesClock")}</MenuItem>
                </Select>
              </FormControl>
            </Box>
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
                    {t("moneyBenefitTable")}
                    </StyledTableCell>
                    <StyledTableCell align="left">{t("userMoPhone")}</StyledTableCell>
                    <StyledTableCell align="left">{t("moneyBenefitSumma")}</StyledTableCell>
                    <StyledTableCell align="left">{t("groupOpenDay")}</StyledTableCell>
                    <StyledTableCell align="left">{t("groupTablesClock")}</StyledTableCell>
                    <StyledTableCell align="left">{t("groupMore")}</StyledTableCell>
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
                          <TableCell>{users.name}</TableCell>
                          <TableCell>{users.tel}</TableCell>
                          <TableCell>{users.cash}</TableCell>
                          <TableCell>{users.date}</TableCell>
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
            <H3>{t("moneyNotFound")}</H3>
          </Box>
        )}
      </Box>
    </>
  );
};

export default MoneyTables;
