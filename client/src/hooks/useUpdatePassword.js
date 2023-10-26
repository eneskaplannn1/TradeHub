import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { updateUserPassword } from "../services/apiUser";
import { toast } from "react-hot-toast";

function useUpdatePassword() {
  const { mutate, isLoading } = useMutation({
    mutationFn: updateUserPassword,
    mutationKey: ["update-user-pass"],
    onSuccess: () => {
      toast.success("User password updated successfully");
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const handleSubmitForm = function (data) {
    mutate({
      password: data.password,
      newPassword: data.newPassword,
    });
  };
  return {
    register,
    handleSubmit,
    handleSubmitForm,
    isLoading,
    errors,
    getValues,
  };
}

export default useUpdatePassword;
