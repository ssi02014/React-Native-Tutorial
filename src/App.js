import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import MyButton from './components/MyButton';

const App = () => {
    const name = "Minjae"
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
                    {/* My Name is {name} */}
                    {(() => {
                        if(name === 'Minjae') return 'My name is Minjae';
                        else return 'My First React Native';
                    })()}
                </Text>
                <Button title="Button" color="#f194ff" onPress={() => alert('click!')} />
                <MyButton title="Minjae Button"></MyButton>
                <MyButton title="Minjae Button">Children Props</MyButton>
                <MyButton title="Minjae Button">Children Props</MyButton>
                <MyButton title="Minjae Button">Children Props</MyButton>
                <MyButton title="Minjae Button">Children Props</MyButton>
            </View>
        </>
    );
};

export default App;