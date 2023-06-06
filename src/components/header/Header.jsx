import React, { useState } from "react";
import language from "../../assets/icons/language.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import telegram_icon from "../../assets/icons/telegram.png";
import { styled } from "@mui/material/styles";
import { Box, Button, Container } from "@mui/material";
import { Paragraph, StyledAncor } from "../../ui/typography";
import { motion } from "framer-motion";
import "./header.scss";
import ChangeLang from "./ChangeLang";
import { useTranslation } from "react-i18next";

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
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#00a3ff",
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
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 50 / 2,
  },
}));

const Header = () => {
  const [langOpen, setLangOpen] = useState(false);
  const { t } = useTranslation()
  return (
    <div className="header-box">
      <Container>
        <div className="header">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <StyledAncor href="https://t.me/+50UxzsayyoxjY2Ey">
              <Button
                variant="text"
                disableElevation
                sx={{ display: "flex", gap: "10px" }}
              >
                <img
                  src={telegram_icon}
                  width="30px"
                  className="join-telegram"
                />
                <Paragraph>{t("join-telegram")}</Paragraph>
              </Button>
            </StyledAncor>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
              />
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Button onClick={() => setLangOpen(!langOpen)}>
                  <img
                    src={language}
                    alt=""
                    width="30px"
                    style={{ opacity: "40%" }}
                  />
                </Button>
                <ChangeLang open={langOpen} setOpen={setLangOpen} />
              </Box>
            </FormGroup>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
