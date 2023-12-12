import { motion } from "framer-motion";
import { ImageComponent } from "../Utils/ImageComponent";

const About = () => {
  return (
    <div className="w-[90%] mx-auto">
      <section className="about section p-0" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My Introduction</span>
        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div
            initial={{ opacity: 0, x: 250 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring" }}
            className="w-full lg:w-[40%]"
          >
            <ImageComponent
              src={"https://i.ibb.co/jZztpQ5/Linkdin.jpg"}
              alt={"Akib Rahman"}
              classes={"rounded-md w-full"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring" }}
            className="w-full lg:w-[60%]"
          >
            <p className="about_description">
              Hello, I am MD. Akib Rahman, a fresh face in the realm of computer
              science and a budding MERN stack developer. My journey into the
              world of technology is marked by a fervent passion for coding and
              an insatiable curiosity about the intricate workings of software.
              <br />
              <br />
              As a Computer Science student, every day is an exciting
              exploration of algorithms, data structures, and the fundamental
              principles that underpin the digital landscape. The allure of the
              MERN stack—MongoDB, Express.js, React.js, and Node.js—has captured
              my interest, prompting me to dive deep into the intricacies of
              this powerful technology stack.
              <br />
              <br /> My academic pursuits are complemented by hands-on
              experiences, where I grapple with real-world challenges and
              contribute to projects that align with my burgeoning skills and
              interests. Coding isn&apos;t merely a skill to acquire; it&apos;s
              a mindset—a way of thinking that involves creative problem-solving
              and a tenacious spirit.
              <br /> <br />
              In the MERN stack, I see more than just a set of technologies; I
              see a dynamic toolkit that empowers me to create modern, robust
              web applications. MongoDB provides the database backbone,
              Express.js facilitates server-side development, React.js enables
              the creation of dynamic user interfaces, and Node.js powers
              server-side execution—a seamless synergy that resonates with my
              holistic approach to learning.
              <br />
              <br /> My journey extends beyond the lines of code. It&apos;s
              about adapting to the ever-evolving tech landscape, staying
              current with emerging trends, and embracing the challenges of
              tomorrow. Continuous learning is not just a goal; it&apos;s a
              commitment that fuels my aspirations to be a versatile and
              effective developer.
              <br /> <br />
              MD. Akib Rahman is more than a name; it&apos;s a representation of
              a relentless learner, an aspiring developer, and a future leader
              in the world of technology. As I navigate the complexities of MERN
              stack development, I stand poised at the intersection of education
              and real-world application, ready to carve my path in the vast and
              exciting realm of code. This is my journey—a journey of discovery,
              growth, and the boundless possibilities that lie ahead in the
              world of computer science.
            </p>
            <div className="about_info mt-20">
              <div>
                <spna className="about_info_title">06+</spna>
                <spna className="about_info_name">
                  Months <br />
                  experience
                </spna>
              </div>
              <div>
                <spna className="about_info_title">10+</spna>
                <spna className="about_info_name">
                  Completed <br />
                  project
                </spna>
              </div>
              <div>
                <spna className="about_info_title">--</spna>
                <spna className="about_info_name">
                  Companies <br />
                  worked
                </spna>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
