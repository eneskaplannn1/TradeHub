import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { handleLogin } from "../services/apiAuth";
import { logUserIn } from "../features/auth/authSlice";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "benjamin_anderson@gmail.com",
      password: "pass1234",
    },
  });

  const { isLoading, mutate } = useMutation({
    mutationFn: handleLogin,
    mutationKey: ["login"],
    onSuccess: (data) => {
      if (!data) return;
      // console.log(data.data.data.user);
      dispatch(logUserIn(data.data.data.user));
      navigate("/");
      toast.success("Logged in successfully");
    },
    onError: (err) => {
      // console.log(err.message);
      toast.error(err.message);
    },
  });

  function handleSubmitForm(data) {
    mutate(data);
  }
  return {
    register,
    handleSubmit,
    handleSubmitForm,
    errors,
    isLoading,
  };
}

export default useLogin;
