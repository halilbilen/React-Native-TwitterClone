import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{this.props.headerText}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header:
    {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        textShadowColor: '#009466',
        textShadowOffset: { width: 0, height: 3 },
        elevation: 4,
        opacity: 0.7,
        backgroundColor: 'skyblue'
    },
    headerText:
    {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
    }
});
export { Header };