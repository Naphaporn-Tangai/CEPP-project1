import {
  View,
  Text,
  FormControl,
  Input,
  VStack,
  Center,
  Box,
  TextArea,
  Button
} from "native-base";
import React from "react";

export default function Report({ navigation }) {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      bgColor="#fff"
      
    >
      <Center flex={1}>
        <Box flex={1} top="5%">
          <VStack >
            <FormControl>
              <FormControl.Label>
                <Text fontFamily="Regular" fontSize="17" color="#35609C" >หัวชื่อ</Text>
              </FormControl.Label>
              <Input w={80}  borderColor="#DDDFE1" borderWidth={1} borderWidth={1.5} />
              <FormControl.Label>
                <Text fontFamily="Regular" fontSize="17" color="#35609C">อธิบายเพิ่มเติม</Text>
              </FormControl.Label>
              <Input w={80} h={250} borderColor="#DDDFE1" borderWidth={1.5}/>
            </FormControl>
          </VStack>
          <Button
            size="md"
            borderRadius={10}
            backgroundColor="#35609C"
            _text={{
              color: "#FFFF",
              fontFamily: "Medium",
              fontSize: "md",
            }}
            _pressed={{
              bg: "#8AA7CF",
              _text: { color: "#35609C" },
            }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              marginBottom: 60,
              alignItems: 'center', 
              justifyContent: 'center'
            }}
            onPress={() => navigation.navigate("HomeCg")}
          >
            ส่ง
          </Button>
        </Box>
      </Center>
    </View>
  );
}
