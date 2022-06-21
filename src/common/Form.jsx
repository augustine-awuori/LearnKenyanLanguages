import React from "react";
import { Formik } from "formik";

const Form = ({
  children,
  heading,
  initialValues,
  onSubmit,
  validationSchema,
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {() => (
      <form className="form">
        <h1 className="form__heading">{heading}</h1> {children}
      </form>
    )}
  </Formik>
);

export default Form;
