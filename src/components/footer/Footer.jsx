import React from "react";
import "./footer.scss";
import logo from "../../assets/icons/icon-72x72.png";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ul>
          <li>
            <img src={logo} />
          </li>
        </ul>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
