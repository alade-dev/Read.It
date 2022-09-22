import { Box, Flex, Image, Link, Spacer, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import image from '../assets/unilorin.jpg';

import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// import Link from "next/link"

function Library() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [nfts, setNfts] = useState([]);

  const Web3Api = useMoralisWeb3Api();
  const { isInitialized } = useMoralis();

  const fetchAllNfts = async () => {
    const options = {
      chain: 'mumbai',
      address: '0x9d8643e9caA203555cDF7821cAEd52834790148b',
    };

    const polygonNFTs = await Web3Api.token.getNFTOwners(options);

    const tokenUri = polygonNFTs?.result?.map((data) => {
      const { metadata, owner_of, token_uri } = data;
      console.log('data ', data);
      return token_uri;
    });

    setNfts(tokenUri);
  };

  useEffect(() => {
    isInitialized && fetchAllNfts();
  }, [isInitialized]);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(2);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

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
            onClick={() => console.log(nfts)}
          >
            learning never ends.
          </Text>
        </Box>
        <Box
          mx={28}
          mt={12}
          display={'flex'}
          flexDirection="row"
          justifyContent={'space-around'}
        >
          {nfts ? (
            nfts.map((nft) => (
              <>
               <NextLink href={nft}>
                        <Link to={nft}>
                <Box
                  key={nft}
                  p={6}
                  boxShadow="base"
                  rounded="md"
                  border={1}
                  w={40}
                  h={60}
                  display={'flex'}
                  flexDirection="row"
                >
                  <Flex flexDirection={'column'} cursor="pointer">
                    <Document file={nft} onLoadSuccess={onDocumentLoadSuccess}>
                     
                          <Page
                            pageNumber={pageNumber}
                            height="300"
                            width="200"
                          />
                        
                    </Document>

                    {/* <Text
                      mt="34px"
                      fontWeight="semibold"
                      fontSize={'20px'}
                      textAlign={'left'}
                    >
                      Mayor
                    </Text> */}
                  </Flex>
                </Box>
                </Link>
                      </NextLink>
              </>
            ))
          ) : (
            <>No books yet</>
          )}
        </Box>
        ;
      </Box>
    </>
  );
}

export default Library;
