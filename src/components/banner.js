import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Banner extends Component {
    render() {
        return (
            <View style={styles.bannerContainer}>
                <Text style={styles.bannerText}>{this.props.text}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bannerContainer: {
        width: 'auto',
        height: 150,
        backgroundColor: '#ff6363',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30
    },
    bannerText: {
        fontSize: 34,
        color: 'white'
    }
})
export default Banner;