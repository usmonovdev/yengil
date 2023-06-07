import { Box, Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import InputComp from "../../ui/InputComp";
import { H1, Paragraph } from "../../ui/typography";
import "./localregister.scss";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

const LocalRegister = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("is in view", isInView);
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      <H1 className="text-center" style={{ marginBottom: "20px" }}>
        Register for using
      </H1>
      <form className="form-local">
        <InputComp
          placeholder="Usmonov Azizbek"
          value={name}
          setValue={setName}
          label={"Name"}
          required={true}
        />
        <InputComp
          placeholder="+998 78 777 11 00"
          value={phone}
          setValue={setPhone}
          label={"Phone"}
          required={true}
          type={"number"}
        />
        <Button
          variant="contained"
          color="white"
          sx={{
            color: "#fff",
            width: "100%",
            boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
          }}
        >
          Register
        </Button>
      </form>
      <Paragraph className="text-center" style={{ marginTop: "20px" }}>Akauntingiz bormi? <Link to={"/login"} style={{ textDecoration: "none" }}>Kirish</Link></Paragraph>
    </div>
  );
};

export default LocalRegister;
