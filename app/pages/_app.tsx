import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
<<<<<<< HEAD
import { Provider } from 'next-auth/client'
=======
import { Provider } from 'next-auth'; 

>>>>>>> 3e662fa67b8fb934efce1c13960c2d56a9224677
// theme 
import customTheme from '../theme'
import '../styles/globals.css'



const MyApp = ({ Component, pageProps }) => {
  return (
<<<<<<< HEAD
    <Provider session={pageProps.session}>
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>

=======
    <Provider>
    <ChakraProvider resetCSS={true} theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </Provider>
>>>>>>> 3e662fa67b8fb934efce1c13960c2d56a9224677
  )
}

export default MyApp
