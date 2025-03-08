import * as yup from "yup";

export const emailYuSchema = yup.object().shape({
    email: yup.string().required("Email required").email("Enter a valid Email"),
  });