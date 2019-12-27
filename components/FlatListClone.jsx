import React, { Component } from 'react'
import { Text, View, Image, Alert } from 'react-native'
import { FlatList, TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import _DATA from '../data/flatListData'
// just only render element we are looking ----
export default class FlatListClone extends Component {
    _listRenderItem = ({ item, index }) => {
        return (
            <View
                keyExtractor={item => item.id}
            >
                <View
                    style={{ flex: 1, flexDirection: 'row', backgroundColor: index % 2 ? 'palevioletred' : 'lightblue' }}
                >
                    <Image source={{ uri: item.imageUrl }}
                        style={{ width: 100, height: 100, margin: 5 }}
                    />
                    <View>
                        <Text style={{ padding: 10 }}> {item.name}</Text>
                        <Text style={{ padding: 10 }}> {item.description}</Text>
                    </View>
                </View>
                <View style={{ height: 3, backgroundColor: 'yellow' }}></View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                    onPress={() => Alert.alert('hello')}
                >
                    <View style={{ backgroundColor: 'gray' }}>
                        <Text style={{ padding: 20, textAlign: 'right' , color: '#ffc107' }}>
                            Add
                        </Text>
                    </View>
                </TouchableOpacity>
                <FlatList
                    data={_DATA}
                    renderItem={this._listRenderItem}
                />
            </View>
        )
    }
}