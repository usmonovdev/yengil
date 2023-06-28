import React, { useRef, useState } from "react";
import { H1, H2, H3 } from "../../../ui/typography";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Select,
  TextField,
  Tooltip,
  styled,
} from "@mui/material";
import { students } from "../../../localData/studentData";
import { useTheme } from "@emotion/react";
import { exportToExel } from "../../../utils/ExelExport";
import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { addTablesStudent } from "../../../store/themeSlice";
import undov from "../../../assets/icons/undov.png";
import undovDark from "../../../assets/dark/undov-white.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import AddTables from "../addStudentsTables/AddTables";
import FormControl from "@mui/material/FormControl";
import exportD from "../../../assets/dark/export.png";
import exportW from "../../../assets/icons/export.png";
import SearchIcon from "@mui/icons-material/Search";
import TableData from "./TableData";
import Selected from "./Selected";

const TableStudents = () => {
  const [filteredSt, setFilteredSt] = useState(students);
  const [student, setStudent] = useState(students);
  const [sorting, setSorting] = useState("name");
  const [selected, setSelected] = useState(false);
  console.log(selected);

  const theme = useTheme();
  const dispatch = useDispatch();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const Img = styled("img")(({ theme }) => ({
    width: "11px",
    height: "11px",
  }));

  const { t } = useTranslation();

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
    } else if (sorting === "group") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.group.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(student);
      }
    } else if (sorting == "tel") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.tel.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(student);
      }
    } else if (sorting == "payment") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.payment.toLowerCase().includes(event.target.value)
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

  return (
    <>
      <AddTables />
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
          <H2>{t("students")}</H2>
          <Tooltip title={t("studentsDownloadTitle")} arrow>
            <IconButton
              sx={{ height: "fit-content", width: "fit-content" }}
              onClick={() => exportToExel("Students (Yengil App)", students)}
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
        <H3 style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {t("studentsAll")} - 1000
          <Tooltip
            disableFocusListener
            disableTouchListener
            title={t("studentsTooltip")}
            sx={{ position: "relative" }}
            arrow
          >
            <Img src={theme.palette.mode == "light" ? undov : undovDark} />
          </Tooltip>
        </H3>
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
                <InputLabel id="demo-simple-select-label">
                  {t("studentsSorting")}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label={t("studentsSorting")}
                  value={sorting}
                  onChange={handleChange}
                >
                  <MenuItem value="name">{t("addStudentsName")}</MenuItem>
                  <MenuItem value="group">{t("addStudentsGroup")}</MenuItem>
                  <MenuItem value="tel">{t("addStudentsTel")}</MenuItem>
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
              <Button
                variant="contained"
                color="blue"
                onClick={() => dispatch(addTablesStudent())}
              >
                {t("studentsAdd")}
              </Button>
              {selected && <Selected />}
            </Box>
          </Box>
        </form>
        {filteredSt.length > 0 ? (
          <>
            <TableData
              data={filteredSt}
              selectedItem={selected}
              setSelectedItem={setSelected}
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
      </Box>
    </>
  );
};

export default TableStudents;
