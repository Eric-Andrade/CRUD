import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Keyboard } from 'react-native';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';

const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;
const T = styled.Text`
    color: ${colors.GRAY600};
    fontSize: 16;
    textAlign: left
`;

class MeScreen extends Component {
    state = {  }
    render() {
        return (
            <Root>
                <T>MeScreen</T>
            </Root>
        );
    }
}

export default MeScreen;