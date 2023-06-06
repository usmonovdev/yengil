import React from "react";
import { motion } from "framer-motion";
import { Paragraph } from "../../ui/typography";
import { useTranslation } from "react-i18next";

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
        <motion.div
          className="change-lang"
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
      )}
    </>
  );
};

export default ChangeLang;
