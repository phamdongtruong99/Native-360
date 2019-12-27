import React, { Component } from 'react'
import { Text, View, Alert, Image } from 'react-native'
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler'

export default class TouchableHightLightClone extends Component {
    render() {
        return (
            <View>
                <TouchableHighlight
                    underlayColor='red'
                    onShowUnderlay={() => Alert.alert('onShowUnderlay')}
                    onPress={() => console.log('!onShowUnderlay dependent onPress')}
                >
                    <View style={{ backgroundColor: 'gray' }}>
                        <Text style={{ padding: 20, color: '#ffc107' }}>
                            TouchableHighlight
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableNativeFeedback
                    onLongPress={() => Alert.alert('onLong press')}
                >
                    <View style={{ backgroundColor: '#1d1d9d' }}>
                        <Text style={{ padding: 20, color: '#ffc107' }}>
                            TouchableNativeFeedback
                        </Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableOpacity>
                    <View style={{ backgroundColor: '#1d4d9d' }}>
                        <Text style={{ padding: 20, color: '#ffc107' }}>
                            TouchableOpacity
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
