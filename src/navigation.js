import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Keyboard } from 'react-native';

import { colors } from './util/constants';
import HomeScreen from './screens/HomeScreen';
import MeScreen from './screens/MeScreen'
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
    },
    Perfil:{
        screen: MeScreen,
        navigationOptions:() =>({
            headerTitle: 'Mi perfil',
            tabBarIcon: ({ tintColor, focused }) =>( 
                <Ionicons name={focused ? 'ios-person' : 'ios-person-outline'} size={tabIcon} style={{color: tintColor}}/>
            )
        })
    }
},{
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    initialRouteName: 'Home',
    tabBarOptions:{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.PRIMARY,
        inactiveTintColor: '#333',
        pressColor: colors.PRIMARY,
        indicatorStyle: { backgroundColor: colors.PRIMARY },
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
                    <EvilIcons name="close" size={tabIcon} color={colors.PRIMARY}/>
                </ButtonHeader>
            ),
            headerLeft: (undefined)
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
                    <Ionicons name='md-person-add' size={25} color={colors.PRIMARY}/>
                </ButtonHeader>
            )
        })
    },
    NewClient:{
        screen: NewClientModal,
        navigationOptions:() => ({
            title: 'Nuevo cliente'
        })
    }
},{
    cardStyle: {
        backgroundColor: colors.GRAY100
    },
    navigationOptions: () => ({
        headerStyle:{
            backgroundColor: colors.WHITE,
            borderBottomWidth: 2,
            borderBottomColor: colors.PRIMARYRGBA,
        },
        headerTitleStyle:{
            color: colors.GRAY600,
            fontWeight: '400'
        }
    }),
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