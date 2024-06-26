import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View , Image, FlatList} from 'react-native';
import HelloWorld from './compomnents/HelloWorld';
import Cat from './compomnents/Cat';
import State from './compomnents/State';
import PizzaTranslator from './compomnents/PizzaTranslator';
import FlatListBasic from './compomnents/FlatListBasic'
import SectionListBasic from './compomnents/SectionListBasic';
import FetchExample from './compomnents/FetchExample';
import Count from './compomnents/Count';
import FruitList from './compomnents/FruitList';


const logo = { uri: 'https://reactnative.dev/img/tiny_logo.png' ,width: 32, height: 32,};

export default function App() {
  return (
    <ScrollView>
      {/* <Image source={logo} />
        <FetchExample />
      <Image source={logo} />
        <SectionListBasic />
        <FlatListBasic />
      <Image source={logo} />
       <PizzaTranslator />
        <State name='Run Tum Tugge' />
      <Image source={logo} />
        <Cat name='Maru' num='1'/>
        <Cat name='Run Tum Tugger' num='2'/>
      <Image source={logo} />
        <HelloWorld />  */}
      <FruitList />
       {/* <Count /> */}
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
