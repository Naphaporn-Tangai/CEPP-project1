import React, { useState, useCallback, useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { Button, View, Text, VStack, HStack } from "native-base";
export default function VideoScreen({ route }) {
  const [playing, setPlaying] = useState(false);
  const { videoId, videoTitle } = route.params;
  const playerRef = useRef();
  const [playbackRate, setPlaybackRate] = useState(1);

  const handlePlaybackRateChange = useCallback((newPlaybackRate) => {
    setPlaybackRate(newPlaybackRate);
  }, []);

  const [playingColor, setPlayingColor] = useState('#35609C');
  const [pausedColor, setPausedColor] = useState('#FFF');

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };
  return (
    <View marginTop="30%">
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={videoId}
        webViewStyle={{}}
        playbackRate={playbackRate}
      />

      <Text
        style={{
          color: "#35609C",
          fontFamily: "Medium",
          top: "-10%",
          marginHorizontal: 20,
          justifyContent: "center",
          textAlign: "center",
          fontSize: 17,
        }}
      >
        {videoTitle}
      </Text>
      <VStack top="-3%" space={3}>
        <HStack justifyContent='center' alignItems='center' mx={10} >
        <Button
          mr={5}
          onPress={handlePlay}
          w="50%"
          borderRadius={20}
          style={{ backgroundColor : playing ? "#8AA7CF" : "#35609C"  }}
          _pressed={{
            bg: "#8AA7CF",
            _text: { color: "#35609C" },
          }}
          
        >
          <Text fontFamily="Medium" style={{ color: playing ? "#35609C" : "#fff"}}>
          เล่น
          </Text>
        </Button>
        <Button
          
          onPress={handlePause}
          w="50%"
          borderRadius={20}
          
          style={{ backgroundColor : !playing ? "#8AA7CF" : "#35609C"  }}
          _pressed={{
            bg: "#8AA7CF",
            _text: { color: "#35609C" },
          }}
        >
           <Text fontFamily="Medium" style={{ color: playing ? "#fff" : "#35609C"}}>
         หยุด</Text>
        </Button>
        </HStack>
        <HStack justifyContent='center' alignItems='center' space={2} marginTop={5}>
        <Button
          w={75}
          py={2}
          borderRadius={20}
          variant="Outline"
          borderWidth={2}
          borderColor="#35609C"
          _text={{
            color: "#35609C",
            fontFamily: "Medium",
            fontSize: "md",
          }}
          _pressed={{
            bg: "#8AA7CF",
            _text: { color: "#35609C" },
          }}
          onPress={() => handlePlaybackRateChange(0.25)}
          borderColor={playbackRate === 0.25 ? 'red' : '#35609C'}
          bgColor={playbackRate === 0.25 ? '#35609C' : "#fff"}
        >
          <Text fontFamily="Medium" style={{ color: playbackRate === 0.25 ? "#fff" : "#35609C"}} fontSize= "md">
          0.25x
          </Text>
      
        </Button>
        <Button
          w={75}
          py={2}
          borderRadius={20}
          borderRadius={20}
          variant="Outline"
          borderWidth={2}
          borderColor="#35609C"
          _text={{
            color: "#35609C",
            fontFamily: "Medium",
            fontSize: "md",
          }}
          _pressed={{
            bg: "#8AA7CF",
            _text: { color: "#35609C" },
          }}
          onPress={() => handlePlaybackRateChange(0.5)}
          borderColor={playbackRate === 0.5 ? 'red' : '#35609C'}
          bgColor={playbackRate === 0.5 ? '#35609C' : "#fff"}
        >
          <Text fontFamily="Medium" style={{ color: playbackRate === 0.5 ? "#fff" : "#35609C"}} fontSize= "md">
          0.5x
          </Text>
        </Button>
       
        <Button
          py={2}
          w={75}
          borderRadius={20}
          variant="Outline"
          borderWidth={2}
          borderColor="#35609C"
          _text={{
            color: "#35609C",
            fontFamily: "Medium",
            fontSize: "md",
          }}
          _pressed={{
            bg: "#8AA7CF",
            _text: { color: "#35609C" },
          }}
          onPress={() => handlePlaybackRateChange(1)}
         
          bgColor={playbackRate === 1 ? '#35609C' : "#fff"}
        >
          <Text Text fontFamily="Medium" style={{ color: playbackRate === 1 ? "#fff" : "#35609C"}} fontSize= "md">
          1x</Text>
        </Button> 
        </HStack>
        <HStack justifyContent='center' alignItems='center' space={2} >
        <Button
          py={2}
          w={75}
          borderRadius={20}
          borderRadius={20}
          variant="Outline"
          borderWidth={2}
          borderColor="#35609C"
          _text={{
            color: "#35609C",
            fontFamily: "Medium",
            fontSize: "md",
          }}
          _pressed={{
            bg: "#8AA7CF",
            _text: { color: "#35609C" },
          }}
          onPress={() => handlePlaybackRateChange(1.5)}
          borderColor={playbackRate === 1.5 ? 'red' : '#35609C'}
          bgColor={playbackRate === 1.5 ? '#35609C' : "#fff"}
        >
          <Text Text fontFamily="Medium" style={{ color: playbackRate === 1.5 ? "#fff" : "#35609C"}} fontSize= "md">
          1.5x</Text>
        </Button>
       
        <Button
          py={2}
          w={75}
          borderRadius={20}
          borderRadius={20}
          variant="Outline"
          borderWidth={2}
          borderColor="#35609C"
          _text={{
            color: "#35609C",
            fontFamily: "Medium",
            fontSize: "md",
          }}
          _pressed={{
            bg: "#8AA7CF",
            _text: { color: "#35609C" },
          }}
          onPress={() => handlePlaybackRateChange(2)}
          borderColor={playbackRate === 2 ? 'red' : '#35609C'}
          bgColor={playbackRate === 2 ? '#35609C' : "#fff"}
        >
          <Text Text fontFamily="Medium" style={{ color: playbackRate === 2 ? "#fff" : "#35609C"}} fontSize= "md">
          2x</Text>
        </Button> 
        </HStack>
      </VStack>
    </View>
  );
}
