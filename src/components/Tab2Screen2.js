import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Tab2Screen2 extends Component {
    componentDidMount(){
        //console.log('This.props params', this.props.route);
    }
    render() {
        return (
            <View>
                <Text>
                    This is the Tab2 Screen2
                </Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text color='black'>Lets Go back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Tab2Screen2;