import { FaSpinner } from "react-icons/fa6";

export const PlaceholderImage = ({ classes }) => {
  return (
    <div
      className={`drop-shadow-2xl flex items-center justify-center border border-primary ${classes}`}
    >
      <FaSpinner className="text-3xl animate-spin text-primary" />
    </div>
  );
};
