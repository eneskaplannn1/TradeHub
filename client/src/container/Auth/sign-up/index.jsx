import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { IoPersonCircleSharp, IoMailOpenOutline } from "react-icons/io5";
import {
  StyledAuthHead,
  StyledContainer,
  StyledFooter,
} from "../../../UI/auth";
import FormRowVertical from "../../../UI/form/form-row";
import Input from "../../../UI/form/input/input";
import Button from "../../../UI/button";
import { handleSignUp } from "../../../services/apiAuth";
import { verifyAccount } from "../../../features/auth/authSlice";

function SignUpContainer() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: handleSignUp,
    mutationKey: ["signup"],
    onSuccess: (data) => {
      // console.log(data.data.newUser.email);
      toast.success(
        "Your account created successfully , in order to login check your email "
      );
      navigate("/confirmAccount");
      dispatch(verifyAccount(data.data.newUser.email));
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmitForm = function (data) {
    mutate(data);
    // console.log(data);
  };

  return (
    <StyledContainer variation="md">
      <StyledAuthHead>
        <IoPersonCircleSharp />
        <strong>Create account!</strong>
      </StyledAuthHead>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormRowVertical label="Name" error={errors?.name?.message}>
          <Input
            id="name"
            type="text"
            {...register("name", { required: "Enter your name" })}
          />
          <BsPerson />
        </FormRowVertical>
        <FormRowVertical label="Email" error={errors?.email?.message}>
          <Input
            id="email"
            type="email"
            {...register("email", { required: "Enter your email " })}
          />
          <IoMailOpenOutline />
        </FormRowVertical>
        <FormRowVertical label="Password" error={errors?.password?.message}>
          <Input
            id="password"
            type={`${showPassword ? "text" : "password"}`}
            {...register("password", { required: "Enter your password" })}
          />
          <AiFillEye onClick={() => setShowPassword((prev) => !prev)} />
        </FormRowVertical>
        <Button variation="blue">
          {isLoading ? "Creating account..." : "Create Account"}
        </Button>
        <StyledFooter>
          <p>Have an account ?</p>
          <NavLink to="/login">Sign in now</NavLink>
        </StyledFooter>
      </form>
    </StyledContainer>
  );
}

export default SignUpContainer;
