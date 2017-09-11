import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../util/constants'

const Root = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
`

const LoadingScreen = () => (
    <Root>
        <ActivityIndicator size="large" color={colors.PRIMARY}/>
    </Root>
)

export { LoadingScreen };