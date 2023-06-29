import { teacher } from "../../../localData/teacherData";
import { exportToExel } from "../../../utils/ExelExport";
import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TableCell,
  TableRow,
  TextField,
  Tooltip,
  styled,
  tableCellClasses,
} from "@mui/material";
import { H2, H3, Paragraph } from "../../../ui/typography";
import { Img } from "../../students/tablestudents/TableStyled";
import { useTheme } from "@emotion/react";
import search from "../../../assets/icons/search.png";
import searchDark from "../../../assets/dark/darkSearch.png";
import { useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addTecherTables } from "../../../store/themeSlice";
import exportD from "../../../assets/dark/export.png";
import exportW from "../../../assets/icons/export.png";
import { useTranslation } from "react-i18next";
import AddTeacher from "../addTeacher/AddTeacher";
import Selected from "./Selected";
import TableData from "./TableData";

const TeacherTables = () => {
  const [selected, setSelected] = useState(false);
  const theme = useTheme();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const [filteredSt, setFilteredSt] = useState(teacher);
  const [student, setStudent] = useState(teacher);
  const [sorting, setSorting] = useState("name");
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { addTablesTeacher } = useSelector((state) => state);

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
    } else if (sorting == "salary") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.salary.toLowerCase().includes(event.target.value)
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
      {addTablesTeacher && <AddTeacher />}
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
          <H2>{t("dashboardTeachers")}</H2>
          <Tooltip title={t("teachersDownloadTitle")} arrow>
            <IconButton
              sx={{ height: "fit-content", width: "fit-content" }}
              onClick={() => exportToExel("Teacher (Yengil App)", teacher)}
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
        <Paragraph>
          {t("groupTablesAll")} - {teacher.length}
        </Paragraph>
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
                      <Img
                        src={
                          theme.palette.mode == "light" ? search : searchDark
                        }
                      />
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
                  onChange={handleChange}
                  value={sorting}
                >
                  <MenuItem value="name">{t("studentsInfo")}</MenuItem>
                  <MenuItem value="tel">{t("studentsPhone")}</MenuItem>
                  <MenuItem value="group">{t("studentsGroup")}</MenuItem>
                  <MenuItem value="salary">{t("teachersEditLabel")}</MenuItem>
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
                onClick={() => dispatch(addTecherTables())}
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

export default TeacherTables;
