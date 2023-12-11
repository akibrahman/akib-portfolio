import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <div className="w-[90%] mx-auto my-10">
      <p>Details - {id}</p>
    </div>
  );
};

export default ProjectDetails;
