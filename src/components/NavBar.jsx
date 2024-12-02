import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/bloom2.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  return (
    <div className="fixed top-0 left-0 z-40 w-full px-6 py-8 lg:px-30 lg:py-6 bg-gray-100 shadow-lg">
      <div className="flex items-center justify-between px-6 sm:px-10 md:px-20  py-4">
        {/* Hamburger Menu */}
        <button
          className="block lg:hidden text-customSlate text-3xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo */}
        <Link
          to="/home"
          className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-customSlate tracking-wide hover:scale-105 transition-all duration-200"
        >
          <img src={logo} className="h-10 sm:h-14" alt="Bloom Logo" /> BLOOM
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10">
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

        {/* Sign Up Button */}
        <Link
          to="/sign-up"
          className="hidden lg:block px-6 py-2 bg-customSlate text-white rounded-full hover:bg-customSlateDark transition-all duration-300"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-100 bg-opacity-95 z-50 flex flex-col justify-center items-center gap-8">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-3xl text-customSlate hover:text-customSlateDark transition-all duration-200"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>

          <NavLink
            to="/home"
            onClick={toggleMenu}
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
            onClick={toggleMenu}
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
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-2xl font-bold ${
                isActive ? "text-customSlateDark" : "text-customSlateLight"
              } hover:text-customSlateDark transition-all duration-200`
            }
          >
            Post Blog
          </NavLink>
          <Link
            to="/sign-up"
            onClick={toggleMenu}
            className="px-6 py-2 bg-customSlate text-white rounded-full hover:bg-customSlateDark transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
