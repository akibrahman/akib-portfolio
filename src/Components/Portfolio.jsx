import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
import { FaArrowRight, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Portfolio = () => {
  const axiosInstance = useAxiosPublic();

  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/all-projects");
      const projects = data.filter((project) => project.status == "ready");
      return projects;
    },
  });

  if (!data)
    return (
      <p className="flex justify-center h-screen items-center">
        <FaSpinner className="text-primary animate-spin text-5xl text-center" />
      </p>
    );
  return (
    <div className="w-[90%] mx-auto mt-20 ">
      <div className="flex flex-col gap-10">
        {data.map((project) => (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ type: "spring" }}
            key={project._id}
            className="flex flex-col lg:flex-row items-center gap-5 md:gap-10 border-l-[5px] pl-4 border-primary py-5"
          >
            <img
              className="w-[300px] rounded-lg border-2"
              src={project.image}
              alt=""
            />
            <div className="md:w-[600px] flex flex-col gap-4">
              <p>
                <span className="font-bold inline-block w-[120px]">Name:</span>
                <span className="bg-stone-300 px-3 py-1 rounded-md font-bold text-xl inline-block w-[150px] text-center">
                  {project.title}
                </span>
              </p>
              <p>
                <span className="font-bold md:inline-block md:w-[120px]">
                  Description:
                </span>
                {project.description}
              </p>
            </div>
            <div className="flex lg:flex-col gap-4">
              <Link target="_blank" to={project.client_link}>
                <p className="font-bold border border-primary px-2 py-1 rounded-full w-max">
                  Client Repo
                </p>
              </Link>
              <Link target="_blank" to={project.server_link}>
                <p className="font-bold border border-primary px-2 py-1 rounded-full w-max">
                  Server Repo
                </p>
              </Link>
            </div>
            <div className="flex lg:flex-col gap-2 flex-1 items-end">
              <Link target="_blank" to={project.live_link}>
                <FaEye className="bg-primary text-white w-8 h-8 p-2 rounded-full cursor-pointer" />
              </Link>
              <Link to={`/project/${project._id}`}>
                <FaArrowRight className="bg-primary text-white w-8 h-8 p-2 rounded-full cursor-pointer" />
              </Link>
            </div>
          </motion.div>
        ))}
        <button
          onClick={async () => {
            const data = await axiosInstance.post("/test");
            console.log(data.data);
          }}
          className="bg-primary px-3 py-1 text-white rounded-md hidden"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
