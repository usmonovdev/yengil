import React from "react";
import { Button, Container } from "@mui/material";
import { H1, H3, Paragraph } from "../../ui/typography";
import { motion } from "framer-motion";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            paddingBottom: "20px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <H1>Yengil-App bilan biznesingizning foydasiga e'tibor qarating</H1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1.5, y: 0 }}
            transition={{ duration: 1, type: "spring", delay: 0.2 }}
          >
            <H3>Hozirda savdo va samaradorlikni oshiring</H3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, type: "spring", delay: 0.4 }}
          >
            <Button
              variant="contained"
              color="white"
              sx={{
                color: "#fff",
                boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
                marginTop: "40px",
              }}
            >
              Bepul sinab ko'rish
            </Button>
          </motion.div>
          <Paragraph>30 kun davomida bepul</Paragraph>
        </Container>
      </footer>
      <footer className="footer2">
        <Container className="footercontainer">
          <Paragraph>Foydalanish shartlari</Paragraph>
          <Paragraph>Maxfiylik siyosati</Paragraph>
          <Paragraph>Sayt xaritasi</Paragraph>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
