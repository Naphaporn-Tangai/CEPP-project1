import {
  View,
  Text,
  HStack,
  Box,
  VStack,
  Image,
  Center,
  Button,
  Input,
  Icon
} from "native-base";
import React ,{ useState }from "react";
import { Video } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import { SeachBar } from "../components";
import { Ionicons } from "@expo/vector-icons";

export default function Article() {
  const [searchText, setSearchText] = useState('');

  const filteredVideo = Video.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      bgColor="#fff"
    >
           <Box marginX={35} mt={5} mb={5}>
      <Input
      onChangeText={setSearchText}
        onChangeText={setSearchText}
        variant="filled"
        width="100%"
        borderRadius="10"
        py="1"
        px="2"
        InputRightElement={
          <Icon
            mr="3"
            size="4"
            color="gray.400"
            as={<Ionicons name="ios-search" />}
          />
        }
        
      />
      </Box>
      <Center flex={1}>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <Box>
            <Text
              color="#000"
              fontFamily="Medium"
              fontSize="20 px"
              paddingX={37}
              mb={5}
             
            >
              บทความให้ความรู้
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack marginLeft={10} marginBottom={10}>
                {filteredVideo.map((item) => (
                  <Box
                    key={item.id}
                    marginBottom={2}
                    borderWidth="1"
                    w={250}
                    h={350}
                    marginRight={30}
                    rounded="25"
                    borderColor="#DDDFE1"
                  >
                    <VStack>
                      <Image
                        style={{ width: 300, height: 200 }}
                        source={{ uri: item.url }}
                        alt="Image"
                        borderTopRadius={25}
                        mb={3}
                      />

                      <Text color="#35609C" fontFamily="Medium" ml={3} pr={5}>
                        {item.title}
                      </Text>
                      <Button
                        w="70%"
                        size="sm"
                        backgroundColor="#35609C"
                        _pressed={{
                          bg: "#8AA7CF",
                          _text: { color: "#35609C" },
                        }}
                        position="absolute" bottom="-30%" right={0}
                        onPress={() => navigation.navigate("HomeCg")}
                      >
                        <Text color="#FFFF" fontFamily="Medium" fontSize="17 px">ดูรายละเอียด</Text>
                      </Button>
                    </VStack>
                  </Box>
                ))}
              </HStack>
            </ScrollView>
            <VStack marginLeft={10}>
              {filteredVideo.map((item) => (
                <Box
                  key={item.id}
                  marginBottom={30}
                  w={330}
                  h={120}
                  rounded="25"
                >
                  <HStack>
                    <Image
                      style={{ width: 150, height: 120 }}
                      source={{ uri: item.url }}
                      alt="Image"
                      borderRadius={25}
                    />
                    <Text
                      color="#35609C"
                      fontFamily="Medium"
                      mt={3}
                      ml={3}
                      pr={130}
                    >
                      {item.title}
                    </Text>
                    <Button
                        w="30%"
                        size="sm"
                        backgroundColor="#35609C"
                        _pressed={{
                          bg: "#8AA7CF",
                          _text: { color: "#35609C" },
                        }}
                        position="absolute" bottom="-2%" right={0}
                        onPress={() => navigation.navigate("HomeCg")}
                      >
                        <Text color="#FFFF" fontFamily="Medium" fontSize="12 px">ดูรายละเอียด</Text>
                      </Button>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </Box>
        </ScrollView>
      </Center>
    </View>
  );
}
