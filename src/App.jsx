import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense, lazy } from "react";

import Loader from "./components/Loader";
import PageNotFound from "./ui/PageNotFound";

// Lazy Loading
const AppLayout = lazy(() => import("./ui/AppLayout"));
const Home = lazy(() => import("./ui/Home"));
const About = lazy(() => import("./ui/About"));
const Projects = lazy(() => import("./ui/Projects"));
const ContactMe = lazy(() => import("./ui/ContactMe"));
const ProjectOverview = lazy(() => import("./ui/ProjectOverview"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectId" element={<ProjectOverview />} />
        <Route path="contact" element={<ContactMe />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />,
    </Route>,
  ),
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
