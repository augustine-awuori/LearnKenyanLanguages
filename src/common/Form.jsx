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
      <>
        <h1 className="form__heading">{heading}</h1> {children}
      </>
    )}
  </Formik>
);

export default Form;
