import React, { Component, Fragment, useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native';

import LifeCycleComponent from './components/LifeCycle';
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LifeCycleComponent />
      </View>
    )
  }
}