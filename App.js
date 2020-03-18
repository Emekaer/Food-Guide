import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MainNavigator from './navigation/MealsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';
import {Provider} from 'react-redux';


const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'opensans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'opensansbold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (<AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
    />);
  };

  return (
  <Provider store={store}>
    <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
  </Provider>
  );
}







