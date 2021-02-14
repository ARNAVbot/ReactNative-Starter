import React , { useReducer } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from './components/ColorCounter';

const COLOR_INCREMENT = 15;

// action argument basically tells what change are we making to our state object
// reducer always has to return state as that is what is provided to this line :
// const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue:0}) when dispatch method is called.
// if state is not returned , it will result in errors
const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === {type: 'change_red' || 'change_green' || 'change_blue' , payload: 15 || -15}
    switch(action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state: {...state, red: state.red + action.payload};
            // never going to directly change the state object
            // here down below, we are basically copying all the values of current state and updating the specific property we want to change
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 
            ? state: {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
            ? state: {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
};

//Screen -8
//Using reducers
const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue:0})
    // de-structiring the values from state and using it directly
    const {red, green , blue} = state;

    return(
     <View>
         {/* Passing functions as props to child components */}
         {/* Object passed in dispatch will appear as action argument in the above reducer */}
        <ColorCounter 
            onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT}) }
            onDecrease={() => dispatch({type: 'change_red', payload: -1*COLOR_INCREMENT})}
            color="Red"/>
        <ColorCounter 
            onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: 'change_green', payload: -1*COLOR_INCREMENT})}
            color="Green"/>
        <ColorCounter
            onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: 'change_blue', payload: -1*COLOR_INCREMENT})}
            color="Blue"/>

        <View style={{ height:150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>);
};

const styles = StyleSheet.create({});

export default SquareScreen;