import { Outlet, useLocation } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const location = useLocation(); // Get current route

  // Hide Header on User Dashboard
  const hideHeaderRoutes = ["/user-dashboard"]; // Add more paths if needed
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
       {!shouldHideHeader && <Header />} {/* Hide Header for certain routes */}
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
