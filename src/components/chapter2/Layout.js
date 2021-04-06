import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
    },

    header: {
        backgroundColor: '#f1c40f',
        flex: 1,
    },
    
    contents: {
        backgroundColor: '#1abc9c',
        height: 500,
        flex: 5,
    },

    footer: {
        backgroundColor: '#3498db',
        flex: 1,
    },
    text: {
        fontSize: 26,
    }
})

export const Header = () => {
    return (
        <View style={[styles.container, styles.header]}>
            <Text style={styles.text}>Header</Text>
        </View>
    )
}

export const Contents = () => {
    return (
        <View style={[styles.container, styles.contents]}>
            <Text style={styles.text}>Contents</Text>
        </View>
    )
}

export const Footer = () => {
    return (
        <View style={[styles.container, styles.footer]}>
            <Text style={styles.text}>Footer</Text>
        </View>
    )
}