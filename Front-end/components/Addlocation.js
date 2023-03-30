import { Input, Box , Button , HStack , Icon, Pressable , Text} from "native-base";
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';

export default function Addlocation(props) {
  const navigation = useNavigation();
  return (
    <Box  mb={1}>
      <Pressable 
          paddingY={2}
          _pressed={{ bg: "coolGray.200" }} 
          onPress={() => navigation.navigate("MapCurrent")}>
      <Box paddingX={70}>
          <HStack>
            <Icon
              as={<Ionicons name="location-sharp" />}
              size="md"
              color={COLORS.primary}
              marginRight={5}
            />
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
              สถานที่
            </Text>
          </HStack>
        </Box>
       </Pressable> 
    </Box>
   
  )
}