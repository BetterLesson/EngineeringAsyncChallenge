import { Table } from 'src/components/table/Table'
import coaching from '/public/coaching.png'

const CURRENT_COACHES = [
  {
    name: 'Jessica D.',
    availableStart: '11/6/22',
    industry: 'Professional Services',
  },
  {
    name: 'David F.',
    availableStart: '8/5/21',
    industry: 'Sports/Fitness',
  },
  {
    name: 'Keir Y.',
    availableStart: '4/12/22',
    industry: 'E-Sports',
  },
]

const HEADERS = ['Coach Name', 'Available Starting', 'Industry']

export const CurrentCoaches = () => {
  return (
    <div className='grid grid-cols-2'>
      <img className='h-full w-full object-cover' src={coaching} alt='' />
      <div className='bg-gray-100'>
        <div className='w-5/6 mx-auto mt-32'>
          <h3 className='text-blue-600 font-semibold text-5xl pl-10'>Current Coaches</h3>
          <Table
            headers={HEADERS}
            data={CURRENT_COACHES}
            containerClassName='bg-white pt-4 rounded-lg mt-12'
            headerClassName='px-8 pb-4'
            rowClassName='px-8 py-4'
          />
        </div>
      </div>
    </div>
  )
}
