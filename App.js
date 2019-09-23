import {View} from 'react-native';
import React from 'react';
import Header from './src/Components/Header/header.js';
import AppContainer from './src/Routes.js';
import Footer from './src/Components/footer/footer';
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <AppContainer />
        <Footer />
      </View>
    );
  }
}
