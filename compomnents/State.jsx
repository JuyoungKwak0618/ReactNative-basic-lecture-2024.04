import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";


export default function State({name}) {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Image
        source={require('../assets/img/cats.jpg')}
        style={{width: 300 ,height: 300, borderRadius: 20, padding: '20'}}></Image>
      <Text>
        I am {name}, and i am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {setIsHungry(false);}}
        disabled={!isHungry}
        title={isHungry ? '제발 우유를 주세요!!!' : '감사합니다!'}
      />
    </View>
  );
};
