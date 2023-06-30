import Fon from "../../assets/icons/icon.png";
import styled from "@emotion/styled";
import { Box, Button, Switch, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/themeSlice";
import { motion } from "framer-motion";
import { dashboardData } from "../../localData/dashboardData";
import { NavLink } from "react-router-dom";
import { useState } from "react";

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
  const { sidebar } = useSelector((state) => state);
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
    zIndex: "1000",
    transition: "200ms",
    transform: `${sidebar ? "unset" : "translateX(-100%)"}`,
  }));

  const handleImg = (nav) => {
    setActive(nav);
    dispatch(toggleSidebar());
  };

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
              <NavLink
                to={nav.link}
                key={nav.id}
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                <LinksBox key={nav.id} onClick={() => handleImg(nav.id)}>
                  <Tooltip title={nav.name} arrow>
                    <Image src={nav.img} alt={nav.name} />
                  </Tooltip>
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
          <div>
            <img src={Fon} style={{ width: "40px", marginBottom: "10px" }} />
          </div>
        </Box>
      </NavbarBox>
    </motion.div>
  );
};

export default Nav;
