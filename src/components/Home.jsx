import React from "react";
import { H1, H3, Paragraph } from "../ui/typography";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import "./home.scss"
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        height: "600px",
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
          <H3 className="text-center">
            Yengil App biznes jarayonlarini avtomatlashtiradi, moliyaviy
            ahvolingizni tartibga soladi, savdoni yaxshilashga yordam beradi va
            real daromadingizni ko'rsatadi.
          </H3>
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
      >
        <Button
          variant="contained"
          color="white"
          sx={{
            color: "#fff",
            boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
          }}
        >
          Bepul sinab ko'rish
        </Button>
      </motion.div>
      <Paragraph>30 kun davomida bepul</Paragraph>
    </Box>
  );
};

export default Home;
