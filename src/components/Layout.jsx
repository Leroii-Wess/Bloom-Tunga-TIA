/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function Layout({ children }) {
  const location = useLocation();

  // Define routes where the LogoutButton should not appear
  const excludedRoutes = ["/login", "/sign-up", "/signup"];

  return (
    <div className="relative">
      {children}
      {!excludedRoutes.includes(location.pathname) && <LogoutButton />}
    </div>
  );
}

export default Layout;
