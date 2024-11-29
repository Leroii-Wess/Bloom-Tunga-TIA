import NavBar from "../components/NavBar";
import flower from "../images/dark-flower.jpg";
import { useNavigate } from "react-router-dom";
import usePasswordToggle from "../hooks/usePasswordToggle";
import { useFormik } from "formik";
import { validateEmail } from "../helpers/emailValidators";
import SpinnerMini from "../components/SpinnerMini";
import toast from "react-hot-toast";
import URL from "../db/url";

const signup = "/api/v1/register";

function SignupPage() {
  const [InputType, Icon] = usePasswordToggle();
  const navigate = useNavigate();

  const submitForm = async (values, actions) => {
    try {
      await URL.post(signup, {
        email: values.email,
        password: values.password,
      });

      // console.log(res);

      toast.success({
        message: "Congrats, you can now login with your details!",
        duration: 5000,
      });
      navigate("/login");
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
    onSubmit: submitForm,
  });

  return (
    <div className="h-screen lg:overflow-hidden">
      <NavBar />

      <div className="lg:w-3/5 w-3/4 md:w-2/4  mx-auto my-8 shadow-lg lg:flex rounded-lg mt-[20%] md:mt-[15%]   lg:mt-[15%]">
        {/* Form Section */}
        <div className="lg:w-2/5 bg-customSlate text-white px-8 py-12 flex flex-col items-center gap-16 rounded-t-md lg:rounded-l-lg">
          <h1 className="text-4xl font-bold">BLOOM</h1>

          <form
            className="flex flex-col gap-14 w-4/5 h"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                className={`${
                  errors.email && touched.email
                    ? "border-pink-500 border-2"
                    : ""
                } bg-customSlate text-white text-2xl border border-white rounded-full py-4 px-6 w-full  placeholder-gray-400 placeholder:text-2xl focus:outline-none`}
              />

              {errors.email && touched.email && (
                <span className="text-xl text-pink-500 ml-5">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="relative">
              <input
                type={InputType}
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
                className={`${
                  errors.password && touched.password
                    ? "border-pink-500 border-2"
                    : ""
                } bg-customSlate text-white text-2xl border border-white rounded-full py-4 px-6 w-full  placeholder-gray-400 placeholder:text-2xl focus:outline-none`}
              />

              <span
                className={`${
                  errors.password && touched.password
                    ? "lg:bottom-14 bottom-[3.7rem]"
                    : ""
                } text-white absolute right-6 bottom-5 flex items-center cursor-pointer text-2xl`}
              >
                {Icon}
              </span>

              {errors.password && touched.password && (
                <span className="text-xl text-pink-500 ml-5">
                  {errors.password}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center bg-pink-600 hover:bg-pink-500 text-white py-3 px-6 rounded-full text-2xl font-medium transition duration-200 ease-in-out"
            >
              {isSubmitting ? <SpinnerMini /> : "Sign Up"}
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="lg:w-3/5 ">
          <img
            src={flower}
            alt="flowers"
            className="lg:w-full lg:h-full rounded-b-lg lg:rounded-r-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

// import NavBar from "../components/NavBar";
// import flower from "../images/dark-flower.jpg";
// import { useNavigate } from "react-router-dom";
// import usePasswordToggle from "../hooks/usePasswordToggle";
// import { useFormik } from "formik";
// import { validateEmail } from "../helpers/emailValidators";
// import SpinnerMini from "../components/SpinnerMini";
// import toast from "react-hot-toast";
// import URL from "../db/url";

// const signup = "/api/v1/register";

// function SignupPage() {
//   const [InputType, Icon] = usePasswordToggle();
//   const navigate = useNavigate();

//   const submitForm = async (values, actions) => {
//     try {
//       await URL.post(signup, {
//         email: values.email,
//         password: values.password,
//       });

//       toast.success("Congrats, you can now login with your details!");
//       navigate("/login");
//     } catch (error) {
//       console.error(error);
//       toast.error("Wrong credentials, confirm email and password");
//     } finally {
//       actions.resetForm();
//     }
//   };

//   const {
//     values,
//     errors,
//     touched,
//     isSubmitting,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: validateEmail,
//     onSubmit: submitForm,
//   });

//   //w-3/5 mx-auto my-8 shadow-lg flex rounded-lg   mt-[15%]
//   // w-2/5 bg-customSlate text-white px-8 py-12 flex flex-col items-center gap-16 rounded-l-lg

//   return (
//     <div className="min-h-screen overflow-hidden">
//       <NavBar />

//       <div className="container max-w-7xl  mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center shadow-lg rounded-lg  mt-[15%]">
//         {/* Form Section */}
//         <div className="w-full  md:w-3/5 bg-customSlate text-white px-6 py-12 flex flex-col items-center gap-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
//           <h1 className="text-4xl font-bold">BLOOM</h1>

//           <form
//             className="flex flex-col gap-8 w-full sm:w-4/5"
//             onSubmit={handleSubmit}
//           >
//             <div>
//               <input
//                 type="text"
//                 name="email"
//                 id="email"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Email"
//                 className={`${
//                   errors.email && touched.email
//                     ? "border-pink-500 border-2"
//                     : ""
//                 } bg-customSlate text-white text-lg sm:text-2xl border border-white rounded-full py-3 px-6 w-full placeholder-gray-400 placeholder:text-lg sm:placeholder:text-2xl focus:outline-none`}
//               />

//               {errors.email && touched.email && (
//                 <span className="text-sm sm:text-xl text-pink-500 ml-2 sm:ml-5">
//                   {errors.email}
//                 </span>
//               )}
//             </div>

//             <div className="relative">
//               <input
//                 type={InputType}
//                 name="password"
//                 id="password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Password"
//                 className={`${
//                   errors.password && touched.password
//                     ? "border-pink-500 border-2"
//                     : ""
//                 } bg-customSlate text-white text-lg sm:text-2xl border border-white rounded-full py-3 px-6 w-full placeholder-gray-400 placeholder:text-lg sm:placeholder:text-2xl focus:outline-none`}
//               />

//               <span className="text-white absolute right-6 bottom-3 sm:bottom-5 flex items-center cursor-pointer text-xl sm:text-2xl">
//                 {Icon}
//               </span>

//               {errors.password && touched.password && (
//                 <span className="text-sm sm:text-xl text-pink-500 ml-2 sm:ml-5">
//                   {errors.password}
//                 </span>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="flex items-center justify-center bg-pink-600 hover:bg-pink-500 text-white py-3 px-6 rounded-full text-lg sm:text-2xl font-medium transition duration-200 ease-in-out"
//             >
//               {isSubmitting ? <SpinnerMini /> : "Sign Up"}
//             </button>
//           </form>
//         </div>

//         {/* Image Section */}
//         <div className="w-full md:w-3/5">
//           <img
//             src={flower}
//             alt="flowers"
//             className="w-full h-64 md:h-full object-cover rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;
