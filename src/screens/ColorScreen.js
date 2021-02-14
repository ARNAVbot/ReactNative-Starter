import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';


//Screen -6
const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return (
    <View>
        <Button 
            title= "Add a color"
            onPress= {() => {
                //the 3 dots basically means to take up all the elements in the colors array
                // and add it to the newly formed array
                setColors([...colors, randomRgb()])
            }}/>

            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem= {({ item }) => {
                    //item is randomly generated rgb value
                    return(
                    <View 
                        style={{ 
                        height: 100, 
                        width:100,
                        backgroundColor:item}}
                    />
                    );
                }}
            />
    </View>
    )
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;

