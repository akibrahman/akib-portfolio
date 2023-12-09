import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await axios.get("../../public/data.json");
      const projects = data.filter((d) => d.status == "ready");
      return projects;
    },
  });

  if (!data) return <p>Loading........</p>;
  return (
    <div className="w-[90%] mx-auto mt-20 ">
      <div className="flex flex-col gap-10">
        {data.map((project, i) => (
          <div
            key={i}
            className="flex items-center gap-10 border-l-[5px] pl-4 border-primary py-5"
          >
            <img
              className="w-[300px] rounded-lg border-2"
              src={project.image}
              alt=""
            />
            <div className="w-[600px] flex flex-col gap-4">
              <p>
                <span className="font-bold inline-block w-[120px]">Name:</span>
                <span className="bg-stone-300 px-3 py-1 rounded-md font-bold text-xl inline-block w-[150px] text-center">
                  {project.title}
                </span>
              </p>
              <p>
                <span className="font-bold inline-block w-[120px]">
                  Description:
                </span>
                {project.description}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link target="_blank" to={project.client_link}>
                <p className="font-bold border border-primary px-2 py-1 rounded-full">
                  Client Repo
                </p>
              </Link>
              <Link target="_blank" to={project.server_link}>
                <p className="font-bold border border-primary px-2 py-1 rounded-full">
                  Server Repo
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-2 flex-1 items-end">
              <Link target="_blank" to={project.live_link}>
                <FaEye className="bg-primary text-white w-8 h-8 p-2 rounded-full cursor-pointer" />
              </Link>
              {/* <FaArrowRight className="bg-primary text-white w-8 h-8 p-2 rounded-full cursor-pointer" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
