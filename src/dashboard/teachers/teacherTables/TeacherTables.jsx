import { exportToExel } from "../../../utils/ExelExport";
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import { H2, H3, Paragraph } from "../../../ui/typography";
import { Img } from "../../students/tablestudents/TableStyled";
import { useTheme } from "@emotion/react";
import search from "../../../assets/icons/search.png";
import searchDark from "../../../assets/dark/darkSearch.png";
import { useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import exportD from "../../../assets/dark/export.png";
import exportW from "../../../assets/icons/export.png";
import { useTranslation } from "react-i18next";
import AddTeacher from "../addTeacher/AddTeacher";
import Selected from "./Selected";
import TableData from "./TableData";
import {
  failGetTeach,
  startGetTeach,
  successGetTeach,
} from "../../../store/teachSlice";
import axios from "../../../utils/api";
import { GET_TEACHER } from "../../../utils/constants";

const TeacherTables = () => {
  const [selected, setSelected] = useState(false);
  const theme = useTheme();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const dispatch = useDispatch();
  const { teachers } = useSelector((state) => state.teach);
  console.log(teachers);
  const [filteredSt, setFilteredSt] = useState(teachers);
  const [student, setStudent] = useState(teachers);
  const [sorting, setSorting] = useState("name");
  const { t } = useTranslation();
  const [addTeach, setAddTeach] = useState(false)
  const edu_id = localStorage.getItem("EDU_ID")

  const handleFilter = (event) => {
    if (sorting === "name") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          student.filter((f) =>
            f.full_name.toLowerCase().includes(event.target.value)
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
            f.phone.toLowerCase().includes(event.target.value)
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

  const getTeach = async () => {
    try {
      dispatch(startGetTeach());
      const response = await axios.get(GET_TEACHER, {
        params: {
          edu_center_id: edu_id
        }
      });
      dispatch(successGetTeach(response.data));
    } catch (error) {
      dispatch(failGetTeach(error.response?.data.message[0]));
    }
  };

  useEffect(() => {
    getTeach();
  }, []);


  const handleChange = (event) => {
    setSorting(event.target.value);
  };

  return (
    <>
      <AddTeacher modal={addTeach} setModal={setAddTeach} />
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
              onClick={() => exportToExel("Teacher (Yengil App)", teachers)}
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
          {t("groupTablesAll")} - {teachers.length}
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
                onClick={() => setAddTeach(true)}
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
