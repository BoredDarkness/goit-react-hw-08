import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short")
      .max(50, "Name is too long")
      .required("Required field"),
    email: Yup.string().email("Invalid email").required("Required field"),
    password: Yup.string()
      .min(6, "Password is too short")
      .required("Required field"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => resetForm())
      .catch((error) => {
        console.error("Registration failed:", error);
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
            Name:
            <Field type="text" name="name" className={styles.input} />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </label>
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
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
