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

  import { useNavigation, useRoute } from "@react-navigation/native";

export default function WorkCG() {
  return (
    <View>
   
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
            height: 300,
            marginTop: 40,
            backgroundColor: "#fff",
            borderRadius: 40,
            marginHorizontal: 40,
           alignItems: 'center', justifyContent: 'center',
          height: 460
          }}>
                <Text
              ml={10}
              mt={3}
              
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
                    mr={10}
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
                ชื่อผู้สูงอายุ :
              </Text>
              <Text fontFamily="Regular" fontSize="17 px" color="#000" >
                นางสาริกา ดิ้นทอง
              </Text>
            </Box>
            </Box>
    </View>
  )
}