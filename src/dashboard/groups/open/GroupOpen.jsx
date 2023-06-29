import React, { useRef, useState } from "react";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { useParams } from "react-router-dom";
import { useInView } from "framer-motion";
import TopDashboard from "../../topDashboard/TopDashboard";
import { useSelector } from "react-redux";
import { H1, H3 } from "../../../ui/typography";
import { group } from "../../../localData/groupData";
import { studentData } from "../../../localData/groupStudentsData";
import GroupDiscount from "./GroupDiscount";
import DeleteMo from "../../../ui/DeleteMo";
import EditMo from "../groupTables/EditMo";
import TableDataSt from "./TableDataSt";
import { useTranslation } from "react-i18next";
import { exportToExel } from "../../../utils/ExelExport";
import exportD from "../../../assets/dark/export.png";
import exportW from "../../../assets/icons/export.png";
import { useTheme } from "@emotion/react";

const GroupOpen = () => {
  const { id } = useParams();
  const { sidebar } = useSelector((state) => state);
  const groups = group.filter((e) => e.id == id);
  const [filteredSt, setFilteredSt] = useState(studentData);
  const [selected, setSelected] = useState(false);
  const [btn, setBtn] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [editMo, setEditMo] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <DeleteMo modal={open} setModal={setOpen} text={t("deleteGroupTitle")} />
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
          </Box>
          <Box sx={{ display: "flex", gap: "15px" }}>
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
                <Tooltip title={t("groupOpenDiscount")} arrow>
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
              </>
            )}
          </Box>
          {btn ? (
            <GroupDiscount />
          ) : (
            <TableDataSt
              data={filteredSt}
              selectedItem={selected}
              setSelectedItem={setSelected}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default GroupOpen;
