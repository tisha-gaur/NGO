import React from "react";
import FeatureCard from "./card";
// import bgImage from "../../assets/bg1.jpg"

const WhatWeDo = () => {
  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center border-b">
      <h1 className="h1">
        WHAT WE <span className="font-semibold">DO</span>
      </h1>
      <div className="w-full flex justify-center ">
        <div className="pl-12 flex md:w-1/3 flex-col pt-24 ">
          <h4 className="h1">
            Our <span className="font-semibold">Vision</span>
          </h4>
          <p className="p">
            If you educate a man you educate a person but if you educate a woman
            you educate a family
          </p>
        </div>
        <div className="pt-8 md:w-1/2 min-h-96  flex flex-wrap justify-center items-center ">
          <FeatureCard
            title={"Healthcare"}
            para={
              "Provide essential medical care, vaccinations, and health education"
            }
          />
          <FeatureCard
            title={"Education"}
            para={
              "Provide essential medical care, vaccinations, and health education"
            }
          />
          <FeatureCard
            title={"Poverty Reduction"}
            para={
              "Provide essential medical care, vaccinations, and health education"
            }
          />
          <FeatureCard
            title={"Clean Living"}
            para={
              "Provide essential medical care, vaccinations, and health education"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
