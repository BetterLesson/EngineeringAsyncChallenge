import styles from './MailingList.module.css'
import { SyntheticEvent, useState } from 'react'
export const MailingList = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [industry, setIndustry] = useState('E-Sports')

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const result = { name, email, industry }
    console.log(result)
  }

  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        <h3 className='text-white font-semibold text-center text-4xl mt-8'>
          Join our mailing list
        </h3>
        <form
          className='p-8 pt-4 grid grid-cols-2 bg-zinc-300/75 mx-auto w-3/4 mt-4'
          onSubmit={(e) => onSubmit(e)}
        >
          <div className='text-lg'>
            <div className='flex flex-col'>
              <label className=''>Full Name</label>
              <input
                type='text'
                className='px-4 py-2'
                placeholder='Jane Doe'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex flex-col mt-2'>
              <label className=''>Email</label>
              <input
                type='text'
                className='px-4 py-2'
                placeholder='jane_doe@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col mt-2'>
              <label className=''>Industry</label>
              <select
                className='px-4 py-2'
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value='E-Sports'>E-Sports</option>
                <option value='Professional_Services'>Professional Services</option>
                <option value='Sports_Fitness'>Sports/Fitness</option>
              </select>
            </div>
          </div>
          <div className='text-center pt-8 px-4'>
            <p className='text-3xl'>
              Join our mailing to receive notifications about program availability and special
              discounts
            </p>
            <button className='bg-blue-700 text-white px-8 py-2 font-semibold text-lg w-fit mt-4'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
