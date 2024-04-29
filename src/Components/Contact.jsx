import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "react-toastify";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Social from "./Shared/Social";

const Contact = () => {
  const axiosInstance = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const handleContact = async (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    try {
      const emailData = {
        senderName: form.name.value,
        senderEmail: form.email.value,
        senderMessage: form.message.value,
        senderProject: form.project.value,
      };
      const { data } = await axiosInstance.post("/send-email", emailData);
      console.log("Emqail Res: ", data);
      toast.success("E-mail Sent Successfully");
    } catch (error) {
      console.log("Email Error: ", error);
      toast.error("Something Went Wrong");
    } finally {
      form.reset();
      setLoading(false);
    }
  };

  return (
    <div className="w-[90%] mx-auto mt-2">
      <section className="contact section p-0" id="contact">
        <h2 className="section_title">Contact Me</h2>
        <span className="section_subtitle">Get in touch</span>
        <div className="contact_container container grid">
          <div className="">
            <div className="contact_info">
              <i className="uil uil-phone contact_icon"></i>
              <div className="">
                <h3 className="contact_title">Call Me</h3>
                <span className="contact_subtitle">
                  <a href="tel:+8801709605097">+88 01709-605097</a>
                </span>
              </div>
            </div>
            <div className="contact_info">
              <i className="uil uil-envelope contact_icon"></i>
              <div className="">
                <h3 className="contact_title">Email</h3>
                <span className="contact_subtitle">
                  <a href="mailto:akibrahman5200@gmail.com">
                    akibrahman5200@gmail.com
                  </a>
                </span>
              </div>
            </div>
            <div className="contact_info">
              <i className="uil uil-map-marker contact_icon"></i>
              <div className="">
                <h3 className="contact_title">Location</h3>
                <span className="contact_subtitle">
                  Uttara - Dhaka - Bangladesh
                </span>
              </div>
            </div>

            <div className="my-10">
              <Social />
            </div>

            <div className="map rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d766.8917024710589!2d90.38736065021095!3d23.890601765357825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1702221610940!5m2!1sen!2sbd"
                width="285"
                height="252"
                className="w-full rounded-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <form
            onSubmit={handleContact}
            action=""
            className="contact_form grid"
          >
            <div className="contact_inputs grid">
              <div className="contact_content w-[90%] md:w-full">
                <label className="contact_label">Name</label>
                <input
                  // id="f_name"
                  name="name"
                  type="text"
                  className="contact_input bg-white p-4 rounded-xl border-y border-[#F5372D]"
                  required
                />
              </div>
              <div className="contact_content w-[90%] md:w-full">
                <label className="contact_label">Email</label>
                <input
                  // id="f_email"
                  name="email"
                  type="email"
                  className="contact_input bg-white p-4 rounded-xl border-y border-[#F5372D]"
                  required
                />
              </div>
            </div>
            <div className="contact_content w-[90%] md:w-full">
              <label className="contact_label">Project</label>
              <input
                // id="f_project"
                name="project"
                type="text"
                className="contact_input bg-white p-4 rounded-xl border-y border-[#F5372D]"
                required
              />
            </div>
            <div className="contact_content w-[90%] md:w-full">
              <label className="contact_label">Message</label>
              <textarea
                // id="f_msg"
                name="message"
                cols="0"
                rows="7"
                className="contact_input bg-white p-4 rounded-xl border-y border-[#F5372D]"
                required
              ></textarea>
            </div>
            <button className="button button_flex contact_button duration-300">
              Send Message
              {loading && (
                <ImSpinner9 className="text-xl text-white animate-spin ml-5" />
              )}
              <i className="uil uil-message button_icon"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
