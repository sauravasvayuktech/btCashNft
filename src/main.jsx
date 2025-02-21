import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import App from "./App.jsx";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
import Signup from "./components/Signup/Signup.jsx";
import ResetPassword from "./components/ResetPassword/ResetPassword.jsx";
import ContestPage from "./components/ContestPage/ContestPage.jsx";
import WinnerPage from "./components/WinnerPage/WinnerPage.jsx";
import UserDashboard from "./components/Dashboard/UserDashbaord/UserDashboard.jsx";
import Layout from "./components/Dashboard/UserDashbaord/Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/contest" element={<ContestPage />} />
      <Route path="/winner" element={<WinnerPage />} />
      <Route path="/singlepage" element={<SinglePage />} />
      <Route path="/user-dashboard" element={<UserDashbaord />} />
      <Route path="/user-profile" element={<Profile />} />
      <Route path="/mytickets" element={<MyTickets />} />
      <Route path="/myaffiliates" element={<MyAffiliates />} />
      <Route path="/community" element={<Community />} />
      <Route path="user-dashboard" element={<Layout />} >
        <Route index  element={<UserDashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="mytickets" element={<MyTickets />} />
        <Route path="myaffiliates" element={<MyAffiliates />} />
        <Route path="community" element={<Community />} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
