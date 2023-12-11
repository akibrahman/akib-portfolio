import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Portfolio from "../Components/Portfolio";
import ProjectDetails from "../Components/ProjectDetails";
import Skills from "../Components/Skills";
import HomePgae from "../Pages/HomePgae";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePgae />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
