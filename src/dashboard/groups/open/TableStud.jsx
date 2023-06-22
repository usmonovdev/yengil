import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  styled,
  tableCellClasses,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { Img } from "../../students/tablestudents/TableStyled";
import { useTheme } from "@emotion/react";
import dots from "../../../assets/icons/dots.png";
import dotsDark from "../../../assets/dark/dots.png";
import { useTranslation } from "react-i18next";
import TableStActions from "./TableStActions";
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

const TableStud = ({ filteredSt }) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = useTheme();
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
      <TableContainer
        sx={{
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
                    <TableCell>{users.payment}</TableCell>
                    <TableCell>{users.dabt}</TableCell>
                    <TableCell>
                      <TableActions />
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

export default TableStud;
