import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  const bg = useColorModeValue('gray.200', 'gray.800')

  const renderContactBlock = (title, content) => (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Heading size="md" mb={2} fontWeight="bold">
        {title}
      </Heading>
      <Text fontSize="sm">{content}</Text>
    </Flex>
  )

  return (
    <Box as="footer" alignItems="center" p={6} bg={bg}>
      <Container as={Stack} maxW="container.lg" py={5}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {renderContactBlock('EMAIL ADDRESS', 'hello@greatsite.com')}
          {renderContactBlock('MAILING ADDRESS', '123 Anywhere St. Any City, ST 12345')}
          {renderContactBlock('PHONE NUMBER', '(123) 456-7890')}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
