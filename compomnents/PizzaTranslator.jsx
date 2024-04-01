import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";


export default function PizzaTranslator() {
  const [text, SetText] = useState('');
    return (
    <View>
      <TextInput style={{height: 40}}
        placeholder="문장을 입력하세요."
        onChangeText={newText => SetText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 40}}>
       {text.split(' ').map(word => word && '🍕').join(' ')}
      </Text>
    </View>

  );
};
