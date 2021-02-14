import React from "react";
import { Text, StyleSheet , View, Button, TouchableOpacity} from "react-native";

//props is alwyas the 1 st property received in the following function
// const HomeScreen = (props) => {
  //In the following way, we are pulling out only the navigation object from props to avoid writing extra code
const HomeScreen = ({navigation}) => {
  console.log(navigation);
  return (
  <View>
    <Text style={styles.text}>Hi There</Text>
    {/* Button is a self closing element as in all the properties can be easily defined in itself */}
    <Button 
      title="Go to components demo"
      onPress={() => navigation.navigate('Components')}
    />

    <Button
      title= "Go to list demo"
      onPress={() => navigation.navigate('List')}
    />
    {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
       <Text>Go to list demo</Text>
    </TouchableOpacity> */}

    <Button
      title= "Go to ImageScreen"
      onPress={() => navigation.navigate('Image')}
    />

    <Button
      title= "Go to Counter screen"
      onPress={() => navigation.navigate('Counter')}
    />

    <Button
      title= "Go to Color demo"
      onPress={() => navigation.navigate('Color')}
    />

  <Button
      title= "Go to Square screen without reducers"
      onPress={() => navigation.navigate('SquareWithoutReducers')}
    />

    <Button
      title= "Go to Square screen"
      onPress={() => navigation.navigate('Square')}
    />

    <Button
      title= "Go to Text demo screen"
      onPress={() => navigation.navigate('Text')}
    />

    <Button
      title= "Go to Box screen"
      onPress={() => navigation.navigate('Box')}
    />

    <Button
      title= "Go to Cancellation screen"
      onPress={() => navigation.navigate('Cancellation')}
    />
    </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
