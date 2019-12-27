import React, { Component } from 'react'
import { Text, View, Image, ScrollView, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default class ScrollViewClone extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        return (
            <>
                <ScrollView style={{ backgroundColor: 'red' }}
                    maximumZoomScale={3}
                    minimumZoomScale={0.2}
                >
                    <View>
                        <Image
                            source={require('../images/test.png')}
                            style={{ width: screenWidth, resizeMode: 'contain', height: 270, marginTop: 40 }} />
                        <TextInput style={{ color: '#fff', padding: 20, width: '100%', height: 80, borderColor: '#fff', borderWidth: 1 }}
                            keyboardType='default'
                            placeholder='enter your password'
                            secureTextEntry={true}
                        />
                    </View>
                    <View>
                        <Image
                            source={require('../images/test.png')}
                            style={{ width: screenWidth, resizeMode: 'cover', height: 270, marginTop: 40 }} />
                        <TextInput style={{ color: '#fff', padding: 20, width: '100%', height: 80, borderColor: '#fff', borderWidth: 1 }}
                            keyboardType='default'
                            placeholder='enter your password'
                            secureTextEntry={true}
                        />
                    </View>
                    <View>
                        <Image
                            source={require('../images/test.png')}
                            style={{ width: screenWidth, resizeMode:'stretch' , height: 270, marginTop: 40 }} />
                        <TextInput style={{ color: '#fff', padding: 20, width: '100%', height: 80, borderColor: '#fff', borderWidth: 1 }}
                            keyboardType='default'
                            placeholder='enter your password'
                            secureTextEntry={true}
                        />
                    </View>
                    <View>
                        <Image
                            source={require('../images/test.png')}
                            style={{ width: screenWidth, resizeMode:'center' , height: 270, marginTop: 40 }} />
                        <TextInput style={{ color: '#fff', padding: 20, width: '100%', height: 80, borderColor: '#fff', borderWidth: 1 }}
                            keyboardType='default'
                            placeholder='enter your password'
                            secureTextEntry={true}
                        />
                    </View>
                </ScrollView>
            </>
        )
    }
}
