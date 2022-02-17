import { AboutInfoItems, AboutInfoTitle, AboutInfoWrapper } from "./styles";

import React from "react";
import { SiteContainer } from "../../../atoms/SiteContainer";
import { problemData } from "../../../data/problem";

const AboutInfo = () => {
  return (
    <AboutInfoWrapper>
      <SiteContainer>
        <AboutInfoTitle>
          The Problem <br />
          Collecting {"&"} trading fine jewlery was hard. Until now.
        </AboutInfoTitle>
        <AboutInfoItems>
          {problemData.map((item) => (
            <div className="single_problem" key={item.id}>
              <h3>{item.title}</h3>
              <div className="icon_text">
                <div className="problem_icon">{item.icon}</div>
                <p className="problem_txt">{item.paragraph}</p>
              </div>
            </div>
          ))}
        </AboutInfoItems>
      </SiteContainer>
    </AboutInfoWrapper>
  );
};

export default AboutInfo;
