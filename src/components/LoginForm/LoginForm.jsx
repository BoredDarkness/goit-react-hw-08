import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm..module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required field"),
    password: Yup.string()
      .min(6, "Password is too short")
      .required("Required field"),
  });

  const handleSubmit = (
    values,
    { resetForm, setSubmitting, setFieldError }
  ) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        resetForm();
      })
      .catch((error) => {
        setFieldError("password", error || "Something went wrong");
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <label className={styles.label}>
            Email:
            <Field type="email" name="email" className={styles.input} />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </label>
          <label className={styles.label}>
            Password:
            <Field type="password" name="password" className={styles.input} />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </label>
          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting}
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
