import React from "react";
import { Formik, Form, Field } from "formik";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import { StyledForm } from "../../styles/formStyles";

export default function SignUp(props) {

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Must be between 5 and 15 characters.")
      .max(15, "Must be between 5 and 15 characters.")
      .required("Required Field"),

    password: Yup.string()
      .min(5, "Must be between 5 and 15 characters.")
      .max(15, "Must be between 5 and 15 characters.")
      .required("Required Field"),

    email: Yup.string()
      .email("Invalid email")
      .required("Required"),

    location: Yup.string()
      .min(5, "Must be between 5 and 40 characters.")
      .max(40, "Must be between 5 and 40 characters.")
      .required("Required Field")
  });

  console.log(props);
  let history = useHistory();

  return (

    <StyledForm>
      <Formik initialValues={{ username: "", password: "", email: "", location: "" }}
              validationSchema={SignupSchema}
              onSubmit={values => {
              axiosWithAuth()
                .post("https://foodie-fun-chards.herokuapp.com/api/auth/register", {
                  ...values, id: Date.now })
                .then(res => {
                  console.log(res);
                  history.push("/login");
                })
                .catch(err => console.log(err));
              }}
      >
              {(errors, touched) => (
                <Form>
                  <span>Username: </span>
                  <Field type="username" name="username"></Field>

                  {errors.username && touched.username ? (
                    <div>{errors.username}</div>
                  ) : null}

                  <span>Password: </span>
                  <Field type="password" name="password"></Field>

                  <span>Email: </span>
                  <Field type="email" name="email"></Field>

                  <span>Location: </span>
                  <Field type="text" name="location"></Field>

                  <button type="submit">Sign Up</button>

                </Form>
              )}
      </Formik>
    </StyledForm>
  );
}
