import React from "react";

export default function PostButton({ enableButton }) {
  return (
    <button
      disabled={!enableButton}
      type="submit"
      className={`bg-blue-600 text-white py-2 rounded w-full ${
        enableButton ? "cursor-pointer hover:bg-blue-700" : "cursor-not-allowed"
      }`}
    >
      Send
    </button>
  );
}
