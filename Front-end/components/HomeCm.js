import React from "react";
import { Text, Avatar, Center, HStack, Box, VStack } from "native-base";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";

export default function HomeCm() {
    return (
        <Center flex={1} px="3">
            <Box bottom="300" right="20" marginLeft={10}>
                <HStack justifyContent="center" mx={{
                    base: "auto",
                    md: "0"
                }} space={2}>
                    <Avatar bg="green.500" mr="1" source={{
                        uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }}>
                        RS
                    </Avatar>
                    <VStack>
                        <Text style={{ fontFamily: 'Medium' }}>
                            นายกันต์ มากทรัพย์สิน
                        </Text>
                        <Text style={{ fontFamily: 'Regular' }}>
                            Care manager
                        </Text>
                    </VStack>
                </HStack>
            </Box>
        </Center>
    );
};