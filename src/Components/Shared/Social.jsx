import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.png";
import github from "../../assets/icons/github.png";
import gmail from "../../assets/icons/gmail.png";
import linkedin from "../../assets/icons/linkedin.png";

const Social = () => {
  return (
    <div className=" flex items-center gap-5">
      <Link to="https://www.linkedin.com/in/md-akib-rahman" target="_blank">
        <img
          className="w-9 h-9 hover:scale-110 ease-in-out duration-300 cursor-pointer"
          src={linkedin}
          alt="linkedin"
        />
      </Link>
      <Link to="https://github.com/akibrahman" target="_blank">
        <img
          className="w-9 h-9 hover:scale-110 ease-in-out duration-300 cursor-pointer"
          src={github}
          alt="github"
        />
      </Link>
      <Link to="mailto:akibrahman5200@gmail.com" target="_blank">
        <img
          className="w-9 h-7 hover:scale-110 ease-in-out duration-300 cursor-pointer"
          src={gmail}
          alt="gmail"
        />
      </Link>
      <Link to="https://www.facebook.com/akib.rahmann" target="_blank">
        <img
          className="w-9 h-9 hover:scale-110 ease-in-out duration-300 cursor-pointer"
          src={facebook}
          alt="facebook"
        />
      </Link>
    </div>
  );
};

export default Social;
