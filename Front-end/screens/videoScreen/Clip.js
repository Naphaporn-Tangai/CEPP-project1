import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
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
  Icon,
  Pressable,
  IconButton,
  useToast,
} from "native-base";
import { TextInput } from "react-native";
import Axios from "axios";
import { VideoClip } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { SeachBar } from "../../components";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";
const YOUTUBE_API_KEY = "AIzaSyCMrKkp1wIP5MsRGcosTnzs_FL62PoaWLs";

export default function Clip({ navigation }) {
  const [thumbnails, setThumbnails] = useState([]);
  const [videoTitles, setVideoTitles] = useState([]);
  const [searchText, setSearchText] = useState("");
  const videoIds = VideoClip.map((clip) => clip.idvideo);

  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds.join(
        ","
      )}&key=${YOUTUBE_API_KEY}`
    )
      .then((response) => {
        const items = response?.data?.items;
        const thumbnailUrls = items.map(
          (item) => item.snippet.thumbnails.medium.url
        );
        const videoTitles = items.map((item) => item.snippet.title);
        setThumbnails(thumbnailUrls);
        setVideoTitles(videoTitles); // Update videoTitles state variable
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearchTextChange = (text) => {
    setSearchText(text); // อัพเดตค่า searchText ใน state
  };

  const filteredThumbnails = thumbnails.filter(
    (thumbnail, index) =>
      videoTitles[index]?.toLowerCase()?.includes(searchText.toLowerCase()) // Added null check before calling toLowerCase()
  );
  const filteredVideoTitles = videoTitles.filter(
    (title) => title?.toLowerCase()?.includes(searchText.toLowerCase()) // Added null check before calling toLowerCase()
  );
  const toast = useToast();
  const [liked, setLiked] = React.useState(
    Array(filteredThumbnails.length).fill(false)
  );

  const handleLike = (index) => {
    if (index >= 0 && index < filteredThumbnails.length) {
      const updatedLiked = [...liked];
      updatedLiked[index] = !updatedLiked[index];
      setLiked(updatedLiked);

      const message = updatedLiked[index] ? "Liked" : "Unliked";
    } else {
      toast.show({ title: "Please select a valid item", status: "warning" });
    }
  };
  const [likedtwo, setLikedtwo] = React.useState(
    Array(filteredThumbnails.length).fill(false)
  );

  const handleLiketwo = (index) => {
    if (index >= 0 && index < filteredThumbnails.length) {
      const updatedLiked = [...likedtwo];
      updatedLiked[index] = !updatedLiked[index];
      setLikedtwo(updatedLiked);

      const message = updatedLiked[index] ? "Liked" : "Unliked";
    } else {
      toast.show({ title: "Please select a valid item", status: "warning" });
    }
  };
  
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      bgColor="#fff"
    >
      <Box marginX={35} mt={5} mb={5}>
        <Input
          onChangeText={handleSearchTextChange}
          placeholder="ค้นหาชื่อคลิป"
          placeholderTextColor="#B5B9BC"
          variant="filled"
          width="100%"
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
        <Box>
          <ScrollView vertical showsVerticalScrollIndicator={false}>
            <Box>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <HStack marginLeft={10} marginBottom={10}>
                  {filteredThumbnails.map((item, index) => (
                    <Pressable
                      key={index}
                      removeClippedSubviews
                      marginBottom={2}
                      borderWidth="1"
                      w={190}
                      h={270}
                      marginRight={30}
                      rounded="25"
                      borderColor="#DDDFE1"
                      _pressed={{ bg: "coolGray.200" }}
                      onPress={() =>
                        navigation.navigate("Video", {
                          videoId: videoIds[index],
                          videoTitle: filteredVideoTitles[index],
                        })
                      }
                    >
                      <Image
                        style={{ width: 200, height: 200 }}
                        resizeMode="contain"
                        source={{ uri: item }}
                        alt="Image"
                      />

                      <Text
                        color="#35609C"
                        fontFamily="Medium"
                        ml={3}
                        top="-12%"
                        pr={4}
                      >
                        {filteredVideoTitles[index]}
                      </Text>

                      <IconButton
                        onPress={() => handleLike(index)}
                        icon={
                          <FontAwesome
                            name={liked[index] ? "heart" : "heart-o"}
                            size={22}
                            color={liked[index] ? "red" : "gray"}
                          />
                        }
                        position="absolute"
                        bottom={2}
                        right={2}
                      />
                      
                    </Pressable>
                  ))}
                </HStack>
              </ScrollView>

              <VStack marginLeft={5}>
                {filteredThumbnails.map((item, index) => (
                  <Pressable
                    key={index}
                    removeClippedSubviews
                    marginBottom={30}
                    w={330}
                    h={120}
                    rounded="25"
                    onPress={() =>
                      navigation.navigate("Video", {
                        videoId: videoIds[index],
                        videoTitle: filteredVideoTitles[index],
                      })
                    }
                  >
                    <HStack>
                      <Image
                        style={styles.thumbnail}
                        resizeMode="contain"
                        source={{ uri: item }}
                        alt="Image"
                      />

                      <Text
                        color="#35609C"
                        fontFamily="Medium"
                        mt={9}
                        ml={3}
                        pr={130}
                      >
                        {filteredVideoTitles[index]}
                      </Text>
                      <IconButton
                        onPress={() => handleLiketwo(index)}
                        icon={
                          <FontAwesome
                            name={likedtwo[index] ? "heart" : "heart-o"}
                            size={20}
                            color={likedtwo[index] ? "red" : "gray"}
                          />
                        }
                        position="absolute"
                        bottom="15%"
                        right="-1%"
                      />
                    </HStack>
                  </Pressable>
                ))}
              </VStack>
            </Box>
          </ScrollView>
        </Box>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  thumbnail: {
    width: 150,
    height: 150,
    margin: 5,
  },
  videoTitle: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});
