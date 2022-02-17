// Theme color maker: https://themera.vercel.app/

import { Colors, extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.500', 'gray.50')(props),
      fontWeight: '300'
    }
  })
}

const colors: Colors = {
  primary: {
    '50': '#EAF2FB',
    '100': '#C4DAF3',
    '200': '#9DC2EB',
    '300': '#77AAE3',
    '400': '#5193DC',
    '500': '#2B7BD4',
    '600': '#2262AA',
    '700': '#1A4A7F',
    '800': '#113155',
    '900': '#09192A'
  },
  accent: {
    '50': '#F0EEF7',
    '100': '#D4CFE8',
    '200': '#B8B0D9',
    '300': '#9C90CA',
    '400': '#8071BC',
    '500': '#6452AD',
    '600': '#50428A',
    '700': '#3C3168',
    '800': '#282145',
    '900': '#141023'
  },
  blueGrey: {
    '50': '#F0EEF7',
    '100': '#D4CFE8',
    '200': '#B8B0D9',
    '300': '#9C90CA',
    '400': '#8071BC',
    '500': '#6452AD',
    '600': '#50428A',
    '700': '#3C3168',
    '800': '#282145',
    '900': '#141023'
  },
  gray: {
    '300': '#A19FBC',
    '400': '#8784A9',
    '500': '#6C6996',
    '600': '#575478',
    '700': '#413F5A',
    '800': '#2B2A3C',
    '900': '#16151E'
  },
  white: '#FFF',
  black: '#2B2A3C'
}

const fonts = {
  body: "'Oxanium', cursive",
  heading: "'Titillium Web', sans-serif"
}

const shadows = {
  outline: 'none'
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const components = {
  Badge: {
    baseStyle: () => ({
      fontWeight: 'normal'
    })
  },
  Button: {
    baseStyle: () => ({
      fontWeight: 400
    })
  },
  Input: {
    baseStyle: () => ({
      background: 'red.500'
    }),
    defaultProps: {
      focusBorderColor: 'primary.200'
    }
  },
  Textarea: {
    defaultProps: {
      focusBorderColor: 'primary.200'
    }
  },
  Select: {
    defaultProps: {
      focusBorderColor: 'primary.200'
    }
  },
  Heading: {
    baseStyle: {
      fontWeight: 400
    },
    variants: {
      line: (props) => ({
        display: 'inline-block',
        position: 'relative',
        zIndex: 1,
        _after: {
          backgroundColor: mode('primary.400', 'primary.200')(props),
          content: '""',
          display: 'block',
          height: '13px',
          borderRadius: 2,
          position: 'absolute',
          bottom: 0,
          left: 0,
          opacity: 0.5,
          zIndex: -1,
          w: 'full'
        }
      })
    }
  },
  Text: {
    baseStyle: {
      fontWeight: 300
    },
    variants: {
      highlight: (props) => ({
        display: 'inline-block',
        position: 'relative',
        zIndex: 1,
        _after: {
          backgroundColor: mode('primary.400', 'primary.200')(props),
          content: '""',
          display: 'block',
          height: '13px',
          borderRadius: 2,
          position: 'absolute',
          bottom: 0,
          left: 0,
          opacity: 0.5,
          zIndex: -1,
          w: 'full'
        }
      })
    }
  }
}
const theme = extendTheme({
  colors,
  config,
  fonts,
  shadows,
  styles,
  components
})

export default theme
