import { FaTelegramPlane } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../Css/structure.css";
import resume from "../assets/pdf/resume.pdf";
import Social from "./Shared/Social";

const Banner = () => {
  const handleDownload = () => {
    // Construct the URL for the resume file
    // const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';

    // Create a link element
    const downloadLink = document.createElement("a");

    // Set the href attribute to the resume URL
    downloadLink.href = resume;

    // Set the download attribute with the desired file name
    downloadLink.download = "resume.pdf";

    // Append the link to the document body
    document.body.appendChild(downloadLink);

    // Trigger the click event on the link to start the download
    downloadLink.click();

    // Remove the link from the document body after the download is initiated
    document.body.removeChild(downloadLink);
  };
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
                  <Link
                    onClick={handleDownload}
                    className="button home_button button_flex active:scale-75 flex gap-3 transition duration-300"
                  >
                    Resume
                    <FaDownload className="icon transition duration-500" />
                  </Link>
                  <Link className="button home_button button_flex active:scale-75 flex gap-3 transition duration-300">
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
