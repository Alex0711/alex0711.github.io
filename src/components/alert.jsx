import React, { useEffect } from "react";
import { useAlert } from "context/alertContext";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Alert({ headerHeight }) {
  let { currentAlert, setCurrentAlert } = useAlert();

  // useEffect(() => {
  //   if (currentAlert) {
  //     const timer = setTimeout(() => {
  //       setCurrentAlert(nulcurrentAlertl);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [currentAlert]);
  return (
    <>
      {currentAlert && (
        <div
          className={`fixed flex justify-between left-1/2 transform -translate-x-1/2 min-w-[45%] text-center p-2 rounded text-white z-20 ${
            currentAlert.type === "success"
              ? "bg-details"
              : "bg-red-600 text-red-800"
          }`}
          style={{ marginTop: `${headerHeight + 16}px` }}
        >
          <p>{currentAlert.message}</p>
          <div className="relative">
            <button
              className="rounded-full flex items-start justify-end"
              onClick={() => setCurrentAlert(null)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
