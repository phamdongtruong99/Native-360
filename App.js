import React, { Component, Fragment, useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView, Text, View, TextInput, Keyboard, Dimensions } from 'react-native';
import ButtonClone from './components/Button.jsx';
import TouchableHightLightClone from './components/TouchableHightLightClone.jsx'
import ScrollViewClone from './components/ScrollViewClone.jsx'
import HorizontalScrollView from './components//HorizontalScrollView.jsx'
import FlatListClone from './components/FlatListClone.jsx';

const JustifyContent = () => {
  return (
    <React.Fragment>
      <Text style={{ width: 50, height: 50, backgroundColor: 'red' }} > 11</Text>
      <Text style={{ width: 50, height: 50, backgroundColor: 'blue' }} > 2</Text>
      <Text style={{ width: 50, height: 50, backgroundColor: 'gray' }} >3</Text>
    </React.Fragment>
  )
}

const TheInput = () => {
  const [isText, setText] = useState(null)
  console.log(isText);
  return (
    <React.Fragment>
      <TextInput style={{ color: '#fff', padding: 20, width: '100%', height: 80, borderColor: '#fff', borderWidth: 1 }}
        keyboardType='email-address'
        placeholder='enter your email'
        placeholderTextColor='red'
        onChangeText={(text) => setText(text)}
      />
      <Text style={{ color: '#fff' }}> {isText}</Text>
      <TextInput style={{ color: '#fff', padding: 20, width: '100%', height: 80, borderColor: '#fff', borderWidth: 1 }}
        keyboardType='default'
        placeholder='enter your password'
        secureTextEntry={true}
      />
      <TextInput style={{ marginTop: 20, color: '#fff', padding: 20, width: '100%', height: 80, borderColor: '#fff', borderWidth: 1 }}
        keyboardType='default'
        multiline={true}
        editable={true}
        autoFocus={true}
        placeholder='test keyboard Dismiss'
        returnKeyType='done'
        onSubmitEditing={Keyboard.dismiss}
      />
    </React.Fragment>
  )
}
export default class App extends Component {
  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          {/* <View style={{ backgroundColor: '#1d1d1d', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff' }}> */}
          {/* <ButtonClone /> */}
          {/* <TouchableHightLightClone /> */}
          {/* </View> */}
          {/* <ScrollViewClone /> */}
          {/* <HorizontalScrollView /> */}
          <FlatListClone />
        </View>
      </>
    )
  }
}