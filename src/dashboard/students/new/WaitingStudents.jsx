import { Box } from "@mui/material";
import React, { useState } from "react";
import { H3 } from "../../../ui/typography";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import DeleteMo from "../../../ui/DeleteMo";
import Waiting from "./actions/Waiting";

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
                      <Waiting />
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
      <DeleteMo
        modal={delModal2}
        setModal={setDelModal2}
        text={t("deleteTitlePending")}
      />
    </>
  );
};

export default WaitingStudents;
