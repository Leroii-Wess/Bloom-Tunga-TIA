import { Link, NavLink } from "react-router-dom";
import logo from "../assets/bloom2.png";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 z-40 w-full flex items-center justify-between px-32 py-10 bg-gray-100 shadow-lg">
      <Link
        to="/home"
        className="flex items-center gap-2 text-3xl font-bold text-customSlate tracking-wide hover:scale-105 transition-all duration-200"
      >
        <img src={logo} className="h-14" /> BLOOM
      </Link>

      <ul className="flex gap-10">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `text-2xl font-bold ${
              isActive ? "text-customSlateDark" : "text-customSlateLight"
            } hover:text-customSlateDark transition-all duration-200`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            `text-2xl font-bold ${
              isActive ? "text-customSlateDark" : "text-customSlateLight"
            } hover:text-customSlateDark transition-all duration-200`
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/post-blog"
          className={({ isActive }) =>
            `text-2xl font-bold ${
              isActive ? "text-customSlateDark" : "text-customSlateLight"
            } hover:text-customSlateDark transition-all duration-200`
          }
        >
          Post Blog
        </NavLink>
      </ul>

      <Link
        to="/sign-up"
        className="px-6 py-2 bg-customSlate text-white rounded-full hover:bg-customSlateDark transition-all duration-300"
      >
        Sign Up
      </Link>
    </div>
  );
}

export default NavBar;
