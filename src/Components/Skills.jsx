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
                <span className="skills_subtitle">More than 2 years</span>
              </div>
              <i className="uil uil-angle-down skills_arrow"></i>
            </div>
            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">HTML</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_html"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_number">87%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_css"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">JavaScript</h3>
                  <span className="skills_number">60%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_js"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">React</h3>
                  <span className="skills_number">80%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_react"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Tailwind</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_tw"></span>
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
                  <span className="skills_number">40%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_express"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Node JS</h3>
                  <span className="skills_number">30%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_node"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">MongoDB</h3>
                  <span className="skills_number">65%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_mongo"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Firebase</h3>
                  <span className="skills_number">80%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_firebase"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">JWT</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_jwt"></span>
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
