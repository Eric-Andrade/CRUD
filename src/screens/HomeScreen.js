import React, {Component} from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';
import { LoadingScreen } from '../commons/LoadingScreen'
import { fetchClients } from './redux/actions'

const kpLogoSize = 40;
const logoRadius = kpLogoSize / 2;

const Root = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
`;
const ListContainer = styled.View`
    flex: 1;
    width: 100%;
    justifyContent: center;
`;
const T = styled.Text`
    color: ${colors.GRAY600};
    fontSize: 16;
    textAlign: left;
`;
const ListItemsContainer = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    flexDirection: row
    alignItems: center;
    backgroundColor: ${colors.WHITE};
    marginVertical: 1.5;
`;
const Touch = styled.View`
    flex: 1
    height: 60;
    width: 100%;    
    justifyContent: center;
`;
const KPLogoContainer = styled.View`
    flex: 0.2;
    alignSelf: stretch;
    alignItems: center;
    justifyContent: center;
`;
const KPLogo = styled.Image`
    height: ${kpLogoSize};
    width: ${kpLogoSize};
    borderRadius: ${logoRadius}

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
                                <KPLogoContainer>
                                    <KPLogo source={require('../../assets/logokity.png')}/>
                                </KPLogoContainer>
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