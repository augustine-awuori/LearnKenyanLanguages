import React from "react";
import { useFormikContext } from "formik";

const Input = ({ name, label, ...rest }) => {
  const { errors, handleChange, setFieldTouched, touched, values } =
    useFormikContext();

  return (
    <article className="form-group">
      <label className="form-group__label" htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        className="form-control"
        id={name}
        name={name}
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange}
        value={values[name]}
      />
      {errors[name] && touched[name] && (
        <div className="form-group__error-message">{errors[name]}</div>
      )}
    </article>
  );
};

export default Input;
