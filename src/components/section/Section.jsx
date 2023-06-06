import React from "react";
import "./section.scss";
import sales from "../../assets/icons/sotish.png";
import Financial from "../../assets/icons/Financial.png";
import Analytics from "../../assets/icons/Analytics.png";
import { H3 } from "../../ui/typography";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";

const Section = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const { t } = useTranslation();
  return (
    <motion.div className="section-box" style={{ scale }}>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, type: "spring" }}
      >
        <img src={sales} />
        <H3>{t("section-selling")}</H3>
      </motion.div>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, type: "spring" }}
      >
        <img src={Financial} />
        <H3>{t("section-financial")}</H3>
      </motion.div>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, type: "spring" }}
      >
        <img src={Analytics} />
        <H3>{t("section-analytics")}</H3>
      </motion.div>
    </motion.div>
  );
};

export default Section;
