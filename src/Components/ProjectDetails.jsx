import { useQuery } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { ImageComponent } from "../Utils/ImageComponent";

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
  const features = project?.features;
  const sFeatures = project?.specialFeatures ? project.specialFeatures : [];

  if (isLoading || !project || !gallery || !features)
    return (
      <p className="flex justify-center h-screen items-center">
        <FaSpinner className="text-primary animate-spin text-5xl text-center" />
      </p>
    );

  return (
    <div className="w-[90%] mx-auto my-10">
      <p className="mb-10 text-center font-bold text-xl bg-primary w-max mx-auto text-white px-10 py-2 rounded-md">
        {project.title}
      </p>
      <Swiper
        // slidesPerView={1}
        // spaceBetween={20}

        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },

          // when window width is >= 640px
          900: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
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
            <ImageComponent
              src={pic}
              alt={`Gallery Images for ${project.title}`}
              classes={"rounded-md drop-shadow-2xl h-[300px]"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-10 flex flex-col gap-5 md:gap-0 md:flex-row items-center md:justify-around">
        <Link target="_blank" to={project.client_link}>
          <p className="font-bold text-white bg-primary px-5 py-2">
            Client Side Repository
          </p>
        </Link>
        <Link target="_blank" to={project.server_link}>
          <p className="font-bold text-white bg-primary px-5 py-2">
            Server Side Repository
          </p>
        </Link>
        <Link target="_blank" to={project.live_link}>
          <p className="font-bold text-white bg-primary px-5 py-2">
            Live Preview
          </p>
        </Link>
      </div>
      <div className="mt-10 border-l pl-5 border-primary">
        <p className="text-2xl font-bold tracking-widest mb-4">Features :</p>
        <div className="">
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i}>
                <span className="text-primary mr-2">{i + 1}.</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {sFeatures.length > 0 && (
        <div className="mt-10 border-l pl-5 border-primary">
          <p className="text-2xl font-bold tracking-widest mb-4">
            Special Features :
          </p>
          <div className="">
            <ul className="space-y-2">
              {sFeatures.map((feature, i) => (
                <li key={i}>
                  <span className="text-primary mr-2">{i + 1}.</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
