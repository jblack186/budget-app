import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react'


// theme 
import customTheme from '../theme'

type AppProps = {
  Component: String;
  pageProps: String;
}

const MyApp: React.FC<{ Component, pageProps }> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS={true} theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>

  )
}

export default MyApp
