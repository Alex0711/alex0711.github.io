import Brand from "./brand";
import ContactForm from "./contactForm";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between px-4 py-8 lg:px-8 bg-background text-quaternary dark:text-primary">
      <Brand />
      <ContactForm />
    </footer>
  );
};

export default Footer;
