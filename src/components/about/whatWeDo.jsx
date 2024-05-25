import React from "react";
import FeatureCard from "./card";

const WhatWeDo = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center my-24 ">
      <h1 className="h1">
        WHAT WE <span className="font-semibold">DO</span>
      </h1>
      <div className="w-full flex justify-center ">
        <div className="flex md:w-1/2 flex-col pt-24 ">
          <h4 className="text-blue-950 text-4xl">
            We are the first to address Delhi Slum Area
          </h4>
          <p>
            FHE is not only a charity organization but also an organization with
            the love of humanity
          </p>
        </div>
        <div className="pt-16 md:w-1/2 flex flex-wrap">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
