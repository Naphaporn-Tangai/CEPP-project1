import React from "react";
import { Input, Icon, Text, Link, Center, FormControl, Box, Button, HStack, Checkbox } from "native-base";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [show, setShow] = React.useState(false);
  return (
    
      <FormControl >
        <Text color="#35609C" bottom='80 px' fontFamily='Medium' fontSize="4xl" marginTop="200 px"
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
        <Button size="md" borderRadius={20} backgroundColor="#35609C" marginTop="30 px"_text={{
          color: "#FFFF", fontFamily: 'Medium' ,fontSize: "md",
        }} _pressed={{
          bg: "#8AA7CF" ,_text: { color: "#35609C" }
        }}>
          เข้าสู่ระบบ
        </Button>

        <Checkbox size="sm" value="one" mt={5} borderRadius="10 px" colorScheme="info" defaultIsChecked  _text={{
          color: "#B5B9BC", fontFamily: 'Regular' , 
        }}>
          จำรหัสผ่านไว้
        </Checkbox>

        <Box justifyContent="flex-end" alignItems="flex-start" >

          <HStack mt="6" marginTop="150 px">

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

   
  );
};