import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import TableActions from "./TableActions";
import { useTranslation } from "react-i18next";
import { StyledTableCell, StyledTableRow } from "../../../ui/StyledTable";
import { useDispatch } from "react-redux";
import { getSelectedLngth } from "../../../store/themeSlice";

const TableData = ({ data, selectedItem, setSelectedItem }) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSelectedLngth(selected.length))
  }, [selected])

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
    if(selected.length > 0) {
      setSelectedItem(true)
    } else {
      setSelectedItem(false)
    }
  }, [selected, selectedItem])

  return (
    <>
      <TableContainer sx={{ borderRadius: "5px", transition: "500ms" }}>
        <Table stickyHeader sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">
                <Checkbox
                  color="alsoWhite"
                  onChange={handleSelectAllClick}
                  inputProps={{
                    "aria-label": "select all desserts",
                  }}
                />
                {t("groupTablesId")}
              </StyledTableCell>
              <StyledTableCell align="left">
                {t("studentsInfo")}
              </StyledTableCell>
              <StyledTableCell align="left">
                {t("studentsPhone")}
              </StyledTableCell>
              <StyledTableCell align="left">
                {t("studentsGroup")}
              </StyledTableCell>
              <StyledTableCell align="left">
                {t("studentsPayment")}
              </StyledTableCell>
              <StyledTableCell align="left">{t("groupMore")}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
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
                          selected.length > 0 && selected.length < users.length
                        }
                        checked={isItemSelected}
                        onClick={() => handleClick(users.id)}
                      />
                      {users.id}
                    </TableCell>
                    <TableCell>{users.full_name}</TableCell>
                    <TableCell>{users.phone}</TableCell>
                    <TableCell>React</TableCell>
                    <TableCell>0</TableCell>
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
  );
};

export default TableData;
