/* eslint-disable react/no-danger */
import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

import theme from '../utils/theme'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="icon" type="image/png" href="../images/BL_LogoBasic.png" sizes="16x16" />
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400&family=Oxanium:wght@300;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <title>BetterLesson</title>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
