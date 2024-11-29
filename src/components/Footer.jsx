import logo from "../images/bloom2.png";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  };

  return (
    <div className="py-20 px-32 bg-gray-200 flex justify-between  bottom-0 w-full">
      <div className="flex flex-col gap-16">
        <div className="flex gap-3 items-center">
          <img src={logo} className="h-full w-28" />
          <h1 className="text-[40px] font-extrabold text-customSlate">BLOOM</h1>
        </div>

        <div>
          <button
            onClick={scrollToTop}
            className="bg-lightGreen text-customSlateDark px-4 py-2 rounded-full transition-all duration-300 hover:bg-lightGreenDark"
          >
            Back to Top
          </button>
        </div>

        <div className="flex gap-5">
          <a href="https://github.com/Leroii-Wess" target="_blank">
            <FaGithub className="h-10 w-10 text-customSlate hover:text-green-950 transition-all duration-100 cursor-pointer" />
          </a>
          <a href="https://x.com/Leroii_wess" target="_blank">
            <BsTwitterX className="h-10 w-10 text-customSlate hover:text-green-950 transition-all duration-100 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/leroii_wess/" target="_blank">
            <FaInstagram className="h-10 w-10 text-customSlate hover:text-green-950 transition-all duration-100 cursor-pointer" />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <Link
          to="/blogs"
          className="text-customSlate italic font-medium text-3xl  hover:font-bold transition-all duration-150"
        >
          Blogs
        </Link>
        <Link
          to="/post-blog"
          className="text-customSlate italic font-medium text-3xl  hover:font-bold transition-all duration-150"
        >
          Post Blog
        </Link>
        <Link
          to="/contact"
          className="text-customSlate italic font-medium text-3xl  hover:font-bold transition-all duration-150"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Footer;
