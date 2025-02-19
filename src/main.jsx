import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import Home from "./components/Home/Home.jsx";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import SinglePage from "./components/SinglePage/SinglePage.jsx";
import Login from "./components/Login/Login.jsx";
import UserDashbaord from "./Pages/Dashbaord/UserDashbaord.jsx";
import Signup from "./components/Signup/Signup.jsx";
import ResetPassword from "./components/ResetPassword/ResetPassword.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/singlepage" element={<SinglePage />} />
      <Route path="/user-dashboard" element={<UserDashbaord />} />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
