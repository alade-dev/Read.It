import { Box, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

function Library() {
  return (
    <>
      <Box bg="whiteAlpha.300" position="relative">
        <Box
          alignItems="center"
          justifyContent="center"
          color={'black'}
          bgColor="white"
          _hover={{
            background: 'white',
            color: '#805df2',
          }}
          boxShadow="base"
          p="6"
          rounded="md"
          border={1}
          width={32}
          top={10}
          left={40}
          position="absolute"
        >
          <NextLink href="/" passHref>
            <Link to={'/'}>
              {' '}
              <FaArrowLeft
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </Link>
          </NextLink>
        </Box>

        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          paddingX="20px"
        >
          <Text
            color="#805df2"
            fontWeight={800}
            marginBottom="10px"
            fontSize={{ base: '24px', md: '50px', lg: '50px' }}
          >
            Recent Books
          </Text>
          <Text
            fontSize={16}
            color="Black"
            fontWeight={600}
            marginBottom="30px"
            textAlign="center"
            paddingX="15px"
          >
            learning never ends.
          </Text>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
}

export default Library;
