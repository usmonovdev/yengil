import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import TableDataSt from "./TableDataSt";

const TableStud = ({ filteredSt }) => {
  return (
    <TableDataSt
      data={filteredSt}
      selectedItem={selected}
      setSelectedItem={setSelected}
    />
  );
};

export default TableStud;
