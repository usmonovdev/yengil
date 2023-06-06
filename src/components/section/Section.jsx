import React from "react";
import "./section.scss";
import sales from "../../assets/icons/salesicon.png";
import Financial from "../../assets/icons/Financial.png";
import Analytics from '../../assets/icons/Analytics.png'
import { H1, H3, H2, Paragraph } from "../../ui/typography";

const Section = () => {
  return (
    <div className="section-box">
      <div className="box">
        <img src={sales} />
        <H3>Sotish boshqaruvi</H3>
      </div>
      <div className="box">
        <img src={Financial} />
        <H3>Moliyaviy hisob</H3>
      </div>
      <div className="box">
        <img src={Analytics}/>
        <H3>Analitika</H3>
      </div>
    </div>
  );
};

export default Section;
