import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'next-auth/client'
// theme 
import customTheme from '../theme'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'



const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>

  )
}

export default MyApp
