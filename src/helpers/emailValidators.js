import * as Yup from "yup";

export const validateEmail = Yup.object({
  email: Yup.string().email("Please enter a valid email").required("Required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Required"),
});
