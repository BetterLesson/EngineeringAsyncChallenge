import { Box } from '@chakra-ui/react'
import React from 'react'

import Footer from './Footer'

export default function AppLayout({ children }) {
  return (
    <Box bg="gray.50">
      <Box>{children}</Box>
      <Footer />
    </Box>
  )
}
