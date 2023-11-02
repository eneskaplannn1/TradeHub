import useSignUp from "./useSignup";
import { useState } from "react";

import FormRowVertical from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

import { BsPerson } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { errors, handleSubmit, handleSubmitForm, register, isLoading } =
    useSignUp();

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <FormRowVertical
        label="Name"
        error={errors?.name?.message}
        variation="flex"
      >
        <Input
          id="name"
          type="text"
          {...register("name", { required: "Enter your name" })}
        />
        <BsPerson />
      </FormRowVertical>
      <FormRowVertical
        label="Email"
        error={errors?.email?.message}
        variation="flex"
      >
        <Input
          id="email"
          type="email"
          {...register("email", { required: "Enter your email " })}
        />
        <IoMailOpenOutline />
      </FormRowVertical>
      <FormRowVertical
        label="Password"
        error={errors?.password?.message}
        variation="flex"
      >
        <Input
          id="password"
          type={`${showPassword ? "text" : "password"}`}
          {...register("password", {
            required: "Enter your password",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        <AiFillEye onClick={() => setShowPassword((prev) => !prev)} />
      </FormRowVertical>
      <Button variation="blue">
        {isLoading ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
}

export default SignUpForm;
