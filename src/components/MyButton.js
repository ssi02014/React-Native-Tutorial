import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types'; 

const MyButton = ({title, children, onPress}) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: '#3498db',
            padding: 10,
            margin: 10,
            borderRadius: 8,
        }
    })

    MyButton.defaultProps = {
        title:'Default button',
    };

    MyButton.propTypes = {
        title: PropTypes.string,
        onPress: PropTypes.func.isRequired,
    }

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{ fontSize: 24}}>{children || title}</Text>
        </TouchableOpacity>
    );
};

export default MyButton;