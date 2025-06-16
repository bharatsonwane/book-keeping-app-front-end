import * as yup from "yup";

const emailValidation = yup
  .string()
  .required("Email required")
  .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Invalid email");

const passwordValidation = yup.string().required("Password required");

/* Signup */
export const SignupSchema = yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
  domain: yup.string().required("Domain required"),
  name: yup.string().required("Tenant Name required"),
});
