import React from 'react';
import { Center , View } from 'native-base';
import { ListDate } from '../components';

export default function EventDay({ navigation })  {
  const today = new Date();
 

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} bgColor="#fff"
    
    >
      <Center flex={1} top="5%">
        <ListDate  />
      </Center>
    </View>
  );
}
