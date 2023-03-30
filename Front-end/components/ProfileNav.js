import React from 'react';
import {
    Text,
    Avatar,
    HStack, Box,
    VStack, IconButton,
    Icon, 
    Spacer, 
} from "native-base";
import { Feather } from "@expo/vector-icons";


export default function HomeCg() {

    return (
        <Box mx="6" top="5%" flex={1}>

            <HStack justifyContent="space-between" alignItems="center" >
                <Avatar bg="green.500" mr="2" source={{
                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }} >
                    RS
                </Avatar>
                <VStack>
                    <Text style={{ fontFamily: 'Medium', color: "#35609C" }}>
                        นายกันต์ มากทรัพย์สิน
                    </Text>
                    <Text style={{ fontFamily: 'Regular', color: "#8AA7CF" }}>
                        Care manager
                    </Text>
                </VStack>
                <Spacer />
                <HStack >
                    <IconButton icon={<Icon as={Feather} name="bar-chart-2" size="7" color="#B5B9BC" />} />
                </HStack>
            </HStack>

        </Box>
    );
};
