import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import TopDashboard from "../../topDashboard/TopDashboard";
import { useSelector } from "react-redux";
import { H1, H3 } from "../../../ui/typography";
import { group } from "../../../localData/groupData";
import { studentData } from "../../../localData/groupStudentsData";
import { Img } from "../../students/tablestudents/TableStyled";
import { useTheme } from "@emotion/react";
import search from "../../../assets/icons/search.png";
import remov from "../../../assets/icons/delete.png";
import searchDark from "../../../assets/dark/darkSearch.png";
import deleteDark from "../../../assets/dark/delete.png";
import edit from "../../../assets/icons/edit.png";
import editDark from "../../../assets/dark/edit.png";
import TableStud from "./TableStud";
import GroupDiscount from "./GroupDiscount";
import { exportToExel } from "../../../utils/ExelExport";
import exportD from "../../../assets/dark/export.png";
import exportW from "../../../assets/icons/export.png";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "70%", md: "400px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  border: "none",
  borderRadius: "5px",
  gap: "15px",
};

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
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
          top: "100px",
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
            <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{ zIndex: "10000" }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                  width: "100%",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  translateX: "-50%",
                  translateY: "-50%",
                  width: "100%",
                }}
                transition={{ duration: 1, type: "spring", delay: 0.1 }}
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {t("groupOpenDelete")}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {t("groupOpenDeleteDanger")}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: " 10px",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="blue"
                      sx={{
                        background: theme.palette.custom.newStudentWhite,
                        color: "black",
                      }}
                      onClick={handleClose}
                    >
                      {t("groupOpenCanel")}
                    </Button>
                    <Button variant="contained" color="error">
                      {t("groupOpenDelete")}
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </Modal>
            <IconButton aria-label="delete" size="large">
              <Img src={theme.palette.mode == "light" ? edit : editDark} />
            </IconButton>
            <IconButton aria-label="delete" size="large" onClick={handleOpen}>
              <Img src={theme.palette.mode == "light" ? remov : deleteDark} />
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
                O'quvchilar
              </Button>
              <Button
                color="blue"
                variant={`${btn ? "contained" : "outlined"}`}
                onClick={() => setBtn(true)}
              >
                Chegirma
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
                  O'quvchilar
                </Button>
                <Button
                  color="blue"
                  variant={`${btn ? "contained" : "outlined"}`}
                  onClick={() => setBtn(true)}
                >
                  Chegirma
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
                    <Img
                      src={theme.palette.mode == "light" ? search : searchDark}
                    />
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
  );
};

export default GroupOpen;
