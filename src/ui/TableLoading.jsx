import React from "react";
import { StyledTableRow } from "./StyledTable";
import { Skeleton, TableCell } from "@mui/material";

const TableLoading = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => {
        return (
          <StyledTableRow key={data} role="checkbox" tabIndex={-1}>
            <TableCell sx={{ padding: 0 }}>
              <Skeleton variant="rectangular" height={66} />
            </TableCell>
            <TableCell sx={{ padding: 0 }}>
              <Skeleton variant="rectangular" height={66} />
            </TableCell>
            <TableCell sx={{ padding: 0 }}>
              <Skeleton variant="rectangular" height={66} />
            </TableCell>
            <TableCell sx={{ padding: 0 }}>
              <Skeleton variant="rectangular" height={66} />
            </TableCell>
            <TableCell sx={{ padding: 0 }}>
              <Skeleton variant="rectangular" height={66} />
            </TableCell>
            <TableCell sx={{ padding: 0 }}>
              <Skeleton variant="rectangular" height={66} />
            </TableCell>
          </StyledTableRow>
        );
      })}
    </>
  );
};

export default TableLoading;
