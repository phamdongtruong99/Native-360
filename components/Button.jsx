import React, { Component } from 'react'
import { Text, View, Button, Alert } from 'react-native'

export default class ButtonClone extends Component {
    _onPressButton = () => {
        Alert.alert('hello on press')
    }
    render() {
        return (
            <React.Fragment>
                <Button
                    title="Press me"
                    color="#ffc107"
                    onPress={this._onPressButton}
                />
            </React.Fragment>
        )
    }
}
