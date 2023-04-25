import { View, Text, Center, Button, Pressable, Box , Input , VStack ,FormControl , TextInput ,CheckIcon , Select , Icon} from "native-base";
import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";

export default function EditProfile({ navigation }) {
  const [imageUri, setImageUri] = useState(null);
  const [show, setShow] = React.useState(false);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };
  const [name, setName] = useState('นางสาวนภาพร  ตั้งใจ');
  const [email, setEmail] = useState('Test001XX@gmail.com');
  const [password, setPassword] = useState('123456789');
  const [service, setService] = useState("");
  const handleChangeText = newText => {
    setText(newText);
  };
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      bgColor="#fff"
      
    >
      <Center flex={1}>
        <Pressable onPress={pickImage} overflow="hidden" >
          <Box>
            {imageUri ? (
              <Image
                source={{ uri: imageUri }}
                style={{ width: 130, height: 130, borderRadius: 100 }}
                _pressed={{ bg: "coolGray.200" }}
              />
            ) : (
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                }}
                style={{ width: 130, height: 130, borderRadius: 100 }}
              />
            )}
          </Box>
        </Pressable>
        <VStack space={3} mt="5">
          <FormControl >
            <FormControl.Label _text={{ fontFamily: "Regular" , fontSize: "15 px"}}>
              ชื่อผู้ใช้
            </FormControl.Label>
            <Input   
              w={{
              base: "70%",
              md: "40%"
            }}
            variant="underlined"
            value={name}
            onChangeText={(value) => setName(value)}
            _input={{ fontFamily:'Medium' , fontSize: "15 px" }}
            paddingLeft={5}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label  _text={{ fontFamily: "Regular" , fontSize: "15 px"}}>
              อีเมล
            </FormControl.Label>
            <Input   
              w={{
              base: "70%",
              md: "40%"
            }}
            variant="underlined"
            value={email}
            onChangeText={(value) => setEmail(value)}
            _input={{ fontFamily:'Medium' , fontSize: "15 px" }}
            paddingLeft={5}         
            />
          </FormControl>
          <FormControl>
            <FormControl.Label  _text={{ fontFamily: "Regular" , fontSize: "15 px"}}>
              รหัสผ่าน
            </FormControl.Label>
            <Input   
              w={{
              base: "70%",
              md: "40%"
            }}
            value={password}
            onChangeText={(value) => setPassword(value)}
            variant="underlined"
            type={show ? "text" : "password"}
            InputRightElement={
              <Icon onPress={() => setShow(!show)} as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                size={5} mr="2" color="muted.400" />}  
              variant="underlined"
              paddingLeft={5}
            _input={{ fontFamily:'Medium' , fontSize: "15 px" }}
            />
          </FormControl>
          <FormControl>
          <FormControl.Label  _text={{ fontFamily: "Regular" , fontSize: "15 px"}}>
             ตำแหน่ง
            </FormControl.Label>
          <Select 
          variant="underlined"
          defaultValue="manager"
          minWidth="270"  
          accessibilityLabel="position" 
          style={{ fontFamily: "Medium" , fontSize: 15 , paddingLeft: 20}}
          _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} 
      onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Care manager" value="manager"   />
          <Select.Item label="Care giver" value="giver"  />
        </Select>
        </FormControl>

          <Button        
            size="md"
            borderRadius={20}
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
            onPress={() => navigation.navigate("HomeCg")} 
            mt="10">
            บันทึก
          </Button>
        </VStack>
      </Center>
    </View>
  );
}
