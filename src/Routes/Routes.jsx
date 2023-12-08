import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Components/About";
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
    ],
  },
]);
