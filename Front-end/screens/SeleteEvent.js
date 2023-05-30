import {
  Box,
  HStack,
  VStack,
  View,
  Text,
  Pressable,
  Button,
  Icon,
  useDisclose,
  Center,
  Actionsheet,
  Image
} from "native-base";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect, useRef } from "react";
import { AddVideo } from "../constants";
import { AddImaage } from "../constants";
import { Addlocation } from "../constants";
import { useNavigation, useRoute } from "@react-navigation/native";
export default function SeleteEvent() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // set initial date to current date
  const monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const [imageUri, setImageUri] = useState(null);

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };
  const navigation = useNavigation();
  const route = useRoute();
  const [address, setAddress] = useState(null); // สร้าง state สำหรับเก็บข้อมูล address

  useEffect(() => {
    if (route.params?.address) {
      // เช็คว่ามีค่า address ที่ถูกส่งมาหรือไม่
      setAddress(route.params?.address);
    }
  }, [route.params?.address]);
  console.log(address);
  const formattedDate = `${selectedDate.getDate()} ${
    monthNames[selectedDate.getMonth()]
  } ${selectedDate.getFullYear()}`; // format selected date
  const [isOpen, setIsOpen] = useState(false); // สร้าง state ในการเก็บค่าเปิด/ปิด Actionsheet

  const onOpen = () => {
    setIsOpen(true); // เปิด Actionsheet
  };

  const onClose = () => {
    setIsOpen(false); // ปิด Actionsheet
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setIsOpen(true); // เปิด Actionsheet เมื่อกลับมาหน้านี้
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      bgColor="#fff"
      height="100%"
    >
      <Box flex={1}>
        <VStack marginTop={7}>
          <Text fontSize="18" fontFamily="Medium" color="#000" ml="9">
            {formattedDate}
          </Text>
        </VStack>
        <Box
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 1,
              height: 2,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 6,

            width: 400,
            height: "100%",
            marginTop: 40,
            backgroundColor: "#fff",
            borderRadius: 40,
            top: "-3%",
          }}
        >
          <VStack mr={5}>
            <Text
              ml={10}
              mt={7}
              mb={5}
              fontFamily="Medium"
              color="#35609C"
              fontSize={22}
            >
              เข้าปฎิบัติงาน
            </Text>
            <Box ml={10}>
              <HStack>
                <Icon
                  as={<FontAwesome5 name="calendar-alt" />}
                  size="md"
                  color="#35609C"
                  marginRight={5}
                />
                <Text
                  fontFamily="Regular"
                  fontSize="17 px"
                  color="#35609C"
                  mb={3}
                >
                  16/10/65 - 20/10/25
                </Text>
              </HStack>
              <Box w={150} paddingBottom={4}>
                <HStack>
                  <Icon
                    as={<MaterialCommunityIcons name="clock" />}
                    size="md"
                    color="#35609C"
                    marginRight={5}
                  />
                  <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
                    08:00 - 09:00
                  </Text>
                </HStack>
              </Box>
              <Box>
                <HStack>
                  <Icon
                    as={<Ionicons name="location-sharp" />}
                    size="md"
                    color="#35609C"
                    marginRight={5}
                  />

                  <Text
                    fontFamily="Regular"
                    fontSize="17 px"
                    color="#35609C"
                    mb={3}
                  >
                    หมู่บ้านเทพนคร 189 ถ. พุทธมณฑลสาย 2 ซ. 10 แขวง บางแคเหนือ
                    เขตบางแค กรุงเทพมหานคร 10160
                  </Text>
                </HStack>
              </Box>
              <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
                ชื่อผู้สูงอายุ :
              </Text>
              <Text fontFamily="Regular" fontSize="17 px" color="#000" mb={3}>
                นางสาริกา ดิ้นทอง
              </Text>
              <HStack>
                <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
                  กลุ่มผู้สูงอายุ :
                </Text>
                <Text fontFamily="Regular" fontSize="17 px" color="#000" mb={3}>
                  กลุ่มติดเตียง
                </Text>
              </HStack>
              <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
                ประเด็นปัญหา :
              </Text>
              <Text fontFamily="Regular" fontSize="17 px" color="#000" >
                กลั้นปัสสาวะไม่ได้
              </Text>
            </Box>

            <Button
              size="md"
              borderRadius={10}
              variant="outline"
              borderColor="#35609C"
              borderWidth={1}
              _text={{
                color: "#35609C",
                fontFamily: "Medium",
                fontSize: "md",
              }}
              _pressed={{
                bg: "#8AA7CF",
                _text: { color: "#35609C" },
              }}
              style={{
                bottom: 0,
                left: 0,
                right: 0,
                marginBottom: 60,
                marginHorizontal: 45,
                marginTop: 50,
              }}
              onPress={onOpen}
            >
              ยืนยันการปฎิบัติงาน
            </Button>

            <Actionsheet isOpen={isOpen} onClose={onClose}  >
              <Actionsheet.Content height={500} >
                <Box w="100%" h={50} pl={4}>
                  <Text fontSize="md" color="#000" fontFamily="Medium" ml={3}>
                    ยืนยันการปฎิบัติงาน
                  </Text>
                </Box>

                <Actionsheet.Item onPress={() => {
      navigation.navigate("MapEvent");  
      onClose();
      }}>

                    <Box paddingLeft={10}>
                      <HStack>
                        <Icon
                          as={<Ionicons name="location-sharp" />}
                          size="md"
                          color="#35609C"
                          marginRight={5}
                        />
                        {address ? ( // ถ้ามี address แล้ว
                          <Pressable
                          onPress={() => navigation.navigate("MapEvent")}
                          >
                            <Text
                              fontFamily="Regular"
                              fontSize="17 px"
                              color="#000"
                            >
                              {address}
                            </Text>
                          </Pressable>
                        ) : (
                          <Text
                            fontFamily="Regular"
                            fontSize="17 px"
                            color="#35609C"
                          >
                            สถานที่
                          </Text>
                        )}
                      </HStack>
                    </Box>

                </Actionsheet.Item>
                <Actionsheet.Item onPress={takePhoto}>
                  <Pressable
                    
                    _pressed={{ bg: "coolGray.200" }}
                  >
                    <Box paddingLeft={10}>
                      <HStack>
                        <Icon
                          as={<FontAwesome name="camera" />}
                          size="md"
                          color="#35609C"
                          marginRight={4}
                        />
                        {imageUri ? (
                          <Image
                            source={{ uri: imageUri }}
                            style={{ width: 270, height: 150 }}
                            alt="Selected Image"
                          />
                        ) : (
                          <Text
                            fontFamily="Regular"
                            fontSize="17 px"
                            color="#35609C"
                          >
                            เพิ่มรูปภาพ
                          </Text>
                        )}
                      </HStack>
                    </Box>
                  </Pressable>
                </Actionsheet.Item>
                <Button
              size="md"
              borderRadius={10}
              variant="outline"
              borderColor="#35609C"
              borderWidth={1}
              w="100%"
              _text={{
                color: "#35609C",
                fontFamily: "Medium",
                fontSize: "md",
              }}
              _pressed={{
                bg: "#8AA7CF",
                _text: { color: "#35609C" },
              }}
              style={{
                bottom: 0,
                left: 0,
                right: 0,
                marginBottom: 60,
                marginHorizontal: 45,
                marginTop: 50,
              }}
              onPress={() => navigation.navigate('BottomTapCG')}
            >
              บันทึก
            </Button>
              </Actionsheet.Content>
            </Actionsheet>
            
          </VStack>
        </Box>
      </Box>
    </View>
  );
}
