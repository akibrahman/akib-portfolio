import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const ProjectDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxiosPublic();

  const { data: project, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const project = await axiosInstance.get(`/project/${id}`);
      return project.data;
    },
  });
  const gallery = project?.gallery;

  if (isLoading) return <p>Loading.........</p>;

  return (
    <div className="w-[90%] mx-auto my-10">
      <p className="mb-6 text-center font-bold text-xl bg-primary w-max mx-auto text-white px-10 py-2 rounded-md">
        {project.title}
      </p>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper pb-14 select-none"
      >
        {gallery.map((pic, i) => (
          <SwiperSlide key={i}>
            <img
              src={pic}
              className="rounded-md drop-shadow-2xl h-[300px]"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectDetails;
