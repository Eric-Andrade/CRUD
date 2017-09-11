import React, {Component} from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';
import { LoadingScreen } from '../commons/LoadingScreen'
import { fetchClients } from './redux/actions'

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

@connect(state => ({
    Clients: state.home.Clients
    }),
    { fetchClients })

class HomeScreen extends Component {
    
    componentDidMount(){
        this.props.fetchClients();
    }

    render() {
        const { Clients: {
            isFetched,
            data, 
            error
        } 
    } = this.props; 
        if(!isFetched){
            return <LoadingScreen />
        } else if (error.on){
            return (
                <Root>
                    <T>{error.on}</T>
                </Root>
            )
        }
        return (
            <Root>
                <ListContainer>
                <FlatList
                    data={data}
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