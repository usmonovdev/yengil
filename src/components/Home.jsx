import React from "react";
import { H1, H3, Paragraph } from "../ui/typography";
import { Box, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Comment from "./comment/Comment";
import LocalRegister from "./localRegister/LocalRegister";
import Advertising from "./adv/Advertising";
import Footer from "./footer/Footer";
import { useDispatch } from "react-redux";
import { setToken } from "../store/themeSlice";
import "./home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
            height: "100vh",
            marginBottom: "10px",
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
            <Button
              variant="contained"
              color="blue"
              sx={{
                color: "#fff",
                boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
              }}
              onClick={() => navigate("/register")}
            >
              {t("button")}
            </Button>
          </motion.div>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "140px" }}>
          <LocalRegister />
          <Comment />
          <Advertising />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
