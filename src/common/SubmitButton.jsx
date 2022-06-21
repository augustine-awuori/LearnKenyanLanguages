import React from "react";
import { useFormikContext } from "formik";

export default function SubmitButton({ label }) {
  const { errors, handleSubmit } = useFormikContext();
  // Don't remove the destructured 'errors' even though it's not used.
  // Currently you cannot destructure only one 'object'  or 'function;
  return (
    <button className="btn btn--primary" type="submit" onClick={handleSubmit}>
      {label}
    </button>
  );
}
