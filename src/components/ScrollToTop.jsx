import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    }); // Scrolls to the top of the page
  }, [pathname]); // Runs every time the pathname changes

  return null;
};

export default ScrollToTop;
