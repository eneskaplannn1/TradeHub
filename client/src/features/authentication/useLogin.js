import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { handleLogin } from "../../services/apiAuth";
import { logUserIn } from "./authSlice";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

let initial = true;

function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useSelector((store) => store.auth);

  if (user) navigate(location?.state?.from ? location.state.from : "/");

  useEffect(() => {
    if (initial && !user) {
      toast.success(
        "The initial login process may take up to 30 seconds due to the cloud provider.",
        {
          style: { fontSize: "20px", width: "450px" },
        }
      );
    }
    initial = false;
  }, [user]);

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
      dispatch(logUserIn(data?.data?.data?.user));
      navigate("/");
      toast.success("Logged in successfully");
    },
    onError: (err) => {
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
