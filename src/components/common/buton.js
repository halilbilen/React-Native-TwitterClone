import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Spinner } from './spinner';

const Buton = ({ spinner, title, onPress, color, backgroundColor }) => {
    const content = spinner ? (<Spinner />) : (<Button onPress={onPress} color={color} title={title} backgroundColor={backgroundColor} />)
    let { buttonWrapper } = styles;
    buttonWrapper={...buttonWrapper,backgroundColor:backgroundColor || 'orange'}
    return (
        <View style={styles.buttonWrapper}>
            {content}
        </View>
    )

}

const styles = StyleSheet.create({
    buttonWrapper: {
        marginTop: 20,
        height: 43,
        justifyContent: 'center',
        fontSize: 18,
    }
})
export { Buton };