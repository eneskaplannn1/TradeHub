import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { IoPersonCircleSharp, IoMailOpenOutline } from "react-icons/io5";
import { StyledAuthHead, StyledContainer } from "../../../UI/Auth";
import FormRowVertical from "../../../UI/form/form-row";
import Input from "../../../UI/form/input/input";
import Button from "../../../UI/button";

function SignUpContainer() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledContainer variation="md">
      <StyledAuthHead>
        <IoPersonCircleSharp />
        <strong>Create account!</strong>
      </StyledAuthHead>
      <form>
        <FormRowVertical label="Name">
          <Input id="name" type="text" />
          <BsPerson />
        </FormRowVertical>
        <FormRowVertical label="Email">
          <Input id="email" type="email" />
          <IoMailOpenOutline />
        </FormRowVertical>
        <FormRowVertical label="Password">
          <Input id="password" type={`${showPassword ? "text" : "password"}`} />
          <AiFillEye onClick={() => setShowPassword((prev) => !prev)} />
        </FormRowVertical>
        <Button variation="blue">Create Account</Button>
      </form>
    </StyledContainer>
  );
}

export default SignUpContainer;
