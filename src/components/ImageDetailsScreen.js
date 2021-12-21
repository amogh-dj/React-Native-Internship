import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class ImageDetailsScreen extends Component {
    componentDidMount(){
        console.log('This.props params', this.props.route);
    }
    
    render() {
        return (
            <View style={StyleSheet.TextColor}>
                <Text>Image Details to be displayed on this page for Image ID: {this.props.route.params.image_id}</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text color='black'>Lets Go back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    TextColor:{
        color:'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default ImageDetailsScreen;