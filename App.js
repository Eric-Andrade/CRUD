import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  flex: 1;
  backgroundColor: #f5f5f5;
  alignItems: center;
  justifyContent: center;
`;
const T = styled.Text`
  color: #333;
  fontSize: 16
`;

export default class App extends React.Component {
  render() {
    return (
    <Root>
      <T>Welcome CRUD</T>
    </Root>
    );
  }
}


