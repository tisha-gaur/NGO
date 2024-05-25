import React from "react";

const WhoAreWe = () => {
  return (
    <div className="flex items-center gap-8 justify-evenly px-12 min-h-96">
      <div className="md:w-3/5 md:h-96 pt-16 flex flex-col gap-4">
        <h1 className="h1">
          WHO ARE <span className="font-semibold">WE</span>
        </h1>
        <p className="text-xl text-pretty">
          Family Health and Education (FHE) is a Public Charitable Trust
          established in 2003, working tirelessly to improve the lives of women
          and children in Delhi's slums. We focus on medical care, education,
          and healthcare programs, with a special emphasis on empowering girls.
          Located in Hauz Khas, South Delhi, we run a medical clinic (FHC) and
          an afternoon school (Muskaan) to directly serve the community.
        </p>
      </div>
      <div className=" grid grid-cols-2 gap-4">
        <img className="squareImg" src="./image1.jpg" alt="image1" />
        <img className="squareImg  " src="./image2.jpg" alt="image2" />
        <img className="squareImg " src="image3.jpg" alt="image3" />
        <img className="squareImg " src="image4.jpg" alt="image4" />
      </div>
    </div>
  );
};

export default WhoAreWe;
