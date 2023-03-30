import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React , { useState } from "react";
import { Video } from "../constants";

export default function SeachBar() {

  return (
    <Box marginX={35} mt={5} mb={5}>
      <Input
        
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
  );
}
