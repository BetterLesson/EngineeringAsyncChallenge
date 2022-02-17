import moment from 'moment'

export default [
  {
    id: 1,
    name: 'Jessica D.',
    availableStart: moment({ month: 11, day: 6, year: 2022 }).format('MM/DD/YY'),
    industry: 'Professional Services'
  },
  {
    id: 2,
    name: 'David F.',
    availableStart: moment({ month: 8, day: 5, year: 2021 }).format('MM/DD/YY'),
    industry: 'Sports/Fitness'
  },
  {
    id: 3,
    name: 'Keir Y.',
    availableStart: moment({ month: 4, day: 12, year: 2022 }).format('MM/DD/YY'),
    industry: 'E-Sports'
  }
]
