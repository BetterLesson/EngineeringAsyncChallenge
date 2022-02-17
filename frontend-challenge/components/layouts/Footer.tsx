import { Box, Container, Link, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'

export default function Footer() {
  const bg = useColorModeValue('gray.200', 'gray.800')

  return (
    <Box as="footer" alignItems="center" p={6} bg={bg}>
      <Container as={Stack} maxW="container.lg" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          dsfsdafdsafdas
        </SimpleGrid>
      </Container>
    </Box>
  )
}
