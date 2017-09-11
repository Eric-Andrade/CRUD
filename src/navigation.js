import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Keyboard } from 'react-native';

import { colors } from './util/constants';
import HomeScreen from './screens/HomeScreen';
import NewClientScreen from './screens/NewClientScreen';
import ButtonHeader from './components/ButtonHeader';

const tabIcon = 27;

const TNavigator = TabNavigator({
    Home:{
        screen: HomeScreen,
        navigationOptions:() =>({
            headerTitle: 'Clientes',
            tabBarIcon: ({ tintColor, focused }) =>( 
                <Ionicons name={focused ? 'ios-people' : 'ios-people-outline'} size={tabIcon} style={{color: tintColor}}/>
            )
        })
    }
},{
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false, 
    initialRouteName: 'Home',
    tabBarOptions:{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.PRIMARY,
        inactiveTintColor: '#333',
        style:{
            backgroundColor: colors.WHITE,
            height: 47,
            paddingVertical: 5
        }
    }
});

const NewClientModal = StackNavigator({
    NewClient: {
        screen: NewClientScreen,
        navigationOptions: ({ navigation }) => ({
            headerRight: (
                <ButtonHeader side="right" onPress={() => {
                    Keyboard.dismiss();
                    navigation.goBack(null)
                    }}>
                    <EvilIcons name="close" size={30} color={colors.PRIMARY100}/>
                </ButtonHeader>
            )
        })
    }
},
    { headerMode: 'none'}
);

const SNavigator = StackNavigator({
    Home:{
        screen: TNavigator,
        navigationOptions: ({ navigation }) => ({
            headerRight: (
                <ButtonHeader side="right" onPress={() => navigation.navigate('NewClient')}>
                    <Ionicons name='md-person-add' size={tabIcon} color={colors.PRIMARY}/>
                </ButtonHeader>
            )
        })
    },
    NewClient:{
        screen: NewClientModal
    }
},{
    gesturesEnabled: true,
    mode: 'modal',
})

class AppNavigator extends Component {
    render() {
        return (
            <SNavigator/>
        );
    }
}

export default AppNavigator;