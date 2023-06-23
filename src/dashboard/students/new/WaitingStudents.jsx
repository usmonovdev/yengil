import { Box, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { H3 } from "../../../ui/typography";
import { useTranslation } from "react-i18next";
import arrow from "../../../assets/icons/arrow-right.png";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";

const StyledH3 = styled(H3)(({ theme }) => ({
  opacity: "60%",
}));

const WaitingStudents = ({ data }) => {
  const { t } = useTranslation();
  const [delModal2, setDelModal2] = useState(false);
  return (
    <>
      <Box
        aria-aria-label="box"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "380px",
          overflowY: "auto",
        }}
      >
        {data.length > 0 ? (
          <>
            {data.map((student) => {
              return (
                <Box
                  key={student.id}
                  sx={{
                    bgcolor: "custom.background",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <H3>{student.name}</H3>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        gap: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "25px",
                          height: "25px",
                          cursor: "pointer",
                          borderRadius: "50%",
                          bgcolor: "custom.newStudentWhite",
                          transform: {
                            xs: "rotate(-90deg)",
                            sm: "rotate(-90deg)",
                            md: "rotate(180deg)",
                          },
                        }}
                      >
                        <Tooltip
                          disableFocusListener
                          disableTouchListener
                          title={t("newStudentsRequestersTooltip")}
                          sx={{ position: "relative" }}
                          arrow
                        >
                          <img width="100%" src={arrow} />
                        </Tooltip>
                      </Box>
                      <Box
                        sx={{
                          width: "25px",
                          height: "25px",
                          cursor: "pointer",
                          borderRadius: "50%",
                          bgcolor: "blue.main",
                          transform: {
                            xs: "rotate(90deg)",
                            sm: "rotate(90deg)",
                            md: "rotate(0deg)",
                          },
                        }}
                      >
                        <Tooltip
                          disableFocusListener
                          disableTouchListener
                          title={t("newStudentsReadyTooltip")}
                          sx={{ position: "relative" }}
                          arrow
                        >
                          <img width="100%" src={arrow} />
                        </Tooltip>
                      </Box>
                      <Box
                        sx={{
                          width: "25px",
                          height: "25px",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "50%",
                        }}
                      >
                        <Tooltip
                          disableFocusListener
                          disableTouchListener
                          title={t("groupOpenDelete")}
                          sx={{ position: "relative" }}
                          arrow
                        >
                          <IconButton
                            size="small"
                            onClick={() => setDelModal2(!delModal2)}
                          >
                            <DeleteIcon sx={{ color: "red" }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "column",
                        lg: "row",
                      },
                      alignItems: { md: "flex-start", lg: "center" },
                      gap: { md: "0", lg: "10px" },
                    }}
                  >
                    <StyledH3>{student.tel}</StyledH3>
                    <Box
                      sx={{
                        width: "0.1rem",
                        bgcolor: "custom.lightGray",
                        height: "20px",
                        display: {
                          xs: "none",
                          sm: "none",
                          md: "none",
                          lg: "block",
                        },
                      }}
                    ></Box>
                    <StyledH3>{student.group}</StyledH3>
                    <Box
                      sx={{
                        width: "0.1rem",
                        bgcolor: "custom.lightGray",
                        height: "20px",
                        display: {
                          xs: "none",
                          sm: "none",
                          md: "none",
                          lg: "block",
                        },
                      }}
                    ></Box>
                    <StyledH3>{student.responseTime}</StyledH3>
                  </Box>
                </Box>
              );
            })}
          </>
        ) : (
          <>
            <Box
              sx={{
                bgcolor: "custom.background",
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <H3>{t("studentsNotFound")}</H3>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default WaitingStudents;
