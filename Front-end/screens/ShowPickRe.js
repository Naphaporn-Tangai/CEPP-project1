import React, { useState } from "react";
import {
  HStack,
  View,
  VStack,
  Button,
  Center,
  Box,
  Avatar,
  Text,
  Spacer
} from "native-base";
import { Addlocation } from "../components";
import { AddImage } from "../components";
import { UserPick } from "../constants";

export default function ShowPickRe({ navigation }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      safeAreaTop
      bgColor="#fff"
    >
      <Center flex={1}>
        <Box flex={1} top="3%">
          <HStack space={5} mx={2} mb={3} style={{  alignItems: "center", justifyContent: "center" }}>
            <Button
              
              onPress={() => handleOptionSelect('option1')}
              variant="Solid"
              style={{ backgroundColor: selectedOption === 'option1' ? '#fff' : '#35609C' }}
              size="sm"
              w="40%"
              onPress={() => navigation.navigate("PickUpDev")}
              
            >
              <Text style={{ color: selectedOption === 'option1' ? '#35609C' : '#fff' }}  
              fontFamily="Regular" fontSize="md">
              เบิกอุปกรณ์
              </Text>
            </Button>
            <Button
              
              onPress={() => handleOptionSelect('option2')}
              variant="Solid"
              style={{ backgroundColor: selectedOption === 'option2' ? '#35609C' : '#8AA7CF' }}
              size="sm"
              w="40%"
              onPress={() => navigation.navigate("ReturnDev")}
            >
              <Text style={{ color: selectedOption === 'option2' ? '#fff' : '#35609C' }} fontFamily="Regular" fontSize="md">
              คืนอุปกรณ์
              </Text>
            </Button>
          </HStack>
          <Box marginTop={2}>
                {UserPick.map((item) => (
                  <Box key={item.id} marginBottom={2} borderWidth="1" rounded="xl" borderColor="#DDDFE1" pl={["4", "4"]} pr={["0", "5"]} py="3">
                    <HStack space={[3.5, 3]} justifyContent="space-between">
                      <Avatar size="48px" source={{ uri: item.avatarUrl }} />
                      <VStack>
                        <Text color="#35609C" fontFamily='Medium'>
                          {item.fullName}
                        </Text>
                        <Text color="#8AA7CF" fontFamily='Regular'>
                          {item.tool}
                        </Text>
                      </VStack>
                      <Spacer />
                    </HStack>
                  </Box>
                ))}
              </Box>
        </Box>
      </Center>
    </View>
  );
}
