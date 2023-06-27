import React from "react";
import { motion } from "framer-motion";
import { Paragraph } from "../../ui/typography";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";

const StyedDiv = styled("div")(({ theme }) => ({
  background: theme.palette.custom.background,
  position: "absolute",
  top: "65px",
  left: "-10px",
  width: "90px",
  height: "90px",
  boxShadow: "0px 15px 50px 0px rgba(0, 12, 33, 0.2)",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  zIndex: 100000,
  cursor: "pointer",
  "&::before": {
    content: `''`,
    position: "absolute",
    top: "-5px",
    width: "10px",
    height: "10px",
    backgroundColor: theme.palette.custom.background,
    transform: "rotate(45deg)",
    zIndex: 1,
  }
}))

const ChangeLang = ({ open, setOpen }) => {
  const { i18n } = useTranslation();
  const languages = [
    {
      language: "uz",
      title: "Uzbek",
      id: 1,
    },
    {
      language: "en",
      title: "English",
      id: 2,
    },
    {
      language: "ru",
      title: "Russian",
      id: 3,
    },
  ];

  const handleChangeLng = (e) => {
    i18n.changeLanguage(e)
    setOpen(false)
  }



  return (
    <>
      {open && (
        <StyedDiv >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
            {languages.map((lng) => {
              return (
                <Paragraph
                  key={lng.id}
                  onClick={() => handleChangeLng(lng.language)}
                >
                  {i18n.language == lng.language ? (
                    <b>{lng.title}</b>
                  ) : (
                    <p>{lng.title}</p>
                  )}
                </Paragraph>
              );
            })}
        </motion.div>
          </StyedDiv>
      )}
    </>
  );
};

export default ChangeLang;
