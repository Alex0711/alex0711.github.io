import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Brand = () => {
  return (
    <div className="flex-col w-full lg:w-[45%]">
      <h3 className="text-xl font-semibold mb-4">We’re here to help!</h3>
      <p className="mb-6">
        Feel free to reach out to us through any of these channels:
      </p>
      <div className="">
        <a
          href="https://www.instagram.com/alejandrosenger"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-details dark:hover:text-details transition flex flex-row items-center gap-2"
        >
          <FaInstagram />
          instagram.com/visibility-theory
        </a>
        <a
          href="mailto:alex.senger@hotmail.com"
          aria-label="Correo"
          className="hover:text-details dark:hover:text-details transition flex flex-row items-center gap-2"
        >
          <FaEnvelope />
          visibility_theory@gmail.com
        </a>
        <a
          href="https://wa.me/351964193061"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-details dark:hover:text-details transition flex flex-row items-center gap-2"
        >
          <FaWhatsapp />
          +351 964193061
        </a>
      </div>
    </div>
  );
};

export default Brand;
