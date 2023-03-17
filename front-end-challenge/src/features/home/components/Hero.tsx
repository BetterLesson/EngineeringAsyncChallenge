import styles from './hero.module.css'
import logo from '/BL_LogoBasic.png'

export const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <div className='max-w-5xl mx-auto mt-32 flex flex-col justify-between h-1/2'>
            <div>
              <img src={logo} alt='BetterLesson Logo' className='w-24' />
              <h1 className='text-white font-semibold text-6xl'>
                BetterLesson
                <br />
                Professional Coaching
              </h1>
              <h2 className='text-white uppercase tracking-widest text-2xl mt-6'>
                Professional Coach Seminars & Mentorship
              </h2>
            </div>
            <button className='bg-blue-700 text-white px-8 py-4 font-semibold text-lg w-fit'>
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
