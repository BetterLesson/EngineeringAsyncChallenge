import blIcon from '../../assets/images/BL_LogoBasic.png';

const Nav = () => {
  return (
    <section id="navigation">
      <div className="py-5">
        <div className="flex">
          <img
            src={blIcon}
            className="h-5"
            alt="BetterLesson Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Nav;
