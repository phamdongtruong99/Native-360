import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { getImagesFromServer } from '../networking/server';

export default class LifeCycleComponent extends Component {
    constructor(props) {
        super(props)
        console.log(Date.now(), ' time  start <>');
        this.state = {
            numberOfRefresh: 0,
            listImages: [],
        }
        // setInterval(() => {
        //     console.log(this.state.numberOfRefresh);
        //     this.setState({
        //         numberOfRefresh: this.state.numberOfRefresh + 1
        //     })
        // }, 15000)
    }

    resFreshDataFromServer = async () => {
        const data = await getImagesFromServer().then((data) => data);
        console.log('[DATA]', data);

        this.setState({
            listImages: data
        })
    }

    UNSAFE_componentWillMount() {
        console.log(Date.now(), `<I> componentWillMount`);
    }
    componentDidMount() {
        console.log(Date.now(), `<II> componentDidMount`);
        this.resFreshDataFromServer();
    }
    // when component update
    shouldComponentUpdate() {
        console.log('🐍 >>> shouldComponentUpdate');
        return true;
    }
    componentWillUpdate() {
        console.log('🆙 >>> componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('❎ >> componentDidUpdate');
    }
    render() {
        console.log(Date.now(), `<III> render()`);
        const { listImages } = this.state;
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: 'violet' }}>
                <View>
                    {/* {listData} */}
                    <Text>hello</Text>
                </View>
            </View>
        )
    }
}
