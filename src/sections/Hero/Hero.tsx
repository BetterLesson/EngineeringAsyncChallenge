import blIcon from '../../assets/images/BL_LogoBasic.png';

const Hero = () => {
  return (
    <section id="hero">
      <div className="relative flex bg-hero bg-cover bg-center ">
        <div className="py-6 px-6 z-10 flex-1">
          <img
            src={blIcon}
            className="h-10 mb-4"
            alt="BetterLesson Logo"
          />
          <div className="text-white font-bold tracking-wider mb-4">
            <div className="text-xl ">
              <h1>BetterLesson</h1>
              <h1>Professional Coaching</h1>
            </div>

            <p className="font-light text-xs uppercase">
              Professional Coach Seminars & Mentorship
            </p>
          </div>
          <button className="bg-blue-800 px-4 py-2 text-white">
            Register Now
          </button>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-blue-800 opacity-40 z-0"></div>
      </div>
    </section>
  );
};

export default Hero;
