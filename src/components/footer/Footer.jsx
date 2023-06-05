import React from "react";
import "./footer.scss";
import { Button, Container } from "@mui/material";
import { H1, H3, Paragraph } from "../../ui/typography";

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
            paddingBottom: '20px'
          }}
        >
          <H1>
            Focus on profit of your business with Brizo
          </H1>
          <H3>
            Give your sales and performance a boost right now
          </H3>
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
          <Paragraph>30 kun davomida bepul</Paragraph>
        </Container>
      </footer>
      <footer className="footer2">
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: '30px'
          }}
        >
          <H3>Foydalanish shartlari</H3>
          <H3>Maxfiylik siyosati</H3>
          <H3>Sayt xaritasi</H3>
        </Container>
      </footer>
    </>
  );
};

export default Footer;