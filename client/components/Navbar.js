import { Box, Button, Drawer, Flex, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import RI from '../assets/RI-removebg-preview.png';
import { ConnectButton } from 'web3uikit';
import { useMoralis } from 'react-moralis';
function Navbar() {
   const { Moralis, account, isAuthenticated } = useMoralis();
  return (
    <>
      {/* For base and medium screens */}
      <Box
        style={{
          backgroundColor: '#fffff',
          webkitBackdropFilter: 'blur(5px)',
          // backdropFilter: 'blur(5px)',
          zIndex: 200,
        }}
        position="fixed"
        top="0"
        width="100%"
      >
        <Flex
          px="80px"
          justifyContent="space-between"
          sx={{
            py: '10px',
            alignItems: 'center',
          }}
        >
          <Link to={'/'}>
            <Image width="80px" height="50px" src={RI} alt="ReadIt's Logo" />
          </Link>

          {/* <Text>{account}</Text> */}
          {/* <Button
            color={'black'}
            bgColor="white"
            boxShadow="md"
            p="6"
            rounded="md"
            border={1}
          >
            Connect Wallet
          </Button> */}
          {/* {isAuthenticated ? <ConnectButton /> : <>connected</>} */}
          <ConnectButton style={{zIndex:200}}/>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
