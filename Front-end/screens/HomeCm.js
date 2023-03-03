import React, { Component } from "react";
import { Text, Avatar, Center, HStack, Box, VStack, IconButton, Icon, Badge, FlatList, Spacer, View, ScrollView, Stack } from "native-base";
import { Feather } from "@expo/vector-icons";
import { UserCG, Date } from "../constants";
import { ProfileNav } from "../components"

export default function HomeCm({ navigation }) {
    return (
        
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} bgColor="#fff"  top="5%">
            <Center flex={1} >
            <ScrollView showsVerticalScrollIndicator={false} >
                <VStack >
                    <ProfileNav />
                    <Box ml="6">
                        <Text fontSize="15" fontFamily='Medium' color="#000" marginBottom={3} >
                            4 ตุลาคม 2565
                        </Text>
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
                    <Box mx="6">
                        <Text fontSize="15" fontFamily='Medium' style={{ color: "#35609C", }}>
                            รายชื่อ Care giver
                        </Text>
                        <FlatList data={UserCG} marginTop={2} renderItem={({
                            item
                        }) => <Box marginBottom={2} borderWidth="1" rounded="xl" borderColor="#DDDFE1" pl={["4", "4"]} pr={["0", "5"]} py="3">
                                <HStack space={[3.5, 3]} justifyContent="space-between">
                                    <Avatar size="48px" source={{
                                        uri: item.avatarUrl
                                    }} />
                                    <VStack>
                                        <Text color="#35609C" fontFamily='Medium'>
                                            {item.fullName}
                                        </Text>
                                        <Text color="#8AA7CF" fontFamily='Regular'>
                                            {item.title}
                                        </Text>
                                    </VStack>
                                    <Spacer />

                                </HStack>
                            </Box>} keyExtractor={item => item.id} />
                    </Box>
                </VStack>
            </ScrollView>
            </Center>
    </View>
    );
};
