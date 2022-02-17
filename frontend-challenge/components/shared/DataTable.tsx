import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export default function DataTable({ headers, data, dataKey = 'id' }) {
  return (
    <Box mt={8} bg="white" p={8}>
      <Flex mb={4}>
        {headers.map((header) => (
          <Box flex={1} fontWeight="bold" key={header.key}>
            {header.label}
          </Box>
        ))}
      </Flex>
      {data.map((item) => (
        <Flex
          key={item[dataKey]}
          my={6}
          py={3}
          borderBottomColor="gray.200"
          borderBottomWidth={1}
          borderBottomStyle="solid"
        >
          {headers.map((header) => (
            <Box key={header.key} flex={1}>
              {item[header.key] || ''}
            </Box>
          ))}
        </Flex>
      ))}
    </Box>
  )
}
