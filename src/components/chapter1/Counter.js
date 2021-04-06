import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyButton from '../MyButton';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);

    const styles = StyleSheet.create({
        title: {
            fontSize: 30,
            margin: 10,
        }
    })
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>{count}</Text>
            <Text style={styles.title}>{double}</Text>
            <MyButton title="+" onPress={() => {
                setCount(count + 1);
                setDouble(double + 2);
            }} />
            <MyButton title="-" onPress={() => {
                setCount(count - 1);
                setDouble(double - 2);
            }}/>
        </View>
    );
};

export default Counter;