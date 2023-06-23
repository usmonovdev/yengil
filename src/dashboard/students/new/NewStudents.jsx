import React, { useEffect, useRef, useState } from "react";
import { H2, H3 } from "../../../ui/typography";
import undov from "../.../../../../assets/icons/undov.png";
import undovDark from "../.../../../../assets/dark/undov-white.png";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  styled,
} from "@mui/material";
import { studentResponse } from "../../../localData/studentResponse";
import { AddStudents } from "../addStudents/AddStudents";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addWaitStudent } from "../../../store/themeSlice";
import { useInView } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import DeleteMo from "../../../ui/DeleteMo";
import AddStudent from "./AddStudent";
import WaitingStudents from "./WaitingStudents";
import ReadyStudents from "./ReadyStudents";

const NewStudents = () => {
  const [sorting, setSorting] = useState("name");
  const [students, setStudents] = useState(studentResponse);
  const [newStudents, setNewStudents] = useState([]);
  const [filtered, setFilter] = useState(studentResponse);
  const [waitingStudents, setWaitingStudents] = useState([]);
  const [readyStudents, setReadyStudents] = useState([]);

  const theme = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { addStudentWait } = useSelector((state) => state);
  const [delModal3, setDelModal3] = useState(false);
  const [delModal2, setDelModal2] = useState(false);
  const [delModal, setDelModal] = useState(false);

  const Img = styled("img")(({ theme }) => ({
    width: "11px",
    height: "11px",
  }));

  const handleFilter = (event) => {
    if (sorting === "name") {
      if (event.target.value.length > 0) {
        setFilter(
          students.filter((f) =>
            f.name.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilter(studentResponse);
      }
    } else if (sorting === "group") {
      if (event.target.value.length > 0) {
        setFilter(
          students.filter((f) =>
            f.group.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilter(studentResponse);
      }
    } else if (sorting == "tel") {
      if (event.target.value.length > 0) {
        setFilter(
          students.filter((f) =>
            f.tel.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilter(studentResponse);
      }
    } else if (sorting == "responseTime") {
      if (event.target.value.length > 0) {
        setFilter(
          students.filter((f) =>
            f.responseTime.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilter(studentResponse);
      }
    }
  };

  useEffect(() => {
    setNewStudents(filtered.filter((e) => e.type == "new"));
    setWaitingStudents(filtered.filter((e) => e.type == "waiting"));
    setReadyStudents(filtered.filter((e) => e.type == "ready"));
  }, [filtered]);
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {addStudentWait && <AddStudents />}
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <H2>{t("newStudents")}</H2>
          <H3 style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {t("newStudentsAll")} - 10
            <Tooltip
              disableFocusListener
              disableTouchListener
              title={t("newStudentsTooltip")}
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
                  label={t("newStudentsSearch")}
                  onChange={handleFilter}
                  id="filled-start-adornment"
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
                    {t("newStudentsSorting")}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Saralash"
                    value={sorting}
                    onChange={(e) => setSorting(e.target.value)}
                  >
                    <MenuItem value="name">
                      {t("newStudentsSortingName")}
                    </MenuItem>
                    <MenuItem value="group">
                      {t("newStudentsSortingGroup")}
                    </MenuItem>
                    <MenuItem value="tel">
                      {t("newStudentsSortingPhone")}
                    </MenuItem>
                    <MenuItem value="responseTime">
                      {t("newStudentsSortingTime")}
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button
                variant="contained"
                color="blue"
                onClick={() => dispatch(addWaitStudent())}
              >
                {t("newStudentsAdd")}
              </Button>
            </Box>
          </form>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box
              sx={{
                width: { sm: "100%", md: "33%" },
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                bgcolor: "action.hover",
                padding: "10px",
                borderRadius: "5px",
              }}
              aria-label="new students"
            >
              <Box
                sx={{
                  width: "100%",
                  height: "10px",
                  bgcolor: "custom.newStudentWhite",
                  borderRadius: "4px",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <H3
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  {t("newStudentsRequesters")} - 10
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    title={t("newStudentsRequestersTooltipGeneral")}
                    sx={{ position: "relative" }}
                    arrow
                  >
                    <Img
                      src={theme.palette.mode == "light" ? undov : undovDark}
                    />
                  </Tooltip>
                </H3>
                <H3>
                  {t("newStudentsAll")} - {newStudents.length}
                </H3>
              </Box>
              <AddStudent data={newStudents} />
            </Box>
            <Box
              sx={{
                width: { sm: "100%", md: "33%" },
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                bgcolor: "action.hover",
                padding: "10px",
                borderRadius: "5px",
              }}
              aria-label="new students"
            >
              <Box
                sx={{
                  width: "100%",
                  height: "10px",
                  bgcolor: "custom.bunting",
                  borderRadius: "4px",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <H3
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  {t("newStudentsWaiting")} - 10
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    title={t("newStudentsWaitingTooltipGeneral")}
                    sx={{ position: "relative" }}
                    arrow
                  >
                    <Img
                      src={theme.palette.mode == "light" ? undov : undovDark}
                    />
                  </Tooltip>
                </H3>
                <H3>
                  {t("newStudentsAll")} - {waitingStudents.length}
                </H3>
              </Box>
              <WaitingStudents data={waitingStudents} />
            </Box>
            <Box
              sx={{
                maxHeight: "450px",
                overflowY: "auto",
                width: { sm: "100%", md: "33%" },
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                bgcolor: "action.hover",
                padding: "10px",
                borderRadius: "5px",
              }}
              aria-label="new students"
            >
              <Box
                sx={{
                  width: "100%",
                  height: "10px",
                  bgcolor: "blue.main",
                  borderRadius: "4px",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <H3
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  {t("newStudentsReady")} - 10
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    title={t("newStudentsReadyTooltipGeneral")}
                    sx={{ position: "relative" }}
                    arrow
                  >
                    <Img
                      src={theme.palette.mode == "light" ? undov : undovDark}
                    />
                  </Tooltip>
                </H3>
                <H3>
                  {t("newStudentsAll")} - {readyStudents.length}
                </H3>
              </Box>
              <ReadyStudents data={readyStudents} />
            </Box>
          </Box>
        </Box>
      </div>
      <DeleteMo
        modal={delModal}
        setModal={setDelModal}
        text="Rostdan ham so'rov yuborgan o'quvchini o'chirmoqchimisiz?"
      />
      <DeleteMo
        modal={delModal2}
        setModal={setDelModal2}
        text="Rostdan ham kutayotgan o'quvchini o'chirmoqchimisiz?"
      />
      <DeleteMo
        modal={delModal3}
        setModal={setDelModal3}
        text="Rostdan ham ushbu o'quvchini o'chirmoqchimisiz?"
      />
    </>
  );
};

export default NewStudents;
