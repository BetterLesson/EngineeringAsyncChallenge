export const Footer = () => {
  return (
    <div className='flex w-full justify-between mx-auto w-3/4 my-12'>
      <div className='text-center'>
        <p className='uppercase font-semibold tracking-widest'>Email Address</p>
        <p className='text-sm'>hello@reallygreatsite.com</p>
      </div>
      <div className='text-center'>
        <p className='uppercase font-semibold tracking-widest'>Mailing Address</p>
        <p className='text-sm'>123 Anywhere St. Any City, ST 12345</p>
      </div>
      <div className='text-center'>
        <p className='uppercase font-semibold tracking-widest'>Phone Number</p>
        <p className='text-sm'>(123) 456-7890</p>
      </div>
    </div>
  )
}
