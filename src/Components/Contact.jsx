import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "react-toastify";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { imageToBase64 } from "../Utils/imageToBase64";
import { imageUploader } from "../Utils/imageUploder";
import { makeFile } from "../Utils/makeFile";
import imgAddIcon from "../assets/image/imageAddIcon.png";
import Social from "./Shared/Social";

const Contact = () => {
  const axiosInstance = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [formImages, setFormImages] = useState([]);
  const handleContact = async (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    try {
      let images = [];
      if (formImages.length > 0) {
        for (let index = 0; index < formImages.length; index++) {
          const link = await imageUploader(await makeFile(formImages[index]));
          images.push(link);
        }
      }
      const emailData = {
        senderName: form.name.value,
        senderEmail: form.email.value,
        senderMessage: form.message.value,
        senderProject: form.project.value,
        images,
      };
      const { data } = await axiosInstance.post("/send-email", emailData);
      console.log("Emqail Res: ", data);
      setFormImages([]);
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
            {/*//TODO: Images  */}
            {/* <div className="contact_content w-[90%] md:w-full">
              <label className="contact_label">
                Images<span className="text-[10px] ml-3">(optional)</span>
              </label>
              <div className="">
                <div className="grid grid-cols-3 gap-4 p-4">
                  {formImages.map((image, i) => (
                    <img
                      src={image}
                      key={i}
                      alt="Image from user"
                      className="w-36 h-20 rounded-md"
                    />
                  ))}
                </div>
                <input
                  onChange={async (e) => {
                    setFormImages([
                      ...formImages,
                      await imageToBase64(e.target.files[0]),
                    ]);
                  }}
                  type="file"
                  name=""
                  id="img"
                  accept="image/jpg,image/jpeg,image/png"
                  className="hidden"
                />
                <label htmlFor="img" className="m-10 flex items-center gap-4">
                  <img
                    src={imgAddIcon}
                    alt="Image Add Icon"
                    className="w-14 h-14 cursor-pointer duration-300 active:scale-90 border border-[#F5372D] p-1 rounded-md"
                  />
                  <span className="flex items-center gap-2">
                    <FaArrowLeftLong className="animate-pulse" /> Click here to
                    add Image
                  </span>
                </label>
              </div>
            </div> */}
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
