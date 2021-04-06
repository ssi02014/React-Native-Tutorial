import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

//chapter 1
// import Counter from './components/chapter1/Counter';
// import EventButton from './components/chapter1/EventButton';
// import EventInput from './components/chapter1/EventInput';
// import MyButton from './components/chapter1/MyButton';

//chapter 2


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

                {/* 
                    chapter 1

                    <Text style={styles.title}>
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
                
                */}

                <Text style={[styles.text, {color: 'green'}]}>Class Style-Text</Text>
                <Text style={[styles.text, styles.error]}>Class Style-Error</Text>


            </View>
        </>
    );
};

export default App;