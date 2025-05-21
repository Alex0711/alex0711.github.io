import React from "react";

export default function ErrorMessaje({ message }) {
  return <p className="text-red-600 absolute left-0 -mt-6"> {message} </p>;
}
