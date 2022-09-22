import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { MoralisProvider } from 'react-moralis';
import { NotificationProvider } from 'web3uikit';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      initializeOnMount
      appId={'TJC3pXyidspOnCMjsRsE08RwjNuUsxjD4WWDR7aq'}
      serverUrl={'https://9vntx0dutssr.usemoralis.com:2053/server'}
    >
      <ChakraProvider>
        <Component {...pageProps} />;
      </ChakraProvider>
    </MoralisProvider>
  );
}

export default MyApp;
