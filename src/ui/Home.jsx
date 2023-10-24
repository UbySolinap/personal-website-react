import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { AnimatePresence, motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "anticipate" }}
            className="text-2xl font-semibold md:text-3xl xl:text-4xl"
          >
            Good day, My name is
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className="text-4xl font-extrabold  md:text-5xl xl:text-6xl"
          >
            John Uby Solinap
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "anticipate" }}
            className="text-2xl font-semibold md:text-2xl xl:text-3xl"
          >
            A Programmer. <i className="fa-solid fa-code" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "anticipate" }}
            className="font-medium md:w-3/4 xl:text-lg"
          >
            Through continuous learning and hands-on projects, I&apos;m on a
            journey to turn my passion for programming into real-world
            solutions.
          </motion.p>
          <Button type="primary" onClick={() => navigate("/about")}>
            <i className="fa-solid fa-forward" /> Get to know me more{" "}
            <i className="fa-regular fa-lightbulb" />
          </Button>
        </div>
        <div className="mt-5 md:mt-0">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "anticipate" }}
            src="./uby.JPG"
            alt="Uby pic"
            className="h-64 rounded-full md:h-72 lg:h-80"
          />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Home;
