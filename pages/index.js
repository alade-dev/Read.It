import { Text } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Library from './Library';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Read.It</title>
        <meta name="description" content="Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Header />
        {/* <Library /> */}
      </main>

      <footer>
        <Text textAlign={'center'}>Read.It &copy;2022 All right reserved</Text>
      </footer>
    </div>
  );
}
