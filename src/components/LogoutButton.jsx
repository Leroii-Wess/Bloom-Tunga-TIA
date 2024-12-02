// import URL from "../db/url";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found. You are already logged out.");
        toast.error("You are already logged out.");
        return;
      }

      // await URL.get("/api/v1/logout", token);
      // console.log(token);

      localStorage.removeItem("token");

      toast.success("You've been logged out successfully");
      navigate("/login", { replace: true });
      return;
    } catch (error) {
      console.error(error);
      toast.error("Error logging out, try again");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="group fixed bottom-16 right-20 px-8 py-2 border border-black bg-transparent hover:bg-customSlateDark text-black dark:border-white transition duration-200"
    >
      <div className="absolute -bottom-2 -right-2 bg-customSlateLight text-white h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 group-hover:bg-customSlateDark transition-all duration-200" />
      <span className="relative text-white group-hover:bg-customSlateDark">
        Logout
      </span>
    </button>
  );
}

export default LogoutButton;
