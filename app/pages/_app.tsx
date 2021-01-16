import * as React from 'react';
<<<<<<< HEAD
import '../styles/globals.css'

// dev
=======
>>>>>>> 336f9e385f9996805b9e97e38357a420f2a92a69
import { ChakraProvider } from '@chakra-ui/react'


// theme 
import customTheme from '../theme'
import '../styles/globals.css'


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
