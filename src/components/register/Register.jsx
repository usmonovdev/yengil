import React, { useState } from "react";
import InputComp from "../../ui/InputComp";
import "./register.scss";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { H1 } from "../../ui/typography";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
    >
      <div className="register-box">
        <H1 className="register-heading">Register</H1>
        <Box
          sx={{
            width: "70%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <InputComp
            placeholder={"Abror Abdukayumov"}
            value={name}
            setValue={setName}
            label={"Name"}
          />
          <InputComp
            placeholder="+998 78 777 11 00"
            value={phone}
            setValue={setPhone}
            label={"Phone"}
            required={true}
          />
          <Button
            variant="contained"
            color="blue"
            sx={{
              color: "#fff",
              width: "100%",
              boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
            }}
          >
            Register
          </Button>
        </Box>
      </div>
    </motion.div>
  );
};

export default Register;
