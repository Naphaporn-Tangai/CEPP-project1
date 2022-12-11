import React, { Component } from 'react';
import {
    Text,
    Avatar, Center,
    HStack, Box,
    VStack, IconButton,
    Icon, Badge, FlatList,
    Spacer, Button,
    ScrollView, Image, View
} from "native-base";
import { Feather, FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Video, Date, COLORS } from "../constants";
import { PagerView } from 'react-native-pager-view';
import { ProfileNav } from "../components"


export default function HomeCg() {

    return (
        <Box w="100%" safeAreaTop flex={1}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <VStack >
                <ProfileNav/>
                    <Box ml="6">
                        <HStack justifyContent="space-between" alignItems="center" marginBottom={3}>
                            <Text fontSize="15" fontFamily='Medium' color="#000"  >
                                4 ตุลาคม 2565
                            </Text>
                            <Spacer />
                            <Button onPress={() => console.log("ลงชื่อเข้างาน")}
                                size="sm" px={2} py={1.5} bg="#8AA7CF" _text={{ color: "#35609C", fontFamily: 'Medium' }}
                                rounded="25"
                                mr={6}
                            >
                                ลงชื่อเข้างาน</Button>
                        </HStack>
                        <FlatList
                            data={Date}
                            horizontal
                            showsHorizontalScrollIndicator={false}

                            renderItem={({
                                item
                            }) => <Box justifyContent='center' marginBottom={5} borderWidth="1" w="63" h="84" rounded="25" borderColor="#DDDFE1" marginRight={3} >

                                    <HStack justifyContent='center' >

                                        <VStack space={2.5} justifyContent='center' alignItems='center'>
                                            <Text color="#8AA7CF" fontFamily='Regular'>
                                                {item.date}
                                            </Text>
                                            <Text color="#35609C" fontFamily='Medium'>
                                                {item.numDate}
                                            </Text>
                                        </VStack>

                                    </HStack>

                                </Box>} keyExtractor={item => item.id} />
                    </Box>
                    <Box bg="#35609C" p="5" rounded="xl" marginBottom={5} mx="6">
                        <HStack justifyContent="space-between" alignItems="center">
                            <VStack>
                                <Text fontSize="md" fontFamily='Regular' color="#fff">
                                    นัดประชุมกับ CM
                                </Text>
                                <Text fontSize="sm" fontFamily='Regular' color="#fff">
                                    10:00AM - 11:00 AM
                                </Text>
                                <Text fontSize="sm" fontFamily='Regular' color="#fff" marginTop={5}>
                                    สถานที่: Online
                                </Text>
                            </VStack>
                            <Spacer />
                            <HStack >
                                <Badge
                                    colorScheme="success"
                                    alignSelf="center"
                                    marginTop={16}
                                    variant="solid"
                                    rounded="xl"
                                    _text={{
                                        color: "white",
                                        fontFamily: 'Regular'
                                    }} >
                                    พรุ่งนี้
                                </Badge>
                            </HStack>
                        </HStack>
                    </Box>
                    <Box justifyContent="center" alignItems="center" marginBottom={10}>
                        <HStack space={10} >
                            <VStack justifyContent="center" alignItems="center" space={1}>
                                <IconButton icon={<Icon size="19" as={Ionicons} name="bookmark" color="#35609C" />} bg="#EBF3FE" rounded="30" p={4} />
                                <Text color="#35609C" fontFamily='Regular' fontSize="12" >บทความ</Text>
                            </VStack>
                            <VStack justifyContent="center" alignItems="center" space={1}>
                                <IconButton icon={<Icon size="19" as={FontAwesome} name="play-circle" color="#35609C" pl={0.5} />} bg="#EBF3FE" rounded="30" p={4} />
                                <Text color="#35609C" fontFamily='Regular' fontSize="12" >สื่อความรู้</Text>
                            </VStack>
                            <VStack justifyContent="center" alignItems="center" space={1}>
                                <IconButton icon={<Icon size="19" as={FontAwesome5} name="clipboard-list" color="#35609C" pl={0.5} />} bg="#EBF3FE" rounded="30" p={4} />
                                <Text color="#35609C" fontFamily='Regular' fontSize="12" >เบิกอุปกรณ์</Text>
                            </VStack>
                            <VStack justifyContent="center" alignItems="center" space={1}>
                                <IconButton icon={<Icon size="19" as={FontAwesome} name="exclamation-triangle" color="#35609C" />} bg="#EBF3FE" rounded="30" p={4} />
                                <Text color="#35609C" fontFamily='Regular' fontSize="12" >แจ้งปัญหา</Text>
                            </VStack>

                        </HStack>
                    </Box>
                    <Box ml="6">
                        <Text fontSize="15" fontFamily='Medium' style={{ color: "#35609C", }} marginBottom={3}>
                            แนะนำ
                        </Text>

                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={Video}
                            renderItem={({
                                item
                            }) => <Box marginBottom={2} borderWidth="1" rounded="20" borderColor="#DDDFE1" px={3} py={3} marginRight={4} >
                                    <HStack space={[3.5, 3]} justifyContent="space-between">
                                        <Image rounded="20" source={{
                                            uri: item.url
                                        }} size="110" />
                                        <Text color="#8AA7CF" fontFamily='Regular' >
                                            {item.title}
                                        </Text>
                                    </HStack>
                                </Box>} keyExtractor={item => item.id} />

                    </Box>

                </VStack>
            </ScrollView>
        </Box>

    );
};

