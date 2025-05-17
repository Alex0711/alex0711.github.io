import React from "react";

export default function PostButton({ enableButton }) {
  return (
    <button
      disabled={!enableButton}
      type="submit"
      className={`bg-primary dark:bg-details text-background font-bold py-2 rounded w-full ${
        enableButton ? "cursor-pointer hover:bg-blue-700" : "cursor-not-allowed"
      }`}
    >
      Send
    </button>
  );
}
