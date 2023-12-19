import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Skills = () => {
  return (
    <div className="w-[90%] mx-auto">
      <section className="skills section p-0" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My Technical Level</span>
        <div className="skills_container container grid w-[80%] gap-16">
          <div className="skills_content skills_open ">
            <div className="skills_header">
              <i className="uil uil-brackets-curly skills_icon"></i>
              <div className="">
                <h1 className="skills_title">Frontend Developer</h1>
                <span className="skills_subtitle">More than 1 year</span>
              </div>
              <i className="uil uil-angle-down skills_arrow"></i>
            </div>
            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">HTML</h3>
                  <span className="skills_number">
                    <NumberCounter end={90} delay={1} postFix="%" />
                  </span>
                </div>
                <div className="skills_bar">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ type: "spring" }}
                    className="skills_percentage skills_html"
                  ></motion.span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_number">
                    <NumberCounter end={87} delay={1} postFix="%" />
                  </span>
                </div>
                <div className="skills_bar">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "87%" }}
                    transition={{ type: "spring" }}
                    className="skills_percentage skills_css"
                  ></motion.span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">JavaScript</h3>
                  <span className="skills_number">
                    <NumberCounter end={60} delay={1} postFix="%" />
                  </span>
                </div>
                <div className="skills_bar">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ type: "spring" }}
                    className="skills_percentage skills_js"
                  ></motion.span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">React</h3>
                  <span className="skills_number">
                    <NumberCounter end={80} delay={1} postFix="%" />
                  </span>
                </div>
                <div className="skills_bar">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ type: "spring" }}
                    className="skills_percentage skills_react"
                  ></motion.span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Tailwind</h3>
                  <span className="skills_number">
                    <NumberCounter end={90} delay={1} postFix="%" />
                  </span>
                </div>
                <div className="skills_bar">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ type: "spring" }}
                    className="skills_percentage skills_tw"
                  ></motion.span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills_content skills_open">
            <div className="skills_header">
              <i className="uil uil-server-network skills_icon"></i>
              <div>
                <h1 className="skills_title">Backend Developer</h1>
                <span className="skills_subtitle">More than 5 months</span>
              </div>
              <i className="uil uil-angle-down skills_arrow"></i>
            </div>
            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Express JS</h3>
                  <span className="skills_number">
                    <NumberCounter end={40} delay={1} postFix="%" />
                  </span>
                </div>
                <div className="skills_bar">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "40%" }}
                    transition={{ type: "spring" }}
                    className="skills_percentage skills_express"
                  ></motion.span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Node JS</h3>
                  <span className="skills_number">
                    <NumberCounter end={30} delay={1} postFix="%" />
                  </span>
                </div>
                <div className="skills_bar">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "30%" }}
                    transition={{ type: "spring" }}
                    className="skills_percentage skills_node"
                  ></motion.span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">MongoDB</h3>
                  <span className="skills_number">
                    <NumberCounter end={65} delay={1} postFix="%" />
                  </span>
                </div>
                <div className="skills_bar">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ type: "spring" }}
                    className="skills_percentage skills_mongo"
                  ></motion.span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Firebase</h3>
                  <span className="skills_number">
                    <NumberCounter end={80} delay={1} postFix="%" />
                  </span>
                </div>
                <div className="skills_bar">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ type: "spring" }}
                    className="skills_percentage skills_firebase"
                  ></motion.span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">JWT</h3>
                  <span className="skills_number">
                    <NumberCounter end={90} delay={1} postFix="%" />
                  </span>
                </div>
                <div className="skills_bar">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ type: "spring" }}
                    className="skills_percentage skills_jwt"
                  ></motion.span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qualification section p-0">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My Personal Journey</span>

        <div className="qualification_container container">
          <div className="qualification_tabs">
            <div
              className="qualification_button button_flex qualification_active"
              data-target="#education"
            >
              <i className="uil uil-graduation-cap qualification_icon"></i>
              Education
            </div>
            {/* <div
              className="qualification_button button_flex"
              data-target="#work"
            >
              <i className="uil uil-briefcase-alt qualification_icon"></i> Work
            </div> */}
          </div>
          <div className="qualification_sections">
            <div
              className="qualification_content qualification_active"
              data-content
              id="education"
            >
              <div className="qualification_data">
                <div className="">
                  <h3 className="qualification_title">
                    Computer Science and Engineering
                  </h3>
                  <span className="qualification_subtitle">IUBAT</span>
                </div>
                <div className="">
                  <div className="qualification_rounder"></div>
                  <div className="qualification_line"></div>
                </div>
              </div>
              <div className="qualification_data">
                <div className=""></div>
                <div className="">
                  <div className="qualification_rounder"></div>
                  <div className="qualification_line"></div>
                </div>
                <div className="">
                  <h3 className="qualification_title">Web Design</h3>
                  <span className="qualification_subtitle">
                    Programming Hero
                  </span>
                  {/* <span className="qualification_subtitle">In Progress</span> */}
                </div>
              </div>
              <div className="qualification_data">
                <div className="">
                  <h3 className="qualification_title">Web Development</h3>
                  <span className="qualification_subtitle">
                    Programming Hero
                  </span>
                  {/* <span className="qualification_subtitle">In Progress</span> */}
                </div>
                <div className="">
                  <div className="qualification_rounder"></div>
                  <div className="qualification_line"></div>
                </div>
              </div>
            </div>

            <div className="qualification_content" data-content id="work">
              <p className="">No Work Experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
