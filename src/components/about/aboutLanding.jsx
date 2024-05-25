import React from "react";

const AboutLanding = () => {
  return (
    <div className="pt-24 min-h-screen flex justify-between items-center bg-orange-100">
      <div className="md:w-1/2 px-12">
        <h1 className=" text-blue-950 text-6xl ">
          <span className=" text-yellow-950">EMPOWER</span> <br />
          THROUGH EDUCATION <br />
          AT{" "}
          <span className=" font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-950  to-yellow-950">
            FHE INDIA
          </span>
        </h1>
        <p className="pt-8 p">
          We envision a future where women and children in Delhi's slums are
          educated, empowered, and elevated through access to quality healthcare
          and education. This will create a ripple effect, uplifting entire
          families and communities.
        </p>
      </div>

      <img
        className="md:w-1/2 px-12"
        src="./src/assets/homeChildren.jpg"
        width={400}
        alt=""
      />
    </div>
  );
};

export default AboutLanding;
