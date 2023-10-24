import { jsProjects, pythonProjects } from "../../data/projects.json";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Button from "../components/Button";
import ProjectHeader from "../components/ProjectHeader";
import ProjectOverviewItem from "../components/ProjectOverviewItem";

function Projects() {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
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
              <p className="mb-4 font-semibold sm:mb-6 md:mb-8 md:text-lg">
                COMING SOON
              </p>
            </div>
            <div className="mt-5">
              <p className="mb-2 font-medium md:w-3/4 xl:text-lg">
                Got any opportunities or suggestions for me?
              </p>
              <Button type="primary" onClick={() => navigate("/contact")}>
                <i className="fa-solid fa-forward" /> You can contact me{" "}
                <i className="fa-regular fa-message" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Projects;
