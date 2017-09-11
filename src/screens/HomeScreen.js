import React, {Component} from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';
import { KityPlanchoAPI } from '../util/api';
import { LoadingScreen } from '../commons/LoadingScreen'

const kityplanchoAPI = new KityPlanchoAPI();

const Root = styled.View`
    flex: 1;
    backgroundColor: #282828;
    alignItems: center;
    justifyContent: center;
`;
const ListContainer = styled.View`
    flex: 1;
    width: 100%
`;
const T = styled.Text`
    color: ${colors.WHITE};
    fontSize: 16;
    textAlign: left
`;
const ListItemsContainer = styled.View`
    alignItems: center;
    marginHorizontal: 4;
`;
const Touch = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    backgroundColor: ${colors.GRAY900};
    padding: 10px;
    height: 60;
    width:100%;
    marginVertical: 1.5;
    justifyContent: center;
`;

class HomeScreen extends Component {
    static defaultProps = {
        kityplanchoAPI
    }

    state = { 
        loading: false,
        clients: []
    }
    
    async componentDidMount(){
        this.setState({loading: true});
        const clients = await this.props.kityplanchoAPI.getClients();
        setTimeout(() => this.setState({ loading: false, clients}), 100)
    }

    render() {
        if(this.state.loading){
            return <LoadingScreen />
        }
        const clients = this.state.clients;
        return (
            <Root>
                <ListContainer>
                <FlatList
                    data={clients}
                    renderItem={
                        ({item: client}) => (
                            <ListItemsContainer>
                                <Touch>
                                    <T>{client.ID} | {client.CNOMBRE} {client.CAPELLIDOS}</T>
                                </Touch>
                            </ListItemsContainer>
                        )
                    }
                    keyExtractor={(item, index) => index}
                    />
                </ListContainer>
            </Root>
        );
    }
}

export default HomeScreen;