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
    countryCode: yup.string(),
    phone: yup.string(),
    email: yup.string().email("Invalid email format"),
    message: yup.string(),
  })
  .test("at-least-one", "Enter a phone number or an email.", (value) => {
    return !!value.phone || !!value.email;
  });

const ContactForm = ({ lineRef }) => {
  const sheetUrl = process.env.REACT_APP_SHEET_URL;
  const [enableButton, setEnableButton] = useState(true);
  const { setCurrentAlert } = useAlert();

  // const ipData = getIPData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setValue,
    reset,
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
      .then((response) => {
        reset();
        if (response.status !== 200 || response.ok !== true) {
          throw new Error("Network response was not ok");
        }
        setCurrentAlert({
          message: "We will contact you shortly.",
          type: "success",
        });
      })
      .catch((err) => {
        setEnableButton(true);
        setCurrentAlert({
          message:
            "Oops! Something went wrong. Try again later or reach us on Instagram or WhatsApp.",
          type: "error",
        });
      });
  };
  return (
    <form
      ref={lineRef}
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full lg:w-[45%]"
    >
      <h3 className="mb-6">
        Alternatively, you can leave us a message, and we will get back to you
        as soon as possible
      </h3>
      <PhoneNumberInput register={register} setValue={setValue} />
      {errors?.phone && <ErrorMessaje message={errors.phone.message} />}

      <div className="flex flex-col">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
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
        <label htmlFor="message" className="font-bold">
          Do you have any question or idea?
        </label>
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
