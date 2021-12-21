import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class NextScreen extends Component {
    componentDidMount(){
        //console.log('This.props params', this.props.route);
    }
    render() {
        return (
            <View>
                <Text>
                    This is the Next Screen
                </Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text color='black'>Lets Go back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default NextScreen;