import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';




const TextArea = ({ placeholder, onChangeText,value }) => {
    return (
        <View style={styles.textAreaWrapper}>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                multiline={true}
                value={value}
                style={styles.textArea}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    textAreaWrapper: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius:15,
        backgroundColor: 'yellow',
        height: 200
    },
    textArea: {
        height: 200,
        fontSize: 18,
        color: 'black'

    }
})
export { TextArea };