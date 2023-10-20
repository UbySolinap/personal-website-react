import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ProjectOverviewItem.propTypes = {
  project: PropTypes.array,
};

function ProjectOverviewItem({ project }) {
  return (
    <li className="group relative mb-2 rounded-md hover:border-2 hover:border-profile hover:shadow-xl hover:shadow-profile md:mb-4">
      <Link to={`${project.projectId}`}>
        <img
          src={project.img}
          className="mb-4 w-60 rounded-md transition-all group-hover:blur-sm group-hover:duration-100 sm:w-72 md:w-80 lg:w-[22rem] xl:w-96 2xl:w-[26rem]"
        />
        <div className="opacity-0 group-hover:opacity-100">
          <p className="absolute bottom-2 left-3 rounded-lg bg-profile px-2 text-lg font-bold italic text-slate-50">
            <i className="fa-solid fa-forward" /> Check overview
          </p>
        </div>
      </Link>
    </li>
  );
}

export default ProjectOverviewItem;
