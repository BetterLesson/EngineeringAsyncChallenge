import { Heading, SimpleGrid, Flex } from '@chakra-ui/react'

import React from 'react'

import coaches from '../utils/coaches'

import DataTable from './shared/DataTable'

export default function CurrentCoaches() {
  const headers = [
    { label: 'Coach Name', key: 'name' },
    { label: 'Available Starting', key: 'availableStart' },
    { label: 'Industry', key: 'industry' }
  ]

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <Flex
        bg="url(/images/coaching.png) no-repeat center center / cover"
        h={{ base: '50vh', lg: 'auto' }}
      />
      <Flex flexDir="column" p={8}>
        <Heading>Current Coaches</Heading>
        <DataTable headers={headers} data={coaches} />
      </Flex>
    </SimpleGrid>
  )
}
