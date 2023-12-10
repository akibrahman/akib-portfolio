import { FaTelegramPlane } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../Css/structure.css";
import Social from "./Shared/Social";

const Banner = () => {
  return (
    <div className="w-[90%] mx-auto">
      <section className="home section p-0" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
            <div className="home_social">
              {/* <a href="https://facebook.com/akib.rahmann" target="_akib">
                <i className="uil uil-facebook-f"></i>
              </a> */}
            </div>

            <div className="home_img">
              <img
                src="https://i.ibb.co/jZztpQ5/Linkdin.jpg"
                className="rounded-full w-[450px] h-[450px]"
                alt=""
              />
            </div>
            <div className="home_data">
              <h1 className="home_title">Hi, I am Akib</h1>
              <h3 className="home_subtitle">
                <span className="home_auto_type"></span>
              </h3>
              <p className="home_description">
                With expertise in HTML, CSS, JavaScript, and responsive design,
                I offer a comprehensive range of web design capabilities. I have
                a meticulous eye for detail, ensuring pixel-perfect designs and
                flawless execution.
              </p>
              <div className="w-max">
                <div className="flex gap-4">
                  <Link className="button home_button button_flex active:scale-75 flex gap-3 transition-all">
                    Resume{" "}
                    <FaDownload className="icon transition duration-500" />
                  </Link>
                  <Link className="button home_button button_flex active:scale-75 flex gap-3 transition-all">
                    Hire Me
                    <FaTelegramPlane className="icon transition duration-500" />
                  </Link>
                </div>
                <div className="mt-8 flex justify-center">
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
