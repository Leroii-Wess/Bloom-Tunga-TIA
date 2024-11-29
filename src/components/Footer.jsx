import logo from "../images/bloom2.png";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-10 px-6 sm:px-10 md:px-20 lg:py-20 lg:px-32 bg-gray-200 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0 bottom-0 w-full">
      {/* Logo and Social Media Section */}
      <div className="flex flex-col items-center lg:items-start gap-8 order-2 lg:order-1">
        <div className="flex gap-3 items-center">
          <img
            src={logo}
            className="h-full w-20 sm:w-24 md:w-28"
            alt="Bloom Logo"
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-customSlate">
            BLOOM
          </h1>
        </div>

        {/* Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="bg-lightGreen text-customSlateDark px-4 py-2 rounded-full transition-all duration-300 hover:bg-lightGreenDark"
          >
            Back to Top
          </button>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6 md:gap-4 sm:gap-5">
          <a
            href="https://github.com/Leroii-Wess"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-8 w-8 sm:h-10 sm:w-10 text-customSlate hover:text-green-950 transition-all duration-100 cursor-pointer" />
          </a>
          <a
            href="https://x.com/Leroii_wess"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX className="h-8 w-8 sm:h-10 sm:w-10 text-customSlate hover:text-green-950 transition-all duration-100 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/leroii_wess/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="h-8 w-8 sm:h-10 sm:w-10 text-customSlate hover:text-green-950 transition-all duration-100 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-8 order-1 lg:order-2">
        <Link
          to="/blogs"
          className="text-customSlate italic font-medium text-2xl sm:text-3xl md:text-3xl hover:font-bold transition-all duration-150"
        >
          Blogs
        </Link>
        <Link
          to="/post-blog"
          className="text-customSlate italic font-medium text-2xl sm:text-3xl md:text-3xl hover:font-bold transition-all duration-150"
        >
          Post Blog
        </Link>
        <Link
          to="/contact"
          className="text-customSlate italic font-medium text-2xl sm:text-3xl md:text-3xl hover:font-bold transition-all duration-150"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Footer;
