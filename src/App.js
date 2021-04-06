import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { Header, Contents, Footer } from './components/chapter2/Layout';
import Shadowbox from './components/chapter2/Shadowbox';

const App = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        text: {
            fontSize: 26,
            padding: 10,
            fontWeight: '600',
            color: 'black',
        },
        error: {
            fontSize: 26,
            padding: 10,
            fontWeight: '400',
            color: 'red',
        },
    })
    return (
        <>
            <View style={styles.container}>
                {/* <Header></Header>
                <Contents></Contents>
                <Footer></Footer> */}
                <Shadowbox></Shadowbox>
            </View>
        </>
    );
};

export default App;