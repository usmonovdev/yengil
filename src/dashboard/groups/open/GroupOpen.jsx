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
  TextField,
  Tooltip,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useInView } from "framer-motion";
import TopDashboard from "../../topDashboard/TopDashboard";
import { useSelector } from "react-redux";
import { H1, H3 } from "../../../ui/typography";
import { group } from "../../../localData/groupData";
import { studentData } from "../../../localData/groupStudentsData";
import { useTheme } from "@emotion/react";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from '@mui/icons-material/Search';
import TableStud from "./TableStud";
import EditIcon from "@mui/icons-material/Edit";
import GroupDiscount from "./GroupDiscount";
import { exportToExel } from "../../../utils/ExelExport";
import exportD from "../../../assets/dark/export.png";
import exportW from "../../../assets/icons/export.png";
import { useTranslation } from "react-i18next";
import DeleteMo from "../../../ui/DeleteMo";
import EditMo from "../groupTables/EditMo";

const GroupOpen = () => {
  const { id } = useParams();
  const { sidebar } = useSelector((state) => state);
  const groups = group.filter((e) => e.id == id);
  const [filteredSt, setFilteredSt] = useState(studentData);
  const theme = useTheme();
  const [btn, setBtn] = useState(false);
  const [sorting, setSorting] = useState("name");
  const { t } = useTranslation();

  const handleFilter = (event) => {
    if (sorting === "name") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          studentData.filter((f) =>
            f.name.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(studentData);
      }
    } else if (sorting === "tel") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          studentData.filter((f) =>
            f.phone.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(studentData);
      }
    } else if (sorting == "payment") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          studentData.filter((f) =>
            f.payment.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(studentData);
      }
    } else if (sorting == "dabt") {
      if (event.target.value.length > 0) {
        setFilteredSt(
          studentData.filter((f) =>
            f.dabt.toLowerCase().includes(event.target.value)
          )
        );
      } else {
        setFilteredSt(studentData);
      }
    }
  };

  const handleChange = (event) => {
    setSorting(event.target.value);
  };
  const [open, setOpen] = useState(false);
  const [editMo, setEditMo] = useState(false)
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <>
    <DeleteMo modal={open} setModal={setOpen} text={t("deleteGroupTitle")}/>
    <EditMo modal={editMo} setModal={setEditMo} />
    <Box
      sx={{
        width: "100%",
        borderRadius: "5px",
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
      ref={ref}
    >
      <TopDashboard header={t("groupTables")} title={t("groupTitle")} />
      <Box
        sx={{
          position: "relative",
          top: "50px",
          left: `${sidebar ? "90px" : "0"}`,
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <H1>
              {t("groupOpenTeacher")}: {groups[0].name}
            </H1>
            <H3>
              {t("groupOpenLessonTime")} {group[0].clock}
            </H3>
            <H3>{t("groupOpenDay")}: Dushanba, seshanba, chorshanba</H3>
            <H3>
              {t("groupOpenPayment")}: {group[0].payment}
            </H3>
            <H3>
              {t("groupOpenAll")} - {studentData.length}
            </H3>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              alignItems: "flex-start",
            }}
          >
            <IconButton aria-label="delete" onClick={() => setEditMo(!editMo)}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => setOpen(!open)}>
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          {btn ? (
            <>
              <Button
                color="blue"
                variant={`${btn ? "outlined" : "contained"}`}
                onClick={() => setBtn(false)}
              >
                {t("groupOpenStudents")}
              </Button>
              <Button
                color="blue"
                variant={`${btn ? "contained" : "outlined"}`}
                onClick={() => setBtn(true)}
              >
                {t("groupOpenDiscount")}
              </Button>
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Button
                  color="blue"
                  variant={`${btn ? "outlined" : "contained"}`}
                  onClick={() => setBtn(false)}
                >
                  {t("groupOpenStudents")}
                </Button>
                <Button
                  color="blue"
                  variant={`${btn ? "contained" : "outlined"}`}
                  onClick={() => setBtn(true)}
                >
                  {t("groupOpenDiscount")}
                </Button>
                <Tooltip title="Download">
                  <IconButton
                    sx={{ height: "fit-content", width: "fit-content" }}
                    onClick={() =>
                      exportToExel("GroupStudent (Yengil App)", studentData)
                    }
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
            </>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            {btn ? (
              <FormControl sx={{ width: { xs: "100%" } }} color="blue">
                <InputLabel id="demo-simple-select-label">
                  {t("groupOpenSorting")}
                </InputLabel>
                <Select
                  label={t("groupOpenSorting")}
                  onChange={handleChange}
                  value={sorting}
                >
                  <MenuItem value="name">{t("groupOpenName")}</MenuItem>
                  <MenuItem value="tel">{t("gruopOpenPhone")}</MenuItem>
                </Select>
              </FormControl>
            ) : (
              <FormControl sx={{ width: { xs: "100%" } }} color="blue">
                <InputLabel id="demo-simple-select-label">
                  {t("groupOpenSorting")}
                </InputLabel>
                <Select
                  label={t("groupOpenSorting")}
                  onChange={handleChange}
                  value={sorting}
                >
                  <MenuItem value="name">{t("groupOpenName")}</MenuItem>
                  <MenuItem value="tel">{t("gruopOpenPhone")}</MenuItem>
                  <MenuItem value="payment">{t("groupOpenPayment")}</MenuItem>
                  <MenuItem value="dabt">{t("groupOpenDabt")}</MenuItem>
                </Select>
              </FormControl>
            )}
          </Box>
        </Box>
        {btn ? (
          <GroupDiscount filteredSt={filteredSt} />
        ) : (
          <TableStud filteredSt={filteredSt} />
        )}
      </Box>
    </Box>
    
    </>
  );
};

export default GroupOpen;
