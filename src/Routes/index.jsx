import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import CarPage from "../Page/CarPage";
import SignUp from "../Page/SignUp";
import Login from "../Page/Login";
import Error from "../Page/Error";
import HomePage from "../Page/HomePage";

// const routes = (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/home" element={<Home />} />
//     <Route path="/carmanagement" element={<CarPage />} />
//     <Route path="/signup" element={<SignUp />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="*" element={<Error />} />
//   </Routes>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/homePage",
        element: <HomePage />,
      },
      {
        path: "/carmanagement",
        element: <CarPage />,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
