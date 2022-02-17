import { Box, Button, Container, Flex, Heading, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import MailingListForm from './mailinglist/MailingListForm'

export default function MailingList() {
  return (
    <Box
      bg="url(/images/mailinglist.png) no-repeat center center / cover"
      _before={{
        content: '""',
        h: '100%',
        w: 'full',
        pos: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.8,
        bg: 'primary.500',
        zIndex: -1
      }}
      pos="relative"
      overflow="hidden"
      zIndex={1}
      p={12}
    >
      <Container maxW="container.lg" centerContent>
        <Heading color="gray.50" mb={8}>
          Join our mailing list
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} my={8} bg="whiteAlpha.700" borderRadius={5} p={8}>
          <Flex p={4} flexDir="column">
            <MailingListForm />
          </Flex>
          <Flex p={4} flexDir="column" alignItems="center" justifyContent="center">
            <Text fontSize="xl">
              Join our mailing to receive notifications about program availability and special
              discounts.
            </Text>
            <Box>
              <Button
                colorScheme="primary"
                variant="solid"
                size="lg"
                mt={4}
                rightIcon={<Icon as={FiChevronRight} />}
              >
                Sign Up
              </Button>
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
