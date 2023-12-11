import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import "../Css/structure.css";
import { ImageComponent } from "../Utils/ImageComponent";
import expressLogo from "../assets/icons/express.png";
import reactLogo from "../assets/icons/react.png";
import resume from "../assets/pdf/resume.pdf";
import Social from "./Shared/Social";
//!

const Banner = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = resume;
    downloadLink.download = "resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  //!

  return (
    <div className="w-[90%] mx-auto relative ">
      <img
        src={reactLogo}
        className=" absolute top-0 -left-20 -z-10 w-72 animate-spin-slow opacity-50"
        alt=""
      />
      <img
        src={expressLogo}
        className="absolute bottom-0 -right-16 -z-10 w-60 animate-pulse"
        alt=""
      />
      <section className="home section p-0" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
            <div className="home_social">
              {/* <a href="https://facebook.com/akib.rahmann" target="_akib">
                <i className="uil uil-facebook-f"></i>
              </a> */}
            </div>

            <div className="home_img">
              {/* <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                src="https://i.ibb.co/jZztpQ5/Linkdin.jpg"
                className="rounded-full w-[450px] h-[450px]"
                alt=""
              /> */}
              <ImageComponent
                src={"https://i.ibb.co/jZztpQ5/Linkdin.jpg"}
                alt={"Akib Rahman"}
                classes="rounded-full w-[450px] h-[450px]"
              />
            </div>
            <div className="home_data">
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring" }}
                className="home_title"
              >
                Hi, I am Akib
              </motion.h1>
              <h3 className="home_subtitle">
                <span className="home_auto_type"></span>
              </h3>
              <motion.p
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring" }}
                className="home_description"
              >
                With expertise in HTML, CSS, JavaScript, and responsive design,
                I offer a comprehensive range of web design capabilities. I have
                a meticulous eye for detail, ensuring pixel-perfect designs and
                flawless execution.
              </motion.p>
              <div className="w-max">
                <motion.div
                  initial={{ opacity: 0, x: 250 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring" }}
                  className="flex gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.6 }}
                    onClick={handleDownload}
                    className="button home_button button_flex flex gap-3 select-none cursor-pointer"
                  >
                    Resume
                    <FaDownload className="icon transition duration-500" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.6 }}
                    className="button home_button button_flex flex gap-3 select-none cursor-pointer"
                  >
                    Hire Me
                    <FaTelegramPlane className="icon transition duration-500" />
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -250 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring" }}
                  className="mt-8 flex justify-center"
                >
                  <Social />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
