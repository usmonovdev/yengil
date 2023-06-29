import {
  Box,
  MenuItem,
  Button,
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
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import { studentData } from "../../../localData/groupStudentsData";
import { H3 } from "../../../ui/typography";
import { StyledTableCell, StyledTableRow } from "../../../ui/StyledTable";

const GroupDiscount = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [filteredSt, setFilteredSt] = useState(studentData);
  const [count, setCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sorting, setSorting] = useState("name");
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
    }
  };

  const handleChange = (event) => {
    setSorting(event.target.value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleGetData = (e) => {
    setCount({ ...count, [e.target.name]: e.target.value });
  };
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <>
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
            label={t("newStudentsSearch")}
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
            <InputLabel id="demo-simple-select-label">
              {t("groupOpenSorting")}
            </InputLabel>
            <Select
              label={t("groupOpenSorting")}
              onChange={handleChange}
              value={sorting}
            >
              <MenuItem value="name">{t("groupOpenName")}</MenuItem>
              <MenuItem value="tel">{t("gruopOpenPhone")}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      {filteredSt.length > 0 ? (
        <>
          <TableContainer
            sx={{
              borderRadius: "5px",
              borderRadius: "5px",
              transform: isInView ? "none" : "translateX(30%)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
            ref={ref}
          >
            <Table stickyHeader sx={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">
                    {t("groupTablesId")}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {t("groupOpenName")}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {t("gruopOpenPhone")}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {t("groupOpenDiscount")}
                  </StyledTableCell>
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
                        <TableCell>{users.phone}</TableCell>
                        <TableCell sx={{ width: "20%" }}>
                          <TextField
                            label="Summa"
                            placeholder={"240.000"}
                            type={"number"}
                            variant="outlined"
                            color="blue"
                            fullWidth
                            autoComplete="off"
                            required={true}
                            name={users.id}
                            onChange={handleGetData}
                          />
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
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="blue"
              sx={{ width: { xs: "100%", md: "10%" } }}
            >
              Save
            </Button>
          </div>
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
    </>
  );
};

export default GroupDiscount;
