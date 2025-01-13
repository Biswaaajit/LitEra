import { Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

function AppLayout() {
  return (
    <div className="relative w-full min-h-screen">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
