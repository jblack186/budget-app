import * as React from 'react';
import '../styles/globals.css'

// dev
import { ChakraProvider } from '@chakra-ui/react'

type AppProps = {
  Component: String;
  pageProps: String;
}

const MyApp: React.FC<{ Component, pageProps }> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS={true} >
      <Component {...pageProps} />
    </ChakraProvider>

  )
}

export default MyApp
