import React, { useEffect, useState } from "react";
import { Img } from "../tablestudents/TableStyled";
import { H2, H3, Paragraph } from "../../../ui/typography";
import arrow from "../../../assets/icons/arrow-right.png";
import filters from "../../../assets/icons/filter.png";
import filtersDark from "../../../assets/dark/fi-rr-filter.png";
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
  styled,
} from "@mui/material";
import { studentResponse } from "../../../localData/studentResponse";

const StyledH3 = styled(H3)(({ theme }) => ({
  opacity: "60%",
}));

const NewStudents = () => {
  const [students, setStudents] = useState(studentResponse);
  const [newStudents, setNewStudents] = useState([]);
  const [filtered, setFilter] = useState(studentResponse);
  const [waitingStudents, setWaitingStudents] = useState([]);
  const [readyStudents, setReadyStudents] = useState([]);

  const handleFilter = (event) => {
    setFilter(
      students.filter((f) => f.name.toLowerCase().includes(event.target.value))
    );
  };

  useEffect(() => {
    setNewStudents(filtered.filter((e) => e.type == "new"));
    setWaitingStudents(filtered.filter((e) => e.type == "waiting"));
    setReadyStudents(filtered.filter((e) => e.type == "ready"));
  }, [filtered]);

  const [sorting, setSorting] = useState("");
  const theme = useTheme();

  const handleChange = (event) => {
    setSorting(event.target.value);
    if (event.target.value.length > 0) {
      setNewStudents(
        newStudents.filter((f) =>
          f.group.toLowerCase().includes(event.target.value)
        )
      );
    } else {
      setNewStudents(filtered.filter((e) => e.type == "new"));
    }
    if (event.target.value.length > 0) {
      setWaitingStudents(
        waitingStudents.filter((f) =>
          f.group.toLowerCase().includes(event.target.value)
        )
      );
    } else {
      setWaitingStudents(filtered.filter((e) => e.type == "waiting"));
    }
    if (event.target.value.length > 0) {
      setReadyStudents(
        readyStudents.filter((f) =>
          f.group.toLowerCase().includes(event.target.value)
        )
      );
    } else {
      setReadyStudents(filtered.filter((e) => e.type == "ready"));
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <H2>Yangi O’quvchilar</H2>
      <Paragraph>Jami - 10</Paragraph>
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
              label="Qidirish"
              onChange={handleFilter}
              id="filled-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Img
                      src={
                        theme.palette.mode == "light" ? filters : filtersDark
                      }
                    />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <FormControl sx={{ width: { xs: "100%" } }} color="blue">
              <InputLabel id="demo-simple-select-label">Saralash</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Saralash"
                value={sorting}
                onChange={handleChange}
              >
                <MenuItem value="">Saralash</MenuItem>
                <MenuItem value="matematika">Matem</MenuItem>
                <MenuItem value="ona tili">Ona tili</MenuItem>
                <MenuItem value="kimyo">Kimyo</MenuItem>
                <MenuItem value="fizika">Fizika</MenuItem>
                <MenuItem value="ingliz tili">Ingliz tili</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" color="blue">
            Qo'shish
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
            <H3>So’rov yuborganlar</H3>
            <H3>Jami - {newStudents.length}</H3>
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
                            <img width="100%" src={arrow} />
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
                            <img width="100%" src={arrow} />
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
                    <H3>Bunday o'quvchi mavjud emas</H3>
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
            <H3>Kutilmoqda</H3>
            <H3>Jami - {waitingStudents.length}</H3>
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
                            <img width="100%" src={arrow} />
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
                            <img width="100%" src={arrow} />
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
                    <H3>Bunday o'quvchi mavjud emas</H3>
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
            <H3>Tayyor</H3>
            <H3>Jami - {readyStudents.length}</H3>
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
                            <img width="100%" src={arrow} />
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
                            <img width="100%" src={arrow} />
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
                    <H3>Bunday o'quvchi mavjud emas</H3>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewStudents;
