import PhoneNumberInput from "./phoneNumberInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  phone: yup.string(),
  email: yup.string().email("Invalid email format"),
}).test("at-least-one", "Enter a phone number or an email.", (value) => {
  return !!value.phone || !!value.email;
});

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, clearErrors  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full lg:w-[45%]"
    >
      <h3>Alternatively, you can leave us a message, and we will get back to you as soon as possible</h3>
      <PhoneNumberInput register={register} />
      {errors?.phone && <p className="text-red-600 absolute left-0 -mt-6">{errors.phone.message}</p>}

      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" 
          {...register("email")}
          placeholder="example@mail.com" 
          onChange={(e) => {
            clearErrors();
          }}  
        />
      </div>
      {errors?.email && <p className="text-red-600 absolute left-0 -mt-6">{errors.email.message}</p>}
      {errors[""] && <p className="text-red-600 absolute left-0 -mt-6">{errors[""].message}</p>}

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 w-full"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;