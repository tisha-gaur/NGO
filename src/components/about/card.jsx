import { FaClinicMedical } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";
import { SiCcleaner } from "react-icons/si";

const FeatureCard = ({ title, para }) => {
  return (
    <div className="md:basis-1/3 md:w-40 my-12 mx-8 ">
      <div className="bg-orange-100 p-2 rounded-full w-fit">
        {title === "Healthcare" && (
          <FaClinicMedical className="text-3xl text-yellow-950 " />
        )}
        {title === "Education" && (
          <IoSchool className="text-3xl text-yellow-950 " />
        )}
        {title === "Poverty Reduction" && (
          <FaHandHoldingUsd className="text-3xl text-yellow-950 " />
        )}
        {title === "Clean Living" && (
          <SiCcleaner className="text-3xl text-yellow-950 " />
        )}
      </div>
      <h4 className="pb-4 pt-2 text-2xl">{title}</h4>
      <p className=" text-base text-pretty">
        Provide essential medical care, vaccinations, and health education
      </p>
    </div>
  );
};

export default FeatureCard;
