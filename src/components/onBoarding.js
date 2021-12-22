import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getImageListFromAPI} from '../actions';

class onBoarding extends Component {
    componentDidMount(){
        //console.log('This.props params', this.props.route);
    }
    render() {
        return (
            <View>
                <Text color="Red">
                    This is the onBoarding Screen
                </Text>
                <TouchableOpacity onPress={() => this.props.getImageListFromAPI(this.props.navigation)}>
                    <Text color='Red'>NEXT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, {getImageListFromAPI})(onBoarding);