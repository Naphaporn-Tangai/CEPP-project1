import {
  Button,
  CheckBox,
  Box,
  Text,
  VStack,
  HStack,
  Center,
} from "native-base";

import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
export default function DateChoose() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  useFocusEffect(
    useCallback(() => {
      setSelectedOptions([]);
    }, [])
  );
  const selectOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  return (
    <Box mb={3} paddingX={50}>
      <Text
        fontSize="md"
        fontFamily="Medium"
        style={{ color: "#35609C" }}
        borderColor="#DDDFE1"
        paddingBottom={3}
        marginLeft={3}
      >
        วนซ้ำ
      </Text>
      <HStack space={1.5}>
        <Button
          onPress={() => selectOption("Option 1")}
          variant="outline"
          borderColor="#DDDFE1"
          borderWidth={2}
          borderRadius={60}
          width="45 px"
          height="45 px"
          paddingY={30}
          style={{
            backgroundColor: selectedOptions.includes("Option 1")
              ? "#35609C"
              : "#fff",
          }}
        >
          <Text
            style={{
              color: selectedOptions.includes("Option 1") ? "#fff" : "#35609C",
            }}
            fontFamily="Medium"
            fontSize={12}
          >
            อา
          </Text>
        </Button>

        <Button
          onPress={() => selectOption("Option 2")}
          variant="outline"
          borderColor="#DDDFE1"
          borderWidth={2}
          borderRadius={60}
          width="45 px"
          height="45 px"
          style={{
            backgroundColor: selectedOptions.includes("Option 2")
              ? "#35609C"
              : "#fff",
          }}
        >
          <Text
            style={{
              color: selectedOptions.includes("Option 2") ? "#fff" : "#35609C",
            }}
            fontFamily="Medium"
            fontSize={12}
          >
            จ
          </Text>
        </Button>

        <Button
          onPress={() => selectOption("Option 3")}
          variant="outline"
          borderColor="#DDDFE1"
          borderWidth={2}
          borderRadius={60}
          width="45 px"
          height="45 px"
          
          style={{
            backgroundColor: selectedOptions.includes("Option 3")
              ? "#35609C"
              : "#fff",
          }}
        >
          <Text
            style={{
              color: selectedOptions.includes("Option 3") ? "#fff" : "#35609C",
            }}
            fontFamily="Medium"
          
          >
            อ
          </Text>
        </Button>

        <Button
          onPress={() => selectOption("Option 4")}
          variant="outline"
          borderColor="#DDDFE1"
          borderWidth={2}
          borderRadius={60}
          width="45 px"
          height="45 px"
        
          style={{
            backgroundColor: selectedOptions.includes("Option 4")
              ? "#35609C"
              : "#fff",
          }}
        >
          <Text
            style={{
              color: selectedOptions.includes("Option 4") ? "#fff" : "#35609C",
            }}
            fontFamily="Medium"
            fontSize={12}
          >
            พ
          </Text>
        </Button>

        <Button
          onPress={() => selectOption("Option 5")}
          variant="outline"
          borderColor="#DDDFE1"
          borderWidth={2}
          borderRadius={60}
          width="45 px"
          height="45 px"
          
          style={{
            backgroundColor: selectedOptions.includes("Option 5")
              ? "#35609C"
              : "#fff",
          }}
        >
          <Text
            style={{
              color: selectedOptions.includes("Option 5") ? "#fff" : "#35609C",
            }}
            fontFamily="Medium"
            fontSize={11.8}
          >
            พฤ
          </Text>
        </Button>

        <Button
          onPress={() => selectOption("Option 6")}
          variant="outline"
          borderColor="#DDDFE1"
          borderWidth={2}
          borderRadius={60}
          width="45 px"
          height="45 px"
          
          style={{
            backgroundColor: selectedOptions.includes("Option 6")
              ? "#35609C"
              : "#fff",
          }}
        >
          <Text
            style={{
              color: selectedOptions.includes("Option 6") ? "#fff" : "#35609C",
            }}
            fontFamily="Medium"
            fontSize={12}
          >
            ศ
          </Text>
        </Button>
        <Button
          onPress={() => selectOption("Option 7")}
          variant="outline"
          borderColor="#DDDFE1"
          borderWidth={2}
          borderRadius={60}
          width="45 px"
          height="45 px"
          style={{
            backgroundColor: selectedOptions.includes("Option 7")
              ? "#35609C"
              : "#fff",
          }}
        >
          <Text
            style={{
              color: selectedOptions.includes("Option 7") ? "#fff" : "#35609C",
            }}
            fontFamily="Medium"
            fontSize={12}
          >
            ส
          </Text>
        </Button>
      </HStack>
    </Box>
  );
}
