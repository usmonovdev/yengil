import React, { useEffect, useState } from "react";
import { Img } from "../tablestudents/TableStyled";
import { H2, H3, Paragraph } from "../../../ui/typography";
import arrow from "../../../assets/icons/arrow-right.png";
import search from "../../../assets/icons/search.png";
import searchDark from "../../../assets/dark/darkSearch.png";
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
import { useDispatch } from "react-redux";
import { addWaitStudent } from "../../../store/themeSlice";

const StyledH3 = styled(H3)(({ theme }) => ({
  opacity: "60%",
}));

const NewStudents = () => {
  const [sorting, setSorting] = useState("name");
  const theme = useTheme();
  const { t } = useTranslation();
  const [students, setStudents] = useState(studentResponse);
  const [newStudents, setNewStudents] = useState([]);
  const [filtered, setFilter] = useState(studentResponse);
  const [waitingStudents, setWaitingStudents] = useState([]);
  const [readyStudents, setReadyStudents] = useState([]);
  const dispatch = useDispatch()

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
    }
  };

  useEffect(() => {
    setNewStudents(filtered.filter((e) => e.type == "new"));
    setWaitingStudents(filtered.filter((e) => e.type == "waiting"));
    setReadyStudents(filtered.filter((e) => e.type == "ready"));
  }, [filtered]);

  return (
    <>
    <AddStudents />
    
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <H2>{t("newStudents")}</H2>
      <Paragraph>{t("newStudentsAll")} - 10</Paragraph>
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
                    <Img
                      src={theme.palette.mode == "light" ? search : searchDark}
                    />
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
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="group">Group</MenuItem>
                <MenuItem value="tel">Telefon</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" color="blue" onClick={() => dispatch(addWaitStudent())}>
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
            <H3>{t("newStudentsRequesters")}</H3>
            <H3>
              {t("newStudentsAll")} - {newStudents.length}
            </H3>
          </Box>
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
            {newStudents.length > 0 ? (
              <>
                {newStudents.map((student) => {
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
                              bgcolor: "custom.bunting",
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
                              title={t("newStudentsWaitingTooltip")}
                              sx={{ position: "relative" }}
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
                            >
                              <img width="100%" src={arrow} />
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
            <H3>{t("newStudentsWaiting")}</H3>
            <H3>
              {t("newStudentsAll")} - {waitingStudents.length}
            </H3>
          </Box>
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
            {waitingStudents.length > 0 ? (
              <>
                {waitingStudents.map((student) => {
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
                            >
                              <img width="100%" src={arrow} />
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
            <H3>{t("newStudentsReady")}</H3>
            <H3>
              {t("newStudentsAll")} - {readyStudents.length}
            </H3>
          </Box>
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
            {readyStudents.length > 0 ? (
              <>
                {readyStudents.map((student) => {
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
                              bgcolor: "custom.bunting",
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
                              title={t("newStudentsWaitingTooltip")}
                              sx={{ position: "relative" }}
                            >
                              <img width="100%" src={arrow} />
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
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default NewStudents;
