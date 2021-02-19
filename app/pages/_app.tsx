import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "next-auth/client";

// theme 
import customTheme from '../theme'
import '../styles/globals.css'


type AppProps = {
  Component: String;
  pageProps: String;
}

const MyApp: React.FC<{ Component, pageProps }> = ({ Component, pageProps }) => {


  return (
    <Provider session={pageProps.session}>

      <ChakraProvider resetCSS={true} theme={customTheme}>
        <Component {...pageProps} />
        
      </ChakraProvider>
     </Provider>

  )
}

export default MyApp
