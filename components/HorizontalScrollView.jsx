import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'

export default class HorizontalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onscroll={(event) => {
                    let coordinates = event.nativeEvent.contentOffset.x
                    console.log(coordinates)
                }}
                scrollEventThrottle={10}
                onMomentumScrollBegin={() => console.log('scroll start')}
                onMomentumScrollEnd={() => console.log('scroll end')}
            >
                <View style={{ backgroundColor: 'palevioletred', height: screenHeight, width: screenWidth }}>
                    <Text>1</Text>
                </View>
                <View style={{ backgroundColor: 'salmon', height: screenHeight, width: screenWidth }}>
                    <Text>2</Text>
                </View>
                <View style={{ backgroundColor: '#1d1d1d', height: screenHeight, width: screenWidth }}>
                    <Text>3</Text>
                </View>
            </ScrollView >
        )
    }
}
