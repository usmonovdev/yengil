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
  opacity: "60%"
}))

const NewStudents = () => {
  const [students, setStudents] = useState(studentResponse);
  const [newStudents, setNewStudents] = useState([]);
  const [waitingStudents, setWaitingStudents] = useState([]);
  const [readyStudents, setReadyStudents] = useState([]);
  console.log(newStudents, "new");
  console.log(waitingStudents, "waiting");
  console.log(readyStudents, "ready");

  useEffect(() => {
    setNewStudents(students.filter((e) => e.type == "new"));
    setWaitingStudents(students.filter((e) => e.type == "waiting"));
    setReadyStudents(students.filter((e) => e.type == "ready"));
  }, [students]);

  const [sorting, setSorting] = useState("");
  const theme = useTheme();

  const handleChange = (event) => {
    setSorting(event.target.value);
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
                <MenuItem value={10}>Matem</MenuItem>
                <MenuItem value={20}>Ona tili</MenuItem>
                <MenuItem value={30}>Kimyo</MenuItem>
                <MenuItem value={40}>Fizika</MenuItem>
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
          flexDirection: { xs: "column" ,sm: "column", md: "row" },
          justifyContent: "space-between",
          gap: "20px"
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
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <H3>So’rov yuborganlar</H3>
            <H3>Jami - {newStudents.length}</H3>
          </Box>
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
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <H3>{student.name}</H3>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      gap: "10px"
                    }}
                  >
                    <Box
                      sx={{
                        width: "25px",
                        height: "25px",
                        cursor: "pointer",
                        borderRadius: "50%",
                        bgcolor: "custom.bunting",
                        transform: { xs: "rotate(90deg)", sm: "rotate(90deg)", md: "rotate(0deg)" }
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
                        transform: { xs: "rotate(90deg)", sm: "rotate(90deg)", md: "rotate(0deg)" }
                      }}
                    >
                      <img width="100%" src={arrow} />
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
                    alignItems: { md: "flex-start", lg: "center" },
                    gap: { md: "0", lg: "10px" },
                  }}
                >
                  <StyledH3>{student.tel}</StyledH3>
                  <Box sx={{ width: "0.1rem", bgcolor: "custom.lightGray", height: "20px", display: { xs: "none", sm: "none", md: "none", lg: "block" } }}></Box>
                  <StyledH3>{student.group}</StyledH3>
                  <Box sx={{ width: "0.1rem", bgcolor: "custom.lightGray", height: "20px", display: { xs: "none", sm: "none", md: "none", lg: "block" } }}></Box>
                  <StyledH3>{student.responseTime}</StyledH3>
                </Box>
              </Box>
            );
          })}
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
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <H3>Kutilmoqda</H3>
            <H3>Jami - {waitingStudents.length}</H3>
          </Box>
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
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <H3>{student.name}</H3>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      gap: "10px"
                    }}
                  >
                    <Box
                      sx={{
                        width: "25px",
                        height: "25px",
                        cursor: "pointer",
                        borderRadius: "50%",
                        bgcolor: "custom.bunting",
                        transform: { xs: "rotate(-90deg)", sm: "rotate(-90deg)", md: "rotate(180deg)" }
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
                        transform: { xs: "rotate(90deg)", sm: "rotate(90deg)", md: "rotate(0deg)" }
                      }}
                    >
                      <img width="100%" src={arrow} />
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
                    alignItems: { md: "flex-start", lg: "center" },
                    gap: { md: "0", lg: "10px" },
                  }}
                >
                  <StyledH3>{student.tel}</StyledH3>
                  <Box sx={{ width: "0.1rem", bgcolor: "custom.lightGray", height: "20px", display: { xs: "none", sm: "none", md: "none", lg: "block" } }}></Box>
                  <StyledH3>{student.group}</StyledH3>
                  <Box sx={{ width: "0.1rem", bgcolor: "custom.lightGray", height: "20px", display: { xs: "none", sm: "none", md: "none", lg: "block" } }}></Box>
                  <StyledH3>{student.responseTime}</StyledH3>
                </Box>
              </Box>
            );
          })}
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
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <H3>Tayyor</H3>
            <H3>Jami - {readyStudents.length}</H3>
          </Box>
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
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <H3>{student.name}</H3>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      gap: "10px"
                    }}
                  >
                    <Box
                      sx={{
                        width: "25px",
                        height: "25px",
                        cursor: "pointer",
                        borderRadius: "50%",
                        bgcolor: "custom.bunting",
                        transform: { xs: "rotate(-90deg)", sm: "rotate(-90deg)", md: "rotate(180deg)" }
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
                        transform: { xs: "rotate(-90deg)", sm: "rotate(-90deg)", md: "rotate(180deg)" }
                      }}
                    >
                      <img width="100%" src={arrow} />
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
                    alignItems: { md: "flex-start", lg: "center" },
                    gap: { md: "0", lg: "10px" },
                  }}
                >
                  <StyledH3>{student.tel}</StyledH3>
                  <Box sx={{ width: "0.1rem", bgcolor: "custom.lightGray", height: "20px", display: { xs: "none", sm: "none", md: "none", lg: "block" } }}></Box>
                  <StyledH3>{student.group}</StyledH3>
                  <Box sx={{ width: "0.1rem", bgcolor: "custom.lightGray", height: "20px", display: { xs: "none", sm: "none", md: "none", lg: "block" } }}></Box>
                  <StyledH3>{student.responseTime}</StyledH3>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default NewStudents;
