import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


//Screen -10
const BoxScreen = () => {
    return (
        <View style= {styles.viewStyle}>
            <Text style= {styles.textOneStyle}>Child #1</Text>
            <Text style= {styles.textTwoStyle}>Child #2</Text>
            <Text style= {styles.textThreeStyle}>Child #3</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        //-----possible values for below = center, flex-start, flex-end
        // ----- alignItems works in the opposite direction of flexDirection
        // alignItems: 'flex-end',

        //-----possible values for below = row|column
        // flexDirection: 'row',

        //------posible values = flex-start, center, flex-end, space-between, space-around
        // ----- justifyContent works in the same direction of flexDirection
        // justifyContent: 'flex-start',

        height: 200
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex:4
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',

        //--------possible values for below : flex-start, center, flex-end
        //----- this overrides the 'alignItems' property of parent
        // alignSelf: 'flex-end'

        // ----- flex works in the same direction of flexDirection
        // flex:4

        ...StyleSheet.absoluteFillObject
        //------the above line is used to replace the following 6 lines of code
        // position: 'absolute',
        //-------distance from top side
        // top:0,
        // left:0,
        // right:0,
        // bottom:0,

        // fontSize:18
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex:2
    }
});

export default BoxScreen;