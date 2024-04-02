import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, FlatList, Button, Image } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20, alignItems:'center' },
  item: { padding: 10, fontSize: 20, height: 40 }
});

export default function FruitList() {
  const [fruitInput, setFruitInput] = useState('');
  const [fruitList, setFruitList] = useState([]);

  const handleAddFruit = () => {
    if (fruitInput.trim() !== '') {
      setFruitList([...fruitList, { key: fruitInput }]);
      setFruitInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Image
          source={{
            uri: `https://picsum.photos/200/200`,
          }}
          style={{width: 200, height: 200, borderRadius:100}}
        />
      <TextInput
        style={{ height: 40, borderWidth: 1,marginTop: 10, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="과일 이름을 입력하세요"
        onChangeText={text => setFruitInput(text)}
        value={fruitInput}
      />
      <Button title="추가" onPress={handleAddFruit} />
      <FlatList 
        data={fruitList}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};
