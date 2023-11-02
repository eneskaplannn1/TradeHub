import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { updateUserData } from "../../services/apiUser";
import { toast } from "react-hot-toast";

function useUpdateUser() {
  const queryClient = useQueryClient();
  const user = useSelector((store) => store.auth.user);
  const { mutate, isLoading } = useMutation({
    mutationFn: updateUserData,
    mutationKey: ["update-user"],
    onSuccess: async () => {
      queryClient.invalidateQueries(["login"]);
      toast.success("user updated successfully");
    },
    onError: (err) => toast.error(err.message),
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
