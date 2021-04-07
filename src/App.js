import React from 'react';
import styled from 'styled-components/native';
import Button from './components/chapter2/Button';
import Input from './components/chapter2/Input';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

const App = () => {
    return (
        <Container>
            <Button title='Minjae'></Button>
            <Button title='Yeonjae'></Button>
            <Input borderColor='#3498db'></Input>
            <Input borderColor='#9b59b6'></Input>
        </Container>
    );
};

export default App;