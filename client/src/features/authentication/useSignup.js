import { handleSignUp } from "../../../services/apiAuth";
import { logUserIn } from "../../../features/auth/authSlice";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function useSignUp() {
  const queryClient = useQueryClient();
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
    onSuccess: async (data) => {
      toast.success("Your account created successfully ");
      dispatch(logUserIn(data.data.newUser));
      await queryClient.invalidateQueries(["login"]);
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmitForm = function (data) {
    mutate(data);
  };
  return { errors, handleSubmit, handleSubmitForm, register, isLoading };
}

export default useSignUp;
