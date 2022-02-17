import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import React from 'react'

import '../styles/app.scss'

import chakraUITheme from '../utils/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={chakraUITheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
