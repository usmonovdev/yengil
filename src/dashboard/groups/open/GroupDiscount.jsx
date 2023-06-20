import {
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
import { Img } from "../../students/tablestudents/TableStyled";
import { useTheme } from "@emotion/react";
import dots from "../../../assets/icons/dots.png";
import dotsDark from "../../../assets/dark/dots.png";
import { useTranslation } from "react-i18next";
import InputComp from "../../../ui/InputComp";

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

const GroupDiscount = ({ filteredSt }) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = useTheme();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleGetData = (e) => {
    setCount({ ...count, [e.target.name]: e.target.value });
  };

  return (
    <>
      <TableContainer sx={{ borderRadius: "5px" }}>
        <Table stickyHeader sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Ism Familiya</StyledTableCell>
              <StyledTableCell align="left">Phone</StyledTableCell>
              <StyledTableCell align="left">Chegirma </StyledTableCell>
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
                    <TableCell>{users.name}</TableCell>
                    <TableCell>{users.phone}</TableCell>
                    <TableCell sx={{ width: "20%" }}>
                      {/* <InputComp
                        label={"summa"}
                        value={count}
                        setValue={setCount}
                        placeholder="240.000"
                        name={users.id}
                      /> */}
                      <TextField
                        label="Summa"
                        // value={count}
                        placeholder={"240.000"}
                        type={"number"}
                        variant="outlined"
                        color="blue"
                        fullWidth
                        autoComplete="off"
                        required={true}
                        name={users.id}
                        onChange={handleGetData}
                        // error={error}
                        // InputProps={{
                        //   inputComponent: inputProps,
                        // }}
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
    </>
  );
};

export default GroupDiscount;
