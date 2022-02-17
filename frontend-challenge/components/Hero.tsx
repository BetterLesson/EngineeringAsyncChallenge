import { Text, Heading, Box, Image, Flex, Button, Icon } from '@chakra-ui/react'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <Box
      minH="auto"
      h="60vh"
      bg="url(/images/hero.png) no-repeat center center / cover"
      _before={{
        content: '""',
        h: '100%',
        w: 'full',
        pos: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.8,
        bg: 'primary.500'
      }}
      pos="relative"
      overflow="hidden"
      zIndex="1"
    >
      <Flex
        justifyContent="center"
        flexDir="column"
        maxWidth="container.md"
        pos="relative"
        p={8}
        h="full"
        m="0 auto"
      >
        <Box mb={4}>
          <Image src="/images/BL_LogoBasic.png" alt="Logo" maxW="100%" maxH={90} />
        </Box>
        <Box>
          <Heading size="3xl" color="gray.50" mb={2}>
            BetterLesson
          </Heading>
          <Heading size="2xl" color="gray.50" mb={2}>
            Professional Coaching
          </Heading>
          <Text color="gray.50">PROFESSIONAL COACH SEMINARS & MENTORSHIP</Text>
        </Box>
        <Box>
          <Button
            colorScheme="primary"
            variant="solid"
            size="lg"
            mt={4}
            rightIcon={<Icon as={FiChevronRight} />}
          >
            Register Now
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
