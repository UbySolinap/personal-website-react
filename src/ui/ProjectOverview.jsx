import { useNavigate, useParams } from "react-router-dom";
import { jsProjects, pythonProjects } from "../../data/projects.json";

import ProjectHeader from "../components/ProjectHeader";
import Button from "../components/Button";

function ProjectOverview() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  let projects;

  // Checks first if the project is javascript, python or react.
  if (projectId.slice(0, 2) === "js") projects = jsProjects;

  if (projectId.slice(0, 2) === "py") projects = pythonProjects;

  const selectedProject = projects.filter(
    (project) => projectId === project.projectId,
  );

  const { title, img, overview, githubLink, projectLink, techUsed } =
    selectedProject[0];

  return (
    <div>
      <ProjectHeader />
      <div className="border-t-2 border-profile">
        <div className="mt-5">
          <div className="mb-4 flex space-x-4">
            <h1 className=" text-2xl font-black md:text-4xl">{title}</h1>
            <Button onClick={() => navigate(-1)} type="return">
              Back <i className="fa-solid fa-left-long" />
            </Button>
          </div>

          <img src={`../${img}`} alt="project img" className="rounded-md" />

          <h1 className="mb-2 mt-4 text-lg font-black md:mt-8 md:text-2xl">
            Project Overview:
          </h1>
          <p className="text-sm sm:text-base">{overview}</p>
          <div className="mt-5 flex space-x-4">
            <Button type="submit">
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm md:text-base"
                href={githubLink}
              >
                Check Github <i className="fa-brands fa-github" />
              </a>
            </Button>
            <Button type="submit">
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm md:text-base"
                href={projectLink}
              >
                Check Live <i className="fa-solid fa-up-right-from-square" />
              </a>
            </Button>
          </div>
          <h1 className="mb-3 mt-4 text-lg font-black md:mt-6 md:text-2xl">
            Tech used:
          </h1>
          <ul className="flex flex-wrap space-x-2">
            {techUsed.map((tech) => (
              <li key={tech} className="list-items mb-2">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectOverview;
