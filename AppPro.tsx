import React from "react";
import {
    View, Text,StyleSheet,useColorScheme
} from 'react-native'

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() ==='dark'
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.darktext : styles.whiteText}>Hey</Text>

        </View>
    )
}

export default AppPro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'black'

    },
    whiteText: {
        color:'white',
    },
    darktext: {
        color:'black'
    }

})