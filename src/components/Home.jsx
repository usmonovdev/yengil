import React from "react";
import { H1, H2, H3, Paragraph } from "../ui/typography";
import { Box, Button } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        height: "400px",
      }}
    >
      <H1 className="text-center">Moliyaviy va boshqaruv hisobiga ega CRM</H1>
      <Box sx={{ width: "80%" }}>
        <H3 className="text-center">
          Yengil App biznes jarayonlarini avtomatlashtiradi, moliyaviy
          ahvolingizni tartibga soladi, savdoni yaxshilashga yordam beradi va
          real daromadingizni ko'rsatadi.
        </H3>
      </Box>
      <Button variant="contained" color="white" sx={{ color: "#fff", boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)" }}>
        Bepul sinab ko'rish
      </Button>
      <Paragraph>30 kun davomida bepul</Paragraph>
    </Box>
  );
};

export default Home;
