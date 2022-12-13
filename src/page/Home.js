import React, { useState } from 'react'
import { ImageBackground, ScrollView, Dimensions } from "react-native";
import styles from '../common/FormStyles'
import Images from '../common/Images'
import { useTranslation } from "react-i18next";
import Config from '../common/Config'
import HeaderBar from '../components/HeaderBar'
import { Box, Text, Image, Center, Button, ArrowForwardIcon, Heading, HStack, VStack, Input, SearchIcon } from "native-base";


const Home = () => {
    const { t } = useTranslation();
    const [fastTab, setFastTab] = useState('ongoing')


    return (
        <Box style={styles.container} pb='40'>

            <ScrollView>


                <Box
                    // source={Images.bodyBg}
                    style={{ paddingHorizontal: 10 }}
                >
                    <HeaderBar />

                    <VStack w="100%" space={5} alignSelf="center" >
                        <Input placeholder="Search People & Places" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<SearchIcon name="search" ml="2" />} InputRightElement={<SearchIcon name="search" mr="2" />} />
                    </VStack>

                    <Box style={{ marginVertical: 20 }}>
                        <ScrollView horizontal={true}>
                            <Center mx="3">
                                <Image h='10' w='10' source={{
                                    uri: Images.mobile
                                }} />
                                <Text fontSize="2xs" mt="3">Mobile</Text>
                            </Center>
                            <Center mx="3">
                                <Image h='10' w='10' source={{
                                    uri: Images.fashion
                                }} />
                                <Text fontSize="2xs" mt="3">Fashion</Text>
                            </Center>
                            <Center mx="3">
                                <Image h='10' w='12' source={{
                                    uri: Images.electronics
                                }} />
                                <Text fontSize="2xs" mt="3">Electronics</Text>
                            </Center>
                            <Center mx="3">
                                <Image h='10' w='10' source={{
                                    uri: Images.appliance
                                }} />
                                <Text fontSize="2xs" mt="3">Appliance</Text>
                            </Center>
                            <Center mx="3">
                                <Image h='10' w='10' source={{
                                    uri: Images.grocery
                                }} />
                                <Text fontSize="2xs" mt="3">Grocery</Text>
                            </Center>
                            <Center mx="3">
                                <Image h='10' w='10' source={{
                                    uri: Images.beauty
                                }} />
                                <Text fontSize="2xs" mt="3">Beauty</Text>
                            </Center>
                            <Center mx="3">
                                <Image h='10' w='10' source={{
                                    uri: Images.toys
                                }} />
                                <Text fontSize="2xs" mt="3">Toys</Text>
                            </Center>
                            <Center mx="3">
                                <Image h='10' w='10' source={{
                                    uri: Images.bestoffers
                                }} />
                                <Text fontSize="2xs" mt="3">Bestoffers</Text>
                            </Center>

                        </ScrollView>
                    </Box>
                    <Box rounded="lg" overflow="hidden">
                        <ImageBackground
                            source={Images.banner}
                            style={{ height: "auto", padding: "10px" }}
                        >
                            <HStack justifyContent='space-between' >
                                <Box alignItems="flex-start" w="70%">
                                    <Text fontSize="md" color="white" fontWeight="600">Find the Best Product for You on GK Dukan</Text>
                                    <Text fontSize="2xs" color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros, eget tincidunt ipsum eleifend ut. </Text>
                                    <Button size="sm" fontSize="2xs" mt="5" colorScheme="gray">SHOP NOW</Button>
                                </Box>
                                <Box mt="3">
                                    <Image size="xl" source={{
                                        uri: Images.banner_logo
                                    }} />
                                </Box>
                            </HStack>
                        </ImageBackground>
                    </Box>

                    <Center>
                        <Heading fontSize='2xl' bold mt='3' color='black'>New Collection</Heading>
                        <Box w="10%" rounded="md" borderWidth='1' borderColor='secondary.500' my="2"></Box>
                        <Text textAlign="center" fontSize="2xs" color='gray.600' mt='2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros</Text>
                    </Center>

                    <Box mt='7' mb='3'>
                        <ScrollView horizontal={true}>
                            <ImageBackground

                                source={Images.shart}
                                style={{ height: 151, width: 160, textAlign: 'center', marginRight: 5 }}
                            >
                                <Box mt='20' px="3">
                                    <Button size="sm" fontSize="2xs" mt="5">Name Product</Button>
                                </Box>
                            </ImageBackground>

                            <ImageBackground
                                source={Images.shart}
                                style={{ height: 151, width: 160, textAlign: 'center', marginRight: 5 }}
                            >
                                <Box mt='20' px="3">
                                    <Button size="sm" fontSize="2xs" mt="5" >Name Product</Button>
                                </Box>
                            </ImageBackground>

                            <ImageBackground
                                source={Images.shart}
                                style={{ height: 151, width: 160, textAlign: 'center', marginRight: 5 }}
                            >
                                <Box mt='20' px="3">
                                    <Button size="sm" fontSize="2xs" mt="5">Name Product</Button>
                                </Box>
                            </ImageBackground>
                        </ScrollView>
                    </Box>

                    <Box mt="3" rounded="lg" overflow="hidden" shadow={5} borderWidth="1" borderColor="white" bg="white" p="2">
                        <HStack space={2} >
                            <Image size="xl" source={{
                                uri: Images.balck_glas
                            }} />
                            <Box w="100%">
                                <Heading fontSize='2xl' bold color='black'>Best Item Since 2020</Heading>
                                <Text fontSize="xs" color='gray.600' mt="2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros, eget tincidunt ipsum eleifend ut orem ipsum dolor sit amet consectetur adipiscing elit Sed ullamcorper congue eros eleifend ut tincidunt ipsum .</Text>

                            </Box>
                        </HStack>
                    </Box>

                    <HStack justifyContent="center" my="5">
                        <Center mx="3">
                            <Text fontSize="xs" bold mt="3">2002</Text>
                            <Text fontSize="2xs" mt="3">Phaladora Founded</Text>
                        </Center>
                        <Center mx="3">
                            <Text fontSize="xs" bold mt="3">8900+</Text>
                            <Text fontSize="2xs" mt="3">Product Sold</Text>
                        </Center>
                        <Center mx="3">
                            <Text fontSize="xs" bold mt="3">3105+</Text>
                            <Text fontSize="2xs" mt="3">Best Reviews</Text>
                        </Center>
                    </HStack>
                    <Box rounded="lg" overflow="hidden">
                        <ImageBackground
                            source={Images.rectangle}
                            style={{ height: "auto", padding: "10px" }}
                        >
                            <HStack justifyContent='space-between' >
                                <Box w="70%">
                                    <Heading fontSize='2xl' bold color='white'>Best Seller Product</Heading>
                                    <Text fontSize="2xs" color='white' mt='2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros</Text>
                                </Box>

                                <Box><Button size="sm" colorScheme="secondary">
                                    SEE MORE
                                </Button></Box>
                            </HStack>

                            <ScrollView horizontal={true} >
                                <Box bg="white" mt="5" mr="3">
                                    <Image size="xl" source={{
                                        uri: Images.shop
                                    }} />
                                    <Box p="2">
                                        <Image source={{
                                            uri: Images.reting
                                        }} h="2" w="16" />
                                        <Text fontSize="2xs" mt="1">Nama Product</Text>
                                        <Text fontSize="2xs" mt="1" color='secondary.200'>RM50 <Text color='black'>RM40</Text></Text>
                                    </Box>
                                </Box>
                                <Box bg="white" mt="5" mr="3">
                                    <Image size="xl" source={{
                                        uri: Images.coffi
                                    }} />
                                    <Box p="2">
                                        <Image source={{
                                            uri: Images.reting
                                        }} h="2" w="16" />
                                        <Text fontSize="2xs" mt="1">Nama Product</Text>
                                        <Text fontSize="2xs" mt="1" color='secondary.200'>RM50 <Text color='black'>RM40</Text></Text>
                                    </Box>
                                </Box>
                                <Box bg="white" mt="5" mr="3">
                                    <Image size="xl" source={{
                                        uri: Images.coffi
                                    }} />
                                    <Box p="2">
                                        <Image source={{
                                            uri: Images.reting
                                        }} h="2" w="16" />
                                        <Text fontSize="2xs" mt="1">Nama Product</Text>
                                        <Text fontSize="2xs" mt="1" color='secondary.200'>RM50 <Text color='black'>RM40</Text></Text>
                                    </Box>
                                </Box>

                            </ScrollView>
                        </ImageBackground>
                    </Box>
                    {/* Product Section */}

                    <Center>
                        <Heading fontSize='2xl' bold mt='3' color='black'>Our Product</Heading>
                        <Box w="10%" rounded="md" borderWidth='1' borderColor='secondary.500' my="2"></Box>
                        <Box justifyContent="space-between" flexDirection="row">
                            <Button variant="link" colorScheme="singletons" onPress={() => (setFastTab('ongoing'))}>HOT</Button>
                            <Button variant="link" colorScheme="singletons" onPress={() => (setFastTab('upcoming'))}>ON SALE</Button>
                            <Button variant="link" colorScheme="singletons" onPress={() => (setFastTab('completed'))}>TRENDING NOW</Button>
                            <Button variant="link" colorScheme="singletons" onPress={() => (setFastTab('new'))}>NEW ARRIVAL</Button>
                        </Box>

                        {fastTab == 'ongoing' && (<Box><Text fontSize="2xl" color='white' >1</Text></Box>)}
                        {fastTab == 'upcoming' && (<Box><Text fontSize="2xl" color='white' >2</Text></Box>)}
                        {fastTab == 'completed' && (<Box><Text fontSize="2xl" color='white' >3</Text></Box>)}
                        {fastTab == 'new' && (<Box><Text fontSize="2xl" color='white' >4</Text></Box>)}
                    </Center>

                </Box>
            </ScrollView>

        </Box>
    )
}
export default Home