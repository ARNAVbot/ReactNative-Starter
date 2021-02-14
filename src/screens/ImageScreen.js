import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from './components/ImageDetails'


//Screen -3
const ImageScreen = () => {
    return <View>
        {/* passing props from parent to child. it could have any name */}
        <ImageDetails 
            title="Forest"
            imageSource={require('../../assets/forest.jpg')}
            // numbers are always passed in curly braces in props
            score={9}/>
        <ImageDetails 
            title="Beach" 
            imageSource={require('../../assets/beach.jpg')}
            score={2}/>
        <ImageDetails
             title="Mountain"
              imageSource={require('../../assets/mountain.jpg')}
              score={5}/>
    </View>;
};

const styles = StyleSheet.create({});

export default ImageScreen;