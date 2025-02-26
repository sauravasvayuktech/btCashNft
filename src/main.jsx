import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import Home from "./components/Home/Home.jsx";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import SinglePage from "./components/SinglePage/SinglePage.jsx";
import Login from "./components/Login/Login.jsx";
import UserDashbaord from "./Pages/Dashbaord/UserDashbaord.jsx";
import Profile from "./components/Dashboard/UserDashbaord/Profile.jsx";
import MyTickets from "./components/Dashboard/UserDashbaord/MyTickets.jsx";
import MyAffiliates from "./components/Dashboard/UserDashbaord/MyAffiliates.jsx";
import Community from "./components/Dashboard/UserDashbaord/Community.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/singlepage" element={<SinglePage />} />
      <Route path="/user-dashboard" element={<UserDashbaord />} />
      <Route path="/user-profile" element={<Profile />} />
      <Route path="/mytickets" element={<MyTickets />} />
      <Route path="/myaffiliates" element={<MyAffiliates />} />
      <Route path="/community" element={<Community />} />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
