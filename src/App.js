import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Counter from './components/Counter';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';
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
                <MyButton title="Minjae Button" onPress={() => alert('props')}></MyButton>
                <MyButton title="Minjae Button" onPress={() => alert('children')}>Children Props</MyButton>
                <Counter />
                <EventButton />
                <EventInput />
            </View>
        </>
    );
};

export default App;