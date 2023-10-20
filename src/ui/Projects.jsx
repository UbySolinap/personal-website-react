import { jsProjects, pythonProjects } from "../../data/projects.json";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import ProjectHeader from "../components/ProjectHeader";
import ProjectOverviewItem from "../components/ProjectOverviewItem";

function Projects() {
  const navigate = useNavigate();

  return (
    <div>
      <ProjectHeader />
      <div className="border-t-2 border-profile">
        <div className="mt-5 space-y-4  md:space-y-10">
          <div>
            <h1 className="mb-4 text-xl font-black sm:mb-6 md:mb-8 md:text-3xl">
              Vanilla Javascript Projects
            </h1>
            <ul className="flex flex-wrap items-center justify-around">
              {jsProjects.map((project) => (
                <ProjectOverviewItem
                  key={project.projectId}
                  project={project}
                />
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-profile">
            <br />
            <h1 className="mb-4 text-xl font-black sm:mb-6 md:mb-8 md:text-3xl">
              Python Projects
            </h1>
            <ul className="flex flex-wrap items-center justify-around">
              {pythonProjects.map((project) => (
                <ProjectOverviewItem
                  key={project.projectId}
                  project={project}
                />
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-profile">
            <br />
            <h1 className="mb-4 text-xl font-black sm:mb-6 md:mb-8 md:text-3xl">
              React Projects
            </h1>
            <p className="mb-4 text-sm sm:mb-6 md:mb-8 md:text-lg">
              COMING SOON
            </p>
          </div>
          <div className="mt-5">
            <p className="font-medium md:w-3/4 xl:text-lg">
              Got any opportunities or suggestions for me?
            </p>
            <Button type="primary" onClick={() => navigate("/contact")}>
              <i className="fa-solid fa-forward" /> You can contact me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
