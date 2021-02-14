import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//Screen -8
const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return <View>
        <Text>{color}</Text>
        {/* since we are doing stirng interpolation here, i.e., using props string inside another string, hence we need to use them 
        inside single-tick charachters as shown below */}
        <Button 
            onPress={() => onIncrease()}
            title={`increase ${color}`}/>
        <Button 
            onPress={() => onDecrease()}
            title={`decrease ${color}`}/>
    </View>
};

const styles = StyleSheet.create({});

export default ColorCounter;