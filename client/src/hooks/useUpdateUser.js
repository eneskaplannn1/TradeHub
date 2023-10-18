import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { updateUserData } from "../services/apiUser";
import { toast } from "react-hot-toast";

function useUpdateUser() {
  const user = useSelector((store) => store.auth.user);
  const { mutate, isLoading } = useMutation({
    mutationFn: updateUserData,
    mutationKey: ["updae-user"],
    onSuccess: () => {
      toast.success("user updated successfully");
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const handleSubmitForm = function (data) {
    mutate({ data, userId: user._id });
  };

  return { handleSubmit, isLoading, handleSubmitForm, errors, register };
}

export default useUpdateUser;
