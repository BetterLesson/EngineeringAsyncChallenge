import blIcon from '../../assets/images/BL_LogoBasic.png';

const Hero = () => {
  return (
    <section id="hero">
      <div className="relative h-72 min-[530px]:h-96 laptop:h-[30rem] flex items-center bg-hero bg-cover bg-center">
        <div className="absolute z-10 flex-1 left-5 tablet:left-10 ">
          <img
            src={blIcon}
            className="h-10 mb-4 tablet:h-20 laptop:h-28"
            alt="BetterLesson Logo"
          />
          <div className="mb-8 font-bold tracking-wider text-white">
            <div className="text-xl tablet:text-3xl laptop:text-5xl">
              <h1>BetterLesson</h1>
              <h1>Professional Coaching</h1>
            </div>

            <p className="text-xs font-light uppercase tablet:text-base laptop:text-2xl">
              Professional Coach Seminars & Mentorship
            </p>
          </div>
          <button className="px-6 py-2 text-white bg-blue-800 laptop:text-2xl">
            Register Now
          </button>
        </div>

        <div className="absolute top-0 left-0 z-0 w-full h-full bg-blue-800 opacity-40"></div>
      </div>
    </section>
  );
};

export default Hero;
