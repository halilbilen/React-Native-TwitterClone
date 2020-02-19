import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.cardWrapper}>{props.children}</View>
    )
}
const styles = StyleSheet.create({
    cardWrapper:{
        height:'auto',
        margin:10,
        borderWidth:3,
        borderRadius:10,
        borderColor:'orange',
        justifyContent:'space-between',
        alignItems:'flex-start'
    }

});


export { Card };