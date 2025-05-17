const Service = ({ service }) => {
  return (
    <div className="flex flex-col lg:w-[45%]">
      <div className="flex flex-row justify-between items-baseline">
        <h3 className="text-subtitle">{service.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 hidden md:block">
          {service.comment}
        </p>
      </div>
      <div className="h-px w-full bg-gray-600 dark:bg-gray-400" />
      <p className="">{service.description}</p>
    </div>
  );
};
export default Service;
