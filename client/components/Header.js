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
import { RiCloseCircleLine } from 'react-icons/ri';
import {
  useMoralisFile,
  useMoralis,
  useWeb3ExecuteFunction,
} from 'react-moralis';
import Navbar from './Navbar';

function Header() {
  const Overlay = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { saveFile } = useMoralisFile();
  const { Moralis, account } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<Overlay />);
  const [fileList, setFileList] = React.useState();
  const finalRef = React.useRef(null);

  const onFileDrop = (event) => {
    const file = event.target.files[0];
    if (file) {
      const updateFiles = setFileList(fileList ? [...fileList, file] : [file]);
    }
  };
  const remove = (index) => {
    console.log(fileList.length + 'length of the file list');
    fileList.length >= 1
      ? setFileList(
          fileList.filter(function (e, i) {
            return i != index;
          })
        )
      : setFileList(null);
  };

  const mint = async (account, uri) => {
    let options = {
      contractAddress: '0x9d8643e9caA203555cDF7821cAEd52834790148b',
      functionName: 'safeMint',
      abi: [
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'string',
              name: 'uri',
              type: 'string',
            },
          ],
          name: 'safeMint',
          outputs: [],
          stateMutability: 'payable',
          type: 'function',
        },
      ],
      params: {
        to: account,
        uri: uri,
      },
      msgValue: Moralis.Units.ETH(0.001),
    };

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        alert('Succesful Mint');
        setFileList([]);
      },
      onError: (error) => {
        // alert(error.message);
        console.log(error);
      },
    });
  };

  const uploadNft = async (url) => {
    fileList.map(async (files, i) => {
      const file = new Moralis.File(files.name, files);
      await file.saveIPFS();
      console.log(file.ipfs(), file.hash());
      await mint(account, file.ipfs());
    });
  };

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
          zIndex: -1,
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
              Discover how user can Mint NFT over Blockchain in seconds. Reading
              makes understanding easy and learning never ends
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
                    <Box>
                      <label htmlFor="upload">
                        <Flex
                          cursor={'pointer'}
                          direction={'column'}
                          alignItems={'center'}
                          border={3}
                          boxShadow="xs"
                          py={6}
                        >
                          <label htmlFor="upload">
                            <Image
                              src={file}
                              alt="img"
                              cursor={'pointer'}
                              mt={6}
                            />
                          </label>
                          <label htmlFor="upload">
                            <Box
                              cursor={'pointer'}
                              mt={10}
                              width="160px"
                              height="50px"
                              alignContent={'center'}
                              textAlign={'center'}
                              color={'White'}
                              fontWeight={600}
                              bgColor="#805df2"
                              boxShadow="base"
                              _hover={{
                                background: '#805df2',
                                color: 'white',
                              }}
                              p="3"
                              rounded="lg"
                              border={1}
                            >
                              Upload Book
                            </Box>
                            <Text
                              mt={3}
                              fontSize={'16px'}
                              fontWeight={400}
                              textAlign={'center'}
                            >
                              Ready
                            </Text>
                          </label>
                          <input
                            type={'file'}
                            style={{
                              opacity: 0,
                            }}
                            multiple
                            id="upload"
                            onChange={onFileDrop}
                          />
                        </Flex>
                      </label>
                    </Box>

                    {fileList ? (
                      fileList.map((file, i) => (
                        <Box mt={4} boxShadow={'xs'} key={i}>
                          <Flex
                            p={2}
                            mt={4}
                            justifyContent={'space-between'}
                            flexDirection={'row'}
                            alignItems={'center'}
                          >
                            <Text>{file.name}</Text>

                            <RiCloseCircleLine
                              color="red"
                              cursor={'pointer'}
                              onClick={() => remove(i)}
                            />
                          </Flex>
                        </Box>
                      ))
                    ) : (
                      <Text>No fIle</Text>
                    )}
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={6}
                      p="6"
                      rounded="md"
                      border={1}
                      onClick={onClose}
                    >
                      Close
                    </Button>
                    <Button
                      colorScheme={'green'}
                      p="6"
                      rounded="md"
                      border={1}
                      onClick={uploadNft}
                    >
                      Confirm
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
            whileHover={{ scale: 1.1, rotate: 0 }}
            zIndex={-100}
          >
            <Image src={hero} alt="hero's png" />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
