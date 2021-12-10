import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import ListCard from './reusableComponents/ListCard';

class ListViewScreen extends Component {
    render() {
        const {ViewStyle, TextColor, HeaderViewStyle} = styles;
        const DATA = [
            {
                image: require('./cat2.jpg'),
                owner: 'Amogh Joshi'
            },
            {
                image: require('./cat.jpg'),
                owner: 'Radhey Borse'
            },
            {
                image: require('./cat3.jpg'),
                owner: 'Parth Bhambure'
            },
        ];


        return (
            <View style={ViewStyle}>
                <View style={HeaderViewStyle}>
                    <Text style={TextColor}>
                        Image Gallery
                    </Text>
                </View>

                {/* <ScrollView>
                    <ListCard image={require('./cat2.jpg')} ownerName="Amogh Joshi" />
                    <ListCard image={require('./cat3.jpg')} ownerName="Parth Bhambure" />
                    <ListCard image={require('./cat.jpg')} ownerName="Radhey Borse" />
                </ScrollView> */}

                <FlatList
                    data={DATA}
                    renderItem={item => {
                        return (
                            <ListCard image={item.item.image} ownerName={item.item.owner} />
                        )
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewStyle:{
        backgroundColor: 'white',
        flex: 1,
    },
    TextColor:{
        color:'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    HeaderViewStyle:{
        backgroundColor:'#d3d3d3',
        height: 72,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ListViewScreen;