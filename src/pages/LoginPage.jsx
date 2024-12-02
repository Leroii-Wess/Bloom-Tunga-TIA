/* eslint-disable react/no-unescaped-entities */
import usePasswordToggle from "../hooks/usePasswordToggle";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { validateEmail } from "../helpers/emailValidators";
import URL from "../db/url";
import { Link, useNavigate } from "react-router-dom";
import SpinnerMini from "../components/SpinnerMini";
import bg from "../images/dark-flower.jpg";

const loginUrl = "/api/v1/login";

const LoginPage = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const navigate = useNavigate();

  const handleFormSubmit = async (values, actions) => {
    try {
      const res = await URL.post(loginUrl, {
        email: values.email,
        password: values.password,
      });

      console.log(res);
      localStorage.setItem("token", res.data.token);

      toast.success("Logged in Successfully, Welcome!");
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Wrong credentials, confirm email and password");
    } finally {
      actions.resetForm();
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateEmail,
    onSubmit: handleFormSubmit,
  });

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* <div
        className={`absolute inset-0 bg-cover bg-center  bg-[url("src/assets/dark-flower.jpg")]`}
      ></div> */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "cover",
        }}
      ></div>

      <div
        className={`z-10 p-20 rounded-2xl bg-[rgba(50,71,74,0.20)] border border-customSlate shadow-2xl backdrop-blur-[6.3px] w-full max-w-2xl flex flex-col gap-4`}
      >
        <h2 className="text-5xl text-white font-bold mb-2 text-center">
          Login to Bloom
        </h2>
        <p className="text-white text-center text-xl mb-6">
          Enter your username and password to continue
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div>
            <label
              htmlFor="email"
              className="block text-white font-medium text-2xl mb-1 tracking-wide"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                errors.email && touched.email ? "border-customSlate " : ""
              } w-full px-4 py-3 text-gray-50 text-2xl rounded-lg bg-[rgba(50,71,74,0.18)] border border-customPink focus:outline-none focus:ring-2 focus:ring-customPink placeholder:text-xl`}
              placeholder="Enter your username"
            />

            {errors.email && touched.email && (
              <span className="text-xl text-customPink">{errors.email}</span>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-white font-medium text-2xl mb-1 tracking-wide"
            >
              Password
            </label>
            <input
              id="password"
              type={PasswordInputType}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                errors.email && touched.email ? "border-customSlate" : ""
              } w-full px-4 py-3 text-gray-50 text-2xl rounded-lg bg-[rgba(50,71,74,0.18)]  border border-customPink focus:outline-none focus:ring-2 focus:ring-customPink placeholder:text-xl`}
              placeholder="Enter your password"
            />
            <span
              className={`${
                errors.password && touched.password ? "bottom-[3.5rem]" : ""
              } text-white absolute right-4 bottom-4 flex items-center cursor-pointer text-2xl`}
            >
              {ToggleIcon}
            </span>

            {errors.password && touched.password && (
              <span className="text-xl text-customPink">{errors.password}</span>
            )}
          </div>

          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-3/4 bg-customPink flex items-center justify-center text-white font-bold py-3 px-4 rounded-lg hover:bg-customPdark transition duration-300  mb-8"
            >
              {isSubmitting ? <SpinnerMini /> : "Sign In"}
            </button>

            <div>
              <p className="text-white text-xl">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-2xl text-pink-600 hover:underline cursor-pointer"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
