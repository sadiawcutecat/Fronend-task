import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Component/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:id",
        element: <Home />,
      },
    ],
  },
]);

export default router;