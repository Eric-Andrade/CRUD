import React, { Component } from 'react';
import styled from 'styled-components/native';
import { colors } from '../util/constants';

const Root = styled.View`
    flex: 1;
    backgroundColor: #282828;
    justifyContent: center;
    alignItems: center
`;
const InputContainer = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    padding: 10px;
    width: 100%;
    height: 40;
    backgroundColor: ${props => props.theme.GRAY900};
`;
const Input = styled.TextInput.attrs({
    placeholderTextColor: colors.GRAY777,
    autoCorrect: false,
})`
    backgroundColor: ${props => props.theme.GRAY900};
    marginTop: 5;
    width: 100%;
    height: 40;
    color: ${props => props.theme.WHITE};

`;

class NewClientScreen extends Component {
    render() {
        return (
            <Root>
                <InputContainer>
                    <Input
                    placeholder='Nombre'
                    />
                    <Input
                    placeholder='Apellidos'
                    />
                    <Input
                    placeholder='Teléfono'
                    />
                    <Input
                    placeholder='Email'
                    />
                    <Input
                    placeholder='Contraseña'
                    />
                </InputContainer>
            </Root>
        );
    }
}

export default NewClientScreen;