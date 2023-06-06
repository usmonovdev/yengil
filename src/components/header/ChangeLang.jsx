import React from "react";
import { motion } from "framer-motion";
import { Paragraph } from "../../ui/typography";
import { useTranslation } from "react-i18next";

const ChangeLang = ({ open }) => {
  const { i18n } = useTranslation()
  const languages = [
    {
      language: "uz",
      title: "Uzbek",
      id: 1
    },
    {
      language: "en",
      title: "English",
      id: 2
    },
    {
      language: "ru",
      title: "Russian",
      id: 3
    }
  ]
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
              <Paragraph key={lng.id} onClick={() => i18n.changeLanguage(lng.language)}>{lng.title}</Paragraph>
            )
          })}
        </motion.div>
      )}
    </>
  );
};

export default ChangeLang;
