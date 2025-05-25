import TypingEffect from "common/typingEffect";
import bgImage from "assets/images/laptop.jpeg";
const Slogan = ({ headerHeight }) => {
  return (
    <section
      className="h-screen flex w-full"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      <h2 className="text-[2rem] md:text-[3rem] md:text-[4rem] relative font-bold w-full h-full lg:w-[50%] lg:p-12">
        <div className="relative w-full lg:bg-none lg:bg-primary rounded-2xl custom-shadow p-6 h-full flex flex-col lg:justify-center overflow-hidden flex flex-col justify-end zoom-hover">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl lg:hidden mt-6"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
          <div className="z-10 block ">
            <div>
              <p className="bg-background lg:bg-primary rounded-2xl px-2 inline-block">
                <TypingEffect text="We build." speed={100} />
              </p>
            </div>
            <div>
              <p className="bg-background lg:bg-primary rounded-2xl px-2 inline-block ml-8">
                <TypingEffect text="You grow." speed={100} />
              </p>
            </div>
          </div>
        </div>
      </h2>
      <div className="hiden lg:block lg:w-[50%] lg:h-[100%] lg:p-12 zoom-hover">
        <div
          className="w-full h-full bg-cover bg-center rounded-2xl custom-shadow"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </div>
    </section>
  );
};

export default Slogan;
