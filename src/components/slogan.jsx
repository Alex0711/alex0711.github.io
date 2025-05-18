import TypingEffect from "common/typingEffect";
import bgImage from "assets/images/laptop.jpeg";
const Slogan = ({ headerHeight }) => {
  console.log("headerHeight", headerHeight);
  return (
    <section
      className="h-screen flex w-full"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      <h2 className="text-[2rem] md:text-[3rem] md:text-[4rem] relative font-bold w-full h-full lg:w-[50%] lg:p-12">
        <div className="relative w-full lg:bg-none lg:bg-primary rounded-2xl shadow-2xl p-6 h-full flex flex-col lg:justify-center overflow-hidden flex flex-col justify-end">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl lg:hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
          <div className="z-10 block ">
            <div>
              <p className="bg-white lg:bg-primary rounded-2xl px-2 inline-block">
                <TypingEffect text="Be seen." speed={100} />
              </p>
            </div>
            <div>
              <p className="bg-white lg:bg-primary rounded-2xl px-2 inline-block ml-8">
                <TypingEffect text="Be chosen." speed={100} />
              </p>
            </div>
          </div>
        </div>
      </h2>
      <div className="hiden lg:block lg:w-[50%] lg:h-[100%] lg:p-12">
        <div
          className="w-full h-full bg-cover bg-center rounded-2xl shadow-2xl"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </div>
    </section>
  );
};

export default Slogan;
