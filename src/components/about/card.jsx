import { FaClinicMedical } from "react-icons/fa";

const FeatureCard = () => {
  return (
    <div className="md:basis-1/3 md:w-40 my-4 mx-6 m border">
      <FaClinicMedical />
      <h4>Healthcare</h4>
      <p>Provide essential medical care, vaccinations, and health education</p>
    </div>
  );
};

export default FeatureCard;
