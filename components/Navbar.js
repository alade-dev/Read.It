import { Box, Button, Drawer, Flex, Link } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import RI from '../assets/RI-removebg-preview.png';

function Navbar() {
  return (
    <>
      {/* For base and medium screens */}
      <Box
        style={{
          backgroundColor: '#fffff',
          webkitBackdropFilter: 'blur(5px)',
          backdropFilter: 'blur(5px)',
          zIndex: '2',
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
          <Button
            color={'black'}
            bgColor="white"
            boxShadow="md"
            p="6"
            rounded="md"
            border={1}
          >
            Connect Wallet
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
