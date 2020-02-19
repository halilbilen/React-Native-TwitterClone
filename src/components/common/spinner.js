import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { EatBeanLoader } from 'react-native-indicator';
const Spinner = () => {
    return (
        <View style={styles.spinner}>
            <EatBeanLoader />

        </View>
    )
}
const styles = StyleSheet.create({

    spinner: {
        flex: 1,
        justifyContent: 'center'
    }
})
export { Spinner }