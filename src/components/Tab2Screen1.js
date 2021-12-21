import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Tab2Screen1 extends Component {
    componentDidMount(){
        //console.log('This.props params', this.props.route);
    }
    render() {
        return (
            <View>
                <Text>
                    This is the Tab2 Screen1
                </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Tab2 Screen2")}>
                    <Text color='black'>Go to Screen 2</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Tab2Screen1;