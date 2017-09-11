import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Provider } from 'react-redux';
import { UIManager } from 'react-native';
import AppNavigator from './src/navigation';
import store from './src/redux/store';
import { colors } from './src/util/constants';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <ActionSheetProvider>      
          <ThemeProvider theme={colors}>
            <AppNavigator />
          </ThemeProvider>
        </ActionSheetProvider>
      </Provider>
    );
  }}