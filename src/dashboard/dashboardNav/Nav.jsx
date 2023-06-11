import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import doubleArrow from "../../assets/dark/double-arrow.png";
import home from "../../assets/dark/home.png";
import students from "../../assets/dark/students.png";
import groups from "../../assets/dark/groups.png";
import teacher from "../../assets/dark/teachers.png";
import money from "../../assets/dark/money.png";
import setting from "../../assets/dark/dashboard-settings.png";
import Fon from "../../assets/icons/icon.png";
import { H3 } from "../../ui/typography";
import { Box, FormControlLabel, Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { asyncToggleTheme } from "../../store/themeSlice";
import { Div, Img, Navbar } from "./NavStyled.js";
import styled from "@emotion/styled";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 70,
  height: 50,
  "& .MuiSwitch-switchBase": {
    margin: 0,
    padding: 0,
    transform: "translate(12px, 11px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translate(30px, 11px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z" /></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.blue.main,
    width: 28,
    height: 28,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z" /></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.white.main,
    borderRadius: 50 / 2,
  },
}));

const Nav = () => {
  const theme = useTheme();
  const [style, setStyle] = useState(true);
  const state = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();

  return (
    <Navbar
      style={{
        width: style ? "100px" : "200px",
        display: "flex",
        alignItems: style ? "center" : "start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "start !important",
        }}
      >
        <Div>
          <Img src={doubleArrow} onDoubleClick={() => setStyle(!style)} />
          {style ? (
            ""
          ) : (
            <H3
              onDoubleClick={() => setStyle(!style)}
              style={{ marginTop: "10px" }}
            >
              Close
            </H3>
          )}
        </Div>
        <Div>
          <Img src={home} style={{ width: "36px", height: "36px" }} />
          {style ? "" : <H3 style={{ marginTop: "15px" }}>HOME</H3>}
        </Div>
        <Div>
          <Img src={students} style={{ width: "36px", height: "36px" }} />
          {style ? "" : <H3 style={{ marginTop: "15px" }}>Students</H3>}
        </Div>
        <Div>
          <Img src={groups} style={{ width: "36px", height: "36px" }} />
          {style ? "" : <H3 style={{ marginTop: "15px" }}>Groups</H3>}
        </Div>
        <Div>
          <Img src={teacher} style={{ width: "36px", height: "36px" }} />
          {style ? "" : <H3 style={{ marginTop: "15px" }}>Teacher</H3>}
        </Div>
        <Div>
          <Img src={money} style={{ width: "36px", height: "36px" }} />
          {style ? "" : <H3 style={{ marginTop: "15px" }}>Payment</H3>}
        </Div>
        <Div>
          <Img src={setting} style={{ width: "36px", height: "36px" }} />
          {style ? "" : <H3 style={{ marginTop: "15px" }}>Setting</H3>}
        </Div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          checked={state}
          onClick={() => dispatch(asyncToggleTheme())}
          control={<MaterialUISwitch />}
        />
        <div>
          <Img
            src={Fon}
            style={{ width: "56px", height: "51px", marginBottom: "10px" }}
          />
        </div>
      </Box>
    </Navbar>
  );
};

export default Nav;
