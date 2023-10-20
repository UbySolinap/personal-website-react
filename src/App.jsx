import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import About from "./ui/About";
import Projects from "./ui/Projects";
import ContactMe from "./ui/ContactMe";
import ProjectOverview from "./ui/ProjectOverview";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectOverview />,
      },

      {
        path: "/contact",
        element: <ContactMe />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
