import { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { AiFillEye } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";

import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  StyledAuthHead,
  StyledContainer,
  StyledFooter,
} from "../../../UI/Auth";
import FormRowVertical from "../../../UI/form/form-row";
import Input from "../../../UI/form/input/input";
import Button from "../../../UI/button";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { handleLogin } from "../../../services/apiAuth";

function LoginContainer() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      email: "benjamin_anderson@gmail.com",
      password: "pass1234",
    },
  });

  const { mutate } = useMutation({
    mutationFn: handleLogin,
    mutationKey: ["login"],
    onSuccess: (data) => {
      if (!data) return;
      // console.log(data);
      toast("deneme");
      navigate("/");

      // login(data.data.data.user, data.data.token);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function handleSubmitForm(data) {
    mutate(data);
  }

  return (
    <StyledContainer variation="md">
      <StyledAuthHead>
        <CiLogin />
        <strong>Welcome!</strong>
        <span>Sign into your account</span>
      </StyledAuthHead>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormRowVertical label="Email">
          <Input id="email" type="email" {...register("email")} />
          <IoMailOpenOutline />
        </FormRowVertical>
        <FormRowVertical label="Password">
          <Input
            id="password"
            {...register("password")}
            type={`${showPassword ? "text" : "password"}`}
          />
          <AiFillEye onClick={() => setShowPassword((prev) => !prev)} />
        </FormRowVertical>
        <FormRowVertical>
          <NavLink to="/forgetPassword">Forget Password?</NavLink>
          <Button variation="blue">Login</Button>
        </FormRowVertical>
      </form>
      <StyledFooter>
        <p>Dont you have an account ?</p>
        <NavLink to="/signup">Sign up now</NavLink>
      </StyledFooter>
    </StyledContainer>
  );
}

export default LoginContainer;
