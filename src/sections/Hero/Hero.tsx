import blIcon from '../../assets/images/BL_LogoBasic.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="relative h-64">
        <div className="absolute inset-0 bg-cover bg-center bg-hero-image"></div>
        <div className="absolute inset-0 bg-blue-800 bg-opacity-50">
          <div className="py-10 px-6">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
