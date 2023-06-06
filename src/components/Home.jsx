import React from "react";
import { H1, H3, Paragraph } from "../ui/typography";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import "./home.scss";
import { useTranslation } from "react-i18next";
import Section from "./section/Section";
import LocalRegister from "./localRegister/LocalRegister";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          height: "100vh",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <H1 className="text-center">{t("welcome-title")}</H1>
        </motion.div>
        <Box className="home-box">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
          >
            <H3 className="text-center">{t("title")}</H3>
          </motion.div>
        </Box>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
        >
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="white"
              sx={{
                color: "#fff",
                boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
              }}
            >
              {t("button")}
            </Button>
          </Link>
        </motion.div>
        <Paragraph>{t("button-title")}</Paragraph>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "140px" }}>
        <LocalRegister />
        <Section />
      </Box>
    </>
  );
};

export default Home;
