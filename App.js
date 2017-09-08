import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { getClients } from './src/util/constants'

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
  static defaultProps = {
    getClients
  }

  state = {
    loading: false,
    clients: []
  }

  async componentDidMount(){
    this.setState({loading: true});
    const data = await this.props.getClients();
    setTimeout(() => this.setState({loading: false, clients: data.clients}),2000);
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
            <ActivityIndicator size="large" color="#333" />
        </Root>
      )
    }
    return (
    <Root>
      <T>Welcome CRUD</T>
      {this.state.clients.map((client, i) => (
        <T key={i}>{client.CNOMBRE}</T>
      ))}
    </Root>
    );
  }
}


