import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReview } from "../services/apiReviews";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";

function useCreateReviews({ onCloseModal, productData }) {
  const queryClient = useQueryClient();
  const user = useSelector((store) => store.auth.user);
  const [rating, setRating] = useState();
  const handleRating = function (reviewRating) {
    setRating(reviewRating);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationKey: ["create-review"],
    mutationFn: createReview,
    onSuccess: async () => {
      toast.success("You successfully commented on the product");
      await queryClient.invalidateQueries(["reviews"]);
      await queryClient.invalidateQueries(["product", productData._id]);

      onCloseModal();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmitForm = function (data) {
    if (!rating)
      return toast.error("Cannot create a review .Please rate the product");
    mutate({
      ...data,
      rating,
      product: productData._id,
      customer: user._id,
    });
  };

  return { handleSubmitForm, handleSubmit, handleRating, register, errors };
}

export default useCreateReviews;
