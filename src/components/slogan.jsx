import TypingEffect from "common/typingEffect";
const Slogan = () => {
  return (
    <section>
      <h2 className="text-slogan text-primary font-bold">
        <TypingEffect text="Be seen. Be chosen." speed={100} />
      </h2>
    </section>
  );
};

export default Slogan;
