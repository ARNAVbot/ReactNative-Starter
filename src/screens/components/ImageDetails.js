import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//Screen -4
// const ImageDetails = props => {
    //We can either use above statemnt that gives us all the props or we can get our own props only and fgt the rest
const ImageDetails = ({imageSource, title, score}) => {
    // console.log(props);
    return (
        <View>
            {/* require keyword provides us the image with the specified path */}
            <Image source={imageSource}/>
            <Text>{title}</Text>
            <Text>{score}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageDetails;