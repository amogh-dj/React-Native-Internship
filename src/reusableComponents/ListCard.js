import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

class ListCard extends Component{
    render(){

        const {imageStyle, cardStyle, textViewStyle, tColor} = styles;
        const {image, ownerName} = this.props;
        return (
            <View style={cardStyle}>
                <Image style={imageStyle} source={image} />
                <View style={textViewStyle}>
                    <Text style={tColor}>{ownerName}</Text>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    imageStyle:{
        height: 300,
        width: '100%',

    },
    cardStyle:{
        backgroundColor:'#d3d3d3',
        width: '90%',
        alignItems:'center',
        alignSelf:'center',
        borderWidth: 1,
        borderColor:'black',
        marginVertical: 10,
    },
    textViewStyle:{
        height: 50,
        alignItems:'center',
        justifyContent:'center',  
    },
    tColor:{
        color:'black',
    }
});

export default ListCard;