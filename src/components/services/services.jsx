import Service from "./service";

const Services = () => {
  const services = [
    {
      name: "Web Development",
      comment: "Website creation",
      description:
        "Creating websites with innovative strategies that deliver dynamic and engaging user experiences.",
      image: "web-development.jpg",
    },
    {
      name: "Creative Design",
      comment: "Tailored solutions",
      description:
        "Our creative design approach focuses on tailor-made solutions that align with your brand and objetives.",
      image: "web-development.jpg",
    },
    {
      name: "SEO Strategies",
      comment: "Visibility boost",
      description:
        "Strategies to improve your website's search engine ranking and attract more organic traffic.",
      image: "web-development.jpg",
    },
    {
      name: "E-commerce Solutions",
      comment: "Online sales",
      description:
        "Comprehensive e-commerce solutions to help you establish and grow your online store.",
      image: "web-development.jpg",
    },
    {
      name: "Maintenance & Support",
      comment: "Continuous improvement",
      description:
        "Reliable maintenance service to ensure your website remains secure, up-to-date, and performing optimally.",
      image: "web-development.jpg",
    },
  ];
  return (
    <section className="min-h-screen bg-secondary">
      <h2 className="text-title text-center mb-12">Services</h2>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:flex-wrap gap-y-8">
        {services.map((service) => (
          <Service service={service} key={service.name} />
        ))}
      </div>
    </section>
  );
};

export default Services;
