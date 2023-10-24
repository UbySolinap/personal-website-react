import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <img className="h-24 lg:h-48" src="../logo.png" alt="uby logo" />
      <h1 className="mt-4 text-3xl font-black italic md:text-4xl">
        404 - Page Not Found
      </h1>
      <p className="my-4 text-lg font-semibold md:text-xl xl:text-2xl">
        Sorry, the page that you requested cannot be found.
      </p>
      <Button onClick={() => navigate("/")} type="return">
        Return Home
      </Button>
    </div>
  );
}

export default PageNotFound;
