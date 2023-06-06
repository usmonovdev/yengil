import React from "react";
import "./section.scss";
import sales from "../../assets/icons/sotish.png";
import Financial from "../../assets/icons/Financial.png";
import Analytics from "../../assets/icons/Analytics.png";
import { H1, H3, H2, Paragraph } from "../../ui/typography";
import { useTranslation } from "react-i18next";

const Section = () => {
  const { t } = useTranslation();
  return (
    <div className="section-box">
      <div className="box">
        <img src={sales} />
        <H3>{t("section-selling")}</H3>
      </div>
      <div className="box">
        <img src={Financial} />
        <H3>{t("section-financial")}</H3>
      </div>
      <div className="box">
        <img src={Analytics} />
        <H3>{t("section-analytics")}</H3>
      </div>
    </div>
  );
};

export default Section;
