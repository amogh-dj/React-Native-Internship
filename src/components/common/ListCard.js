import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

// API URL - https://picsum.photos/v2/list

class ListCard extends Component{

    render(){

        const {imageStyle, cardStyle, textViewStyle, tColor, downloadButtonStyle} = styles;
        const {image, ownerName, detailsOnPress} = this.props;
        return (
            <View style={cardStyle}>
                <Image style={imageStyle} source={{uri: image}} />
                <View style={textViewStyle}>
                    <Text style={tColor}>{ownerName}</Text>
                </View>
                <TouchableOpacity 
                    style={downloadButtonStyle}
                    // onPress={() => {
                    //     Alert.alert("Download Button Pressed");
                    //}}
                    onPress={detailsOnPress}
                    >
                    <Text style={{color:'white', fontWeight: 'bold', fontSize: 25}}>View Details</Text>
                </TouchableOpacity>
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
        fontWeight: 'bold',
    },
    downloadButtonStyle:{
        backgroundColor: 'darkgreen',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export {ListCard};
//export default ListCard;