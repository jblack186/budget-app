import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
// theme 
import customTheme from '../components/theme';
import '../scss/default.scss';


const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>

  )
}

export default MyApp;
