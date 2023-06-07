import React, { useRef } from "react";
import "./section.scss";
import sales from "../../assets/icons/sotish.png";
import Financial from "../../assets/icons/Financial.png";
import Analytics from "../../assets/icons/Analytics.png";
import { H3 } from "../../ui/typography";
import { useTranslation } from "react-i18next";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Section = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const { t } = useTranslation();
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      <motion.div className="section-box">
        <motion.div
          className="box"
        >
          <img src={sales} />
          <H3>{t("section-selling")}</H3>
        </motion.div>
        <motion.div
          className="box"
        >
          <img src={Financial} />
          <H3>{t("section-financial")}</H3>
        </motion.div>
        <motion.div
          className="box"
        >
          <img src={Analytics} />
          <H3>{t("section-analytics")}</H3>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section;
