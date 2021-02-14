import React , {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//Screen -5
//These are functional based components and not class based compnents. The syntax is slightly different there.
const CounterScreen = () => {
    //todo: fix this. Wrong way to watch a variable for changes
    // let counter = 0;

    // useState (on the right) initializes variable by 0. This is passed as an argument in it
    // on the left , the square brackets refer to array destructuring.
    // refer to this -> https://www.codingame.com/playgrounds/6450/destructuring-objects-and-arrays-in-js to understand array destructuring.
    // Another point to note is that each copy of this component will have its own pieces of state.
    const[counter, setCounter] = useState(0);

    return(
        <View>
            <Button 
                title="Increase"
                 onPress={() => {
                     //dont do this. dont modify state variabel directly
                    // counter++;

                    //when the following thing is done , react re-runs/re-renders this entire component
                    // and this time updates the counter variable and not re-initialize to 0.
                    //In case there was a sub-component , then that too will get re-rendered too. 
                    setCounter(counter+1);
                }}/>
            <Button
                 title="Decrease"
                onPress={() => {
                    //dont do this. dont modify state variabel directly
                    // counter--;

                    setCounter(counter-1);
                }}/>
            <Text>Current counter : {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;