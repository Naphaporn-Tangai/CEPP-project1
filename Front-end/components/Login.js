import React from "react";
import { Input, Icon, Text, Link, Center, FormControl, Box, Button, HStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [show, setShow] = React.useState(false);
  return (
    <Center flex={1} px="3">

      <FormControl style={{ fontFamily: 'Regular' }}>
        <Text color="#35609C" bottom='80 px' fontFamily='Medium' fontSize="4xl"
          style={{ textAlign: 'right', }}>
          ลงชื่่อเข้าใช้
        </Text>

        <Input w={{
          base: "65%",
          md: "25%"
        }} InputLeftElement={<Icon as={<Feather name="at-sign" />} size={5} ml="2" marginRight='20 px' color="#B5B9BC" />}
          placeholder="อีเมล" variant="underlined" marginBottom='20 px'
          style={{ fontFamily: 'Regular' }} />
        <Input w={{
          base: "65%",
          md: "25%"
        }} type={show ? "text" : "password"}
          InputLeftElement={<Icon as={<FontAwesome name="lock" />} size={5} ml="2" marginRight='20 px' color="#B5B9BC" />}
          InputRightElement={
            <Icon onPress={() => setShow(!show)} as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
              size={5} mr="2" color="muted.400" />} placeholder="รหัสผ่าน" variant="underlined"
          style={{ fontFamily: 'Regular' }} />
        <Box alignItems="flex-end">

          <Link _text={{
            fontSize: "sm",
            color: "#8AA7CF",
            marginTop: "20 px",
            marginBottom: "40 px"
          }} href="#" isUnderlined _hover={{
            _text: { color: "#35609C" }
          }}>
            ลืมรหัสผ่าน?
          </Link>
        </Box>
        <Button size="md" borderRadius={20} backgroundColor="#35609C" _text={{
          color: "#FFFF", fontFamily: 'Medium' 
        }}>
          เข้าสู่ระบบ
        </Button>
        <Box>
          <HStack mt="6" alignItems="flex-end"  >
            <Text fontSize="sm" fontFamily='Regular' color="#000">
              ยังไม่มีบัญชี
            </Text>
            <Link _text={{
              color: "#8AA7CF",
              fontSize: "sm",
              fontFamily: 'Regular',
              marginLeft: '6 px'
            }} href="#">
              ลงทะเบียน
            </Link>
          </HStack>
        </Box>
      </FormControl>

    </Center>
  );
};