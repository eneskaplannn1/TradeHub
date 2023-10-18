import { StyledForm } from "../../UI/account";
import Button from "../../UI/button";
import FormRowVertical from "../../UI/form/form-row";
import Input from "../../UI/form/input/input";

function UpdatePasswordForm() {
  //   const user = useSelector((store) => store.auth.user);
  //   const { mutate, isLoading } = useMutation({
  //     mutationFn: updateUserData,
  //     mutationKey: ["updae-user"],
  //     onSuccess: () => {
  //       toast.success("user updated successfully");
  //     },
  //   });

  //   const {
  //     handleSubmit,
  //     register,
  //     formState: { errors },
  //   } = useForm({
  //     defaultValues: {
  //       name: user.name,
  //       email: user.email,
  //     },
  //   });

  //   const handleSubmitForm = function (data) {
  //     mutate({ data, userId: user._id });
  //   };

  return (
    <StyledForm>
      <h3>Update User Password</h3>
      <form>
        <FormRowVertical label="Current Password">
          <Input
            variation="update"
            type="password"
            placeholder="Enter your current password"
          />
        </FormRowVertical>
        <FormRowVertical label="New Password">
          <Input
            variation="update"
            type="password"
            placeholder="Enter your new password"
          />
        </FormRowVertical>
        <FormRowVertical label="Confirm New Password">
          <Input
            variation="update"
            type="password"
            placeholder="Confirm your new password"
          />
        </FormRowVertical>
        <Button variation="orange">Update Password</Button>
      </form>
    </StyledForm>
  );
}

export default UpdatePasswordForm;
