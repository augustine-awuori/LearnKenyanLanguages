import React from "react";

import Input from "../common/Input";
import SubmitButton from "../common/SubmitButton";

export default function useForm() {
  const renderInput = (name, label, type = "text") => (
    <Input name={name} label={label} type={type} />
  );

  const renderButton = (label) => <SubmitButton label={label} />;

  return { renderButton, renderInput };
}
