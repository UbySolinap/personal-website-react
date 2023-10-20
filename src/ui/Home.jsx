import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-between md:flex-row">
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h1 className="text-2xl font-semibold md:text-3xl xl:text-4xl">
          Good day, My name is
        </h1>
        <h1 className="text-4xl font-extrabold  md:text-5xl xl:text-6xl">
          John Uby Solinap
        </h1>
        <h1 className="text-2xl font-semibold md:text-2xl xl:text-3xl">
          A Programmer.
        </h1>
        <p className="font-medium md:w-3/4 xl:text-lg">
          Through continuous learning and hands-on projects, I&apos;m on a
          journey to turn my passion for programming into real-world solutions.
        </p>
        <Button type="primary" onClick={() => navigate("/about")}>
          <i className="fa-solid fa-forward" /> Get to know me more
        </Button>
      </div>
      <div className="mt-5 md:mt-0">
        <img
          src="./uby.JPG"
          alt="Uby pic"
          className="h-64 rounded-full md:h-72 lg:h-80"
        />
      </div>
    </div>
  );
}

export default Home;
