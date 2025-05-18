import React from "react";

export default function PostButton({ enableButton }) {
  return (
    <button
      disabled={!enableButton}
      type="submit"
      className={`bg-details text-background font-bold py-2 rounded w-full ${
        enableButton ? "cursor-pointer" : "cursor-not-allowed"
      }`}
    >
      Send
    </button>
  );
}
