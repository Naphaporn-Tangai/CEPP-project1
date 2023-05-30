import React, { useState } from "react";
import {
  Input,
  Icon,
  Text,
  Link,
  Center,
  FormControl,
  Box,
  Button,
  HStack,
  View,
  Toast,
  Alert
} from "native-base";
import {
  MaterialIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import axios from 'axios';

export default function Register({ navigation }) {
  const [show, setShow] = React.useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleSubmit = async () => {
    if (!username || !email || !password || !phoneNum) {
      setErrorMessage('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }

    try {
      // ส่งข้อมูลไปยังเซิร์ฟเวอร์ด้วย Axios
      const response = await axios.post('http://192.168.149.129:3000/users', {
        username,
        email,
        password,
        phoneNum
      });
      // ดำเนินการเพิ่มเติมหลังจากการลงทะเบียนสำเร็จ
      Toast.show({
        render: () => (
          <Alert marginTop={10} status="success" variant="solid" w="300">
            <HStack>
            <Alert.Icon />
            <Text style={{ color: 'white' , marginLeft: 10 }}>เข้าสู่ระบบสำเร็จ</Text>
            </HStack>
          </Alert>
        ),
        duration: 1200,
        placement: "top"
        
      });
    navigation.navigate('Login')
      console.log("ลงทะเบียนสำเร็จ")
    } catch (error) {
      // จัดการข้อผิดพลาดที่เกิดขึ้นในการส่งข้อมูล
      console.error(error);
      setErrorMessage('เกิดข้อผิดพลาดในการลงทะเบียน');
    }
  };
  

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      bgColor="#fff"
    >
      <Center flex={1}>
        <FormControl style={{ fontFamily: "Regular" }}>
          <Text
            color="#35609C"
            bottom="80 px"
            fontFamily="Medium"
            fontSize="4xl"
            marginTop="150 px"
            style={{ textAlign: "left" }}
          >
            ลงทะเบียน
          </Text>
          <FormControl isRequired isInvalid={errorMessage !== ''}>
          <Input
            w={{
              base: "65%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-circle" />}
                size={5}
                ml="2"
                marginRight="20 px"
                color="#B5B9BC"
              />
            }
            placeholder="ชื่อผู้ใช้"
            variant="underlined"
            marginBottom="20 px"
            style={{ fontFamily: "Regular" }}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </FormControl>

        <FormControl isRequired isInvalid={errorMessage !== ''}>
          <Input
            w={{
              base: "65%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon
                as={<Feather name="at-sign" />}
                size={5}
                ml="2"
                marginRight="20 px"
                color="#B5B9BC"
              />
            }
            placeholder="อีเมล"
            variant="underlined"
            marginBottom="20 px"
            style={{ fontFamily: "Regular" }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          </FormControl>

          <FormControl isRequired isInvalid={errorMessage !== ''}>
          <Input
            w={{
              base: "65%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon
                as={<FontAwesome name="phone" />}
                size={5}
                ml="2"
                marginRight="20 px"
                color="#B5B9BC"
              />
            }
            placeholder="เบอร์โทร"
            variant="underlined"
            marginBottom="20 px"
            style={{ fontFamily: "Regular" }}
            value={phoneNum}
            onChangeText={(text) => setPhoneNum(text)}
          />
          </FormControl>

          <FormControl isRequired isInvalid={errorMessage !== ''}>
          <Input
            w={{
              base: "65%",
              md: "25%",
            }}
            type={show ? "text" : "password"}
            InputLeftElement={
              <Icon
                as={<FontAwesome name="lock" />}
                size={5}
                ml="2"
                marginRight="20 px"
                color="#B5B9BC"
              />
            }
            InputRightElement={
              <Icon
                onPress={() => setShow(!show)}
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            }
            placeholder="รหัสผ่าน"
            variant="underlined"
            style={{ fontFamily: "Regular" }}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
          </FormControl>

          <Button
            size="md"
            borderRadius={20}
            backgroundColor="#35609C"
            marginTop="30 px"
            _text={{
              color: "#FFFF",
              fontFamily: "Medium",
              fontSize: "md",
            }}
            _pressed={{
              bg: "#8AA7CF",
              _text: { color: "#35609C" },
            }}
            onPress={handleSubmit}
          >
            ลงทะเบียน
          </Button>
          <Box alignItems="flex-end">
            <HStack mt="6" marginTop="100 px">
              <Text fontSize="sm" fontFamily="Regular" color="#000">
                มีบัญชีอยู่แล้ว
              </Text>
              <Link
                _text={{
                  color: "#8AA7CF",
                  fontSize: "sm",
                  fontFamily: "Regular",
                  marginLeft: "6 px",
                }}
                onPress={() => navigation.navigate('Login')}
              >
                ลงชื่อเข้าใช้
              </Link>
            </HStack>
          </Box>
        </FormControl>
      </Center>
    </View>
  );
}
