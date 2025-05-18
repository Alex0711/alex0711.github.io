import Brand from "./brand";
import ContactForm from "./contactForm";

const Footer = () => {
  return (
    <footer className="p-6">
      <div className="flex flex-col lg:flex-row justify-between bg-primary p-6 rounded-2xl shadow-2xl">
        <Brand />
        <ContactForm />
      </div>
    </footer>
  );
};

export default Footer;
