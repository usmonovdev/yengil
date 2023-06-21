import {
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
} from "@mui/material";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

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
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <TableContainer
        sx={{
          borderRadius: "5px",
          borderRadius: "5px",
          transform: isInView ? "none" : "translateX(400px)",
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
  );
};

export default GroupDiscount;
