import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import headerBackground from '../assets/headerBackground.png';
import hero from '../assets/backMan.png';
import file from '../assets/file.svg';
import Image from 'next/image';
import NextLink from 'next/link';

function Header() {
  const Overlay = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<Overlay />);
  const finalRef = React.useRef(null);

  return (
    <>
      <Box
        px={{ base: '20px', md: '20px', lg: '60px', xl: '60px', '2xl': '20vw' }}
        height={{
          base: '80%',
          md: '100%',
          lg: '100%',
          xl: '100%',
          '2xl': '100%',
        }}
        style={{
          backgroundImage: `url(${headerBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          marginTop: '-75px',
          marginBottom: '32px',
          paddingTop: '150px',
        }}
      >
        <Flex
          align="center"
          direction={{
            base: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          flexWrap="no-wrap"
          // as={motion.div}
        >
          <Box flex={1}>
            <Heading
              ref={finalRef}
              color="brand.100"
              size={{ base: '2xl', md: '2xl', lg: '2xl' }}
              sx={{
                fontWeight: '900',
                lineHeight: '67px',
              }}
              marginBottom={{ base: '26px', md: '26px', lg: '26px' }}
              as={motion.div}
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              The Decentralized Library
            </Heading>
            <Text
              fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}
              sx={{
                lineHeight: '25.89px',
              }}
              marginBottom={{ base: '48px', md: '48px', lg: '48px' }}
            >
              Discover how user can Mint NFT to over Blockchain in seconds.
              Reading makes understanding easy and learning never ends
            </Text>
            <Flex
              flex-wrap="wrap"
              direction={{ base: 'column', md: 'row', lg: 'row', xl: 'row' }}
              justifyContent="flex-start"
              gap="20px"
            >
              <Button
                color={'black'}
                bgColor="#805df2"
                _hover={{
                  background: 'white',
                  color: '#805df2',
                }}
                boxShadow="base"
                p="6"
                rounded="md"
                border={1}
                onClick={() => {
                  setOverlay(<Overlay />);
                  onOpen();
                }}
              >
                Upload Book
              </Button>
              <Modal
                finalFocusRef={finalRef}
                closeOnOverlayClick={false}
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset="slideInBottom"
              >
                {overlay}
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Upload File</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box p={18}>
                      <Flex direction={'column'}>
                        <Image src={file} alt="img" />
                        <Button
                          mt={12}
                          color={'White'}
                          bgColor="#805df2"
                          boxShadow="base"
                          _hover={{
                            background: '#805df2',
                            color: 'white',
                          }}
                          p="6"
                          rounded="lg"
                          border={1}
                        >
                          Upload Book
                        </Button>
                      </Flex>
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      ml={6}
                      p="6"
                      rounded="md"
                      border={1}
                      onClick={onClose}
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <Button
                color={'black'}
                bgColor="blackAlpha.100"
                _hover={{
                  background: 'blackAlpha.300',
                  color: '#805df2',
                }}
                boxShadow="base"
                p="6"
                rounded="md"
                border={1}
              >
                <NextLink href="/Library" passHref>
                  <Link to={'/Library'}> Go to Library</Link>
                </NextLink>
              </Button>
            </Flex>
          </Box>
          <Spacer flex={0.4} />
          <Box
            mt={6}
            display={{
              base: 'block',
              md: 'block',
              lg: 'block',
              xl: 'block',
              '2xl': 'block',
            }}
            flex={1.8}
            as={motion.div}
            whileHover={{ scale: 0.9, rotate: -10 }}
          >
            <Image src={hero} alt="hero's png" />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Header;