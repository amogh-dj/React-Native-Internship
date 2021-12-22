import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {getImageListFromAPI} from '../actions';
import AsyncStore from '../extras/AsyncStore';


class SplashScreen extends Component {

    componentDidMount(){

        const asyncStore = new AsyncStore();
        //asyncStore.storeData('openTimes', '0');
        asyncStore.getData('openTimes').then(value =>{
            console.log('VALUE:', value);
            if (value) {
                console.log('Opening 2nd time or later so value is created in async store during first time');
                this.props.getImageListFromAPI(this.props.navigation);
            } else {
                console.log('Opeing first time so no value is stored in Async Store');
                asyncStore.storeData('openTimes', '1');
                this.props.navigation.navigate('onBoarding');
            }
        });
        //this.props.getImageListFromAPI(this.props.navigation);
        // setTimeout(() => {
        //     this.props.navigation.navigate('Tab Screens');
        // }, 2000);
    }



    render() {
        return (
            <View>
                <Text> Welcome to my App</Text>
                <ActivityIndicator size="large" color="green"/>
            </View>
        );
    }
}

export default connect(null, {getImageListFromAPI})(SplashScreen);