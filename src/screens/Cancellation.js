import React from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';

const Cancellation = () => {
    const cancellationPolicyList = [
        {titleText: 'Full refund if you cancel 6 hours before the scheduled service is taken. So chill'},
        {titleText: 'AED 10 cancellation fees if you cancel later '},
    ]
    return <View style={styles.parentViewStyle}>
        <View style={styles.verticalViewStyle}/>
        <View style={styles.childViewStyle}>
            <Text style={styles.headerStyle}>Cancellation Policy</Text>
            <FlatList 
                vertical
                keyExtractor={(cancellationPolicy) => cancellationPolicy.titleText}
                data = {cancellationPolicyList} 
                renderItem = {({item}) =>{
                    return <Text style={styles.itemStyle}>{`\u2022 ${item.titleText}`}</Text>;
                }}
        />
        </View>
    </View>;
}

const styles = StyleSheet.create({
    parentViewStyle: {
        flexDirection: 'row',
        backgroundColor:'white'
    },
    verticalViewStyle: {
        width:4,
        backgroundColor:'#FDB363'
    },
    childViewStyle: {
        flex:1,
        marginTop:28,
        marginBottom:20,
        marginStart: 20,
    },
    headerStyle : {
        fontSize: 16,
        fontWeight:'bold',
        marginBottom:12
    },
    itemStyle: {
        marginBottom:8
    }
});

export default Cancellation;
