import React from 'react';
import styled from 'styled-components/native';
import Button from './components/chapter2/Button';

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
        </Container>
    );
};

export default App;