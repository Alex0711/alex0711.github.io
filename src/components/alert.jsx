import React, { useEffect } from "react";
import { useAlert } from "context/alertContext";

export default function Alert() {
  const { currentAlert, setCurrentAlert } = useAlert();

  useEffect(() => {
    if (currentAlert) {
      const timer = setTimeout(() => {
        setCurrentAlert(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentAlert]);
  return (
    <>
      {currentAlert && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 text-center ${
            currentAlert.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {currentAlert.message}
        </div>
      )}
    </>
  );
}
