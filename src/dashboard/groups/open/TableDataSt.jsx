import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
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
} from "@mui/material";
import TableActions from "./TableActions";
import { useTranslation } from "react-i18next";
import { StyledTableCell, StyledTableRow } from "../../../ui/StyledTable";
import { useDispatch } from "react-redux";
import { getSelectedLngth } from "../../../store/themeSlice";
import SearchIcon from "@mui/icons-material/Search";
import { H3 } from "../../../ui/typography";
import Selected from "./Selected";

const TableDataSt = ({ data, selectedItem, setSelectedItem }) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  const [sorting, setSorting] = useState("name");
  const [filteredSt, setFilteredSt] = useState(data);

  const handleFilter = (event) => {
    if (sorting === "name") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          data.filter((f) => f.name.toLowerCase().includes(event.target.value))
        );
      } else {
        setFilteredSt(data);
      }
    } else if (sorting === "tel") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          data.filter((f) => f.phone.toLowerCase().includes(event.target.value))
        );
      } else {
        setFilteredSt(data);
      }
    } else if (sorting == "payment") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          data.filter((f) =>
            f.payment.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(data);
      }
    } else if (sorting == "dabt") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          data.filter((f) => f.dabt.toLowerCase().includes(event.target.value))
        );
      } else {
        setFilteredSt(data);
      }
    }
  };

  const handleChange = (event) => {
    setSorting(event.target.value);
  };

  useEffect(() => {
    dispatch(getSelectedLngth(selected.length));
  }, [selected]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  const isSelected = (name) => selected.indexOf(name) !== -1;

  useEffect(() => {
    if (selected.length > 0) {
      setSelectedItem(true);
    } else {
      setSelectedItem(false);
    }
  }, [selected, selectedItem]);

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
              <MenuItem value="payment">{t("groupOpenPayment")}</MenuItem>
              <MenuItem value="dabt">{t("groupOpenDabt")}</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row-reverse" },
            gap: "20px",
          }}
        >
          {selectedItem && <Selected />}
        </Box>
      </Box>
      {filteredSt.length > 0 ? (
        <>
          <TableContainer sx={{ borderRadius: "5px", transition: "500ms" }}>
            <Table stickyHeader sx={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">
                    <Checkbox
                      color="white"
                      onChange={handleSelectAllClick}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                    {t("groupTablesId")}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {t("groupOpenName")}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {t("gruopOpenPhone")}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {t("groupOpenPayment")}{" "}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {t("groupOpenDabt")}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {t("groupOpenEdit")}
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredSt
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((users) => {
                    const isItemSelected = isSelected(users.id);
                    return (
                      <StyledTableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={users.id}
                        selected={isItemSelected}
                      >
                        <TableCell>
                          <Checkbox
                            color="blue"
                            indeterminate={
                              selected.length > 0 &&
                              selected.length < users.length
                            }
                            checked={isItemSelected}
                            onClick={() => handleClick(users.id)}
                          />
                          {users.id}
                        </TableCell>
                        <TableCell>{users.name}</TableCell>
                        <TableCell>{users.phone}</TableCell>
                        <TableCell>{users.payment}</TableCell>
                        <TableCell>{users.dabt}</TableCell>
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
            count={data.length}
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
    </>
  );
};

export default TableDataSt;
