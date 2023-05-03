import { Controller, useForm } from "react-hook-form";
import Form from "../form";
import FormInput from "../form-input";
import FormButton from "../form-button";
import { useState } from "react";
import Rating from "../rating";

function FormReview({
  title = "Отзыв о товаре",
  productId,
  setProduct,
  putPostComment,
}) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  const handleSubmitFormReview = (data) => {
    putPostComment(productId, data);
    reset();
  };

  const textRegister = register("text", {
    required: {
      value: true,
      message: "Обязательное поле",
    },
  });

  return (
    <>
      <h2>{title}</h2>
      <Controller
        render={({ field }) => (
          <Rating
            currentRating={field.value}
            setCurrentRating={field.onChange}
            isEditable
            error={errors.rating}
          />
        )}
        name="rating"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Укажите рейтинг",
          },
        }}
      />

      <Form handleFormSubmit={handleSubmit(handleSubmitFormReview)}>
        <FormInput
          {...textRegister}
          typeTag="textarea"
          id="text"
          placeholder="Напишите текст отзыва"
        />
        {errors?.text && (
          <p className="errorMessage">{errors?.text?.message}</p>
        )}
        <FormButton type="submit" color="pramary">
          Отправить отзыв
        </FormButton>
      </Form>
    </>
  );
}
export default FormReview;
