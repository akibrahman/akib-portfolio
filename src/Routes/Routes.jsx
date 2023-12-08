import { createBrowserRouter } from "react-router-dom";
import App from "../App";
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
    ],
  },
]);
