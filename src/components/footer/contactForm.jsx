import PhoneNumberInput from "./phoneNumberInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PostButton from "components/footer/postButton";
import ErrorMessaje from "components/footer/errorMessaje";
// import getIPData from "utils/getIP";
import { useAlert } from "context/alertContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    phone: yup.string(),
    email: yup.string().email("Invalid email format"),
  })
  .test("at-least-one", "Enter a phone number or an email.", (value) => {
    return !!value.phone || !!value.email;
  });

const ContactForm = () => {
  const sheetUrl = process.env.REACT_APP_SHEET_URL;
  const [enableButton, setEnableButton] = useState(true);
  const { setCurrentAlert } = useAlert();

  // const ipData = getIPData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    setEnableButton(false);
    // data["ip"] = ipData.ip;
    // data["country"] = ipData.country_name;
    // data["city"] = ipData.city;
    fetch(sheetUrl, {
      redirect: "follow",
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((response) => {
        setCurrentAlert({
          message: "We will contact you shortly.",
          type: "success",
        });
      })
      .catch((err) => {
        setEnableButton(true);
        setCurrentAlert({
          message:
            "Oops, something went wrong. Try again in a bit or drop us a message — we're here to help!",
          type: "error",
        });
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full lg:w-[45%]"
    >
      <h3>
        Alternatively, you can leave us a message, and we will get back to you
        as soon as possible
      </h3>
      <PhoneNumberInput register={register} />
      {errors?.phone && <ErrorMessaje message={errors.phone.message} />}

      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          {...register("email")}
          placeholder="example@mail.com"
          onChange={(e) => {
            clearErrors();
          }}
          className="text-black"
        />
      </div>
      {errors?.email && <ErrorMessaje message={errors.email.message} />}
      {errors[""] && <ErrorMessaje message={errors[""].message} />}

      <div className="flex flex-col">
        <label htmlFor="message">Do you have any question or idea?</label>
        <textarea
          id="message"
          name="message"
          className="rounded mb-6 text-black p-2"
          {...register("message")}
        ></textarea>
        <PostButton enableButton={enableButton} />
      </div>
    </form>
  );
};

export default ContactForm;
