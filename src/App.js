import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const App = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',

        },
        title: {
            fontSize: 30,
        }
    })
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>
                    My First React Native
                </Text>
            </View>
        </>
    );
};

export default App;