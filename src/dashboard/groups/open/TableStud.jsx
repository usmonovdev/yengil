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
import TableDataSt from "./TableDataSt";

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
  const [selected, setSelected] = useState(false);
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
    <TableDataSt
      data={filteredSt}
      selectedItem={selected}
      setSelectedItem={setSelected}
    />
  );
};

export default TableStud;
