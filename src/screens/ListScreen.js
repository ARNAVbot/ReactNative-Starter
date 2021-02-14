import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

/// SCREEN 2
const ListScreen = () => {
    const friends = [
        {name: 'Friend11 '},
        {name: 'Friend2 '},
        {name: 'Friend3 '},
        {name: 'Friend4 '},
        {name: 'Friend5 '},
        {name: 'Friend6 '},
        {name: 'Friend7 '},
        {name: 'Friend8 '},
        {name: 'Friend9 '},
    ]
    return <FlatList 
    //the below prop makes the list horizontal and not vertical
        horizontal

        //following prop hides the horizontal scroll bar
        showsHorizontalScrollIndicator={false}
        // This is needed bcoz a unique string key must be
        // associated with every item in the list. So that,
        // if this element is required to be removed then 
        // only this item is removed . Otherwise the entire list 
        // will be re-endered if this is not used
        keyExtractor={(friend) => friend.name}
        data = {friends} 
        // renderItem={(element) => {
        //     //this is what the element looks like
        //     // element === { item: {name: 'Friend1}, index:0}
        // }}
        renderItem = {({item}) =>{
            // item=== {name: 'Firend1'}
            return <Text style= {styles.itemStyle}>{item.name}</Text>;
        }}
        />
};

const styles = StyleSheet.create({
    itemStyle:{
        marginVertical: 50,
        marginHorizontal: 20
    }
});

export default ListScreen;