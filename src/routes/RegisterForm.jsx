import React from "react";
import * as Yup from "yup";

import Form from "../common/Form";
import useForm from "../hooks/useForm";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(4).max(255).required().label("Name"),
  email: Yup.string().max(255).email().required().label("Email"),
  password: Yup.string().min(6).max(255).required().label("Password"),
});

export default function LoginForm() {
  const { renderButton, renderInput } = useForm();

  const handleSubmit = (userInfo) => {
    console.log(userInfo);
  };

  return (
    <Form
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      initialValues={{ name: "", email: "", password: "" }}
      heading="sign up"
    >
      {renderInput("name", "Name")}
      {renderInput("email", "Email", "email")}
      {renderInput("password", "Password", "password")}
      {renderButton("sign up")}
    </Form>
  );
}
