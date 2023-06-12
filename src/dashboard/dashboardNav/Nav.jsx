import Fon from "../../assets/icons/icon.png";
import styled from "@emotion/styled";
import { Box, Button, FormControlLabel, Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { asyncToggleTheme } from "../../store/themeSlice";
import { motion } from "framer-motion";
import { dashboardData } from "../../localData/dashboardData";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./nav.scss";

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

const LinksBox = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "70px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "200ms",
  borderRadius: "0",
}));

const Image = styled("img")(({ theme }) => ({
  width: "28px",
}));

const Nav = () => {
  const [active, setActive] = useState(1);
  const { isDarkMode, sidebar } = useSelector((state) => state);
  console.log(sidebar);
  const dispatch = useDispatch();

  const NavbarBox = styled("div")(({ theme }) => ({
    position: "fixed",
    width: "80px",
    height: "100vh",
    background: theme.palette.blue.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: "2000",
    transition: "200ms",
    transform: `${sidebar ? "unset" : "translateX(-100%)"}`
  }));

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
    >
      <NavbarBox>
        <Box
          sx={{
            width: "100%",
          }}
        >
          {dashboardData.map((nav) => {
            return (
              <NavLink to={nav.link} key={nav.id}>
                <LinksBox
                  className={`nav-item ${nav.id == active ? "active" : ""}`}
                  key={nav.id}
                  onClick={() => setActive(nav.id)}
                >
                  <Image src={nav.img} alt={nav.name} />
                </LinksBox>
              </NavLink>
            );
          })}
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
            checked={isDarkMode}
            onClick={() => dispatch(asyncToggleTheme())}
            control={<MaterialUISwitch />}
            sx={{ margin: "0" }}
          />
          <div>
            <img src={Fon} style={{ width: "40px", marginBottom: "10px" }} />
          </div>
        </Box>
      </NavbarBox>
    </motion.div>
  );
};

export default Nav;
