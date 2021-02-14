// react libray helps us to build componenets
// No curly braces here, as we are importing the entire library
import React from 'react';

// react native library helps us to use the above components
// in android/ios by applying some styling etc
// Curly braces below is to indicate that we want to import only
// 2 specific parts from the entire react native library
import { Text, StyleSheet, View } from 'react-native';

/// SCREEN 1
// The below thing can be replaces by this:
// const ComponentsScreen = function() {
// };
// This is called as arrow - function
// the following function returns some jsx
const ComponentsScreen = () => {

    const greeting = 'Hi there!';
    const testText = <Text>Testing new string!</Text>

    //This below line is jsx . it is a dialect of javascript
    // that tells react what contents we want to show.
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen.</Text>
            {/* variables are wrapped inside curly braces */}
            <Text >{greeting}</Text>
            {testText}
        </View>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;