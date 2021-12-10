import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import ListCard from './reusableComponents/ListCard';
import axios from 'axios';

class ListViewScreen extends Component {

    state = {
        imageList: [],
        showLoader: false,
    };

    renderLoader() {
        if (this.state.showLoader){
            return <ActivityIndicator style={styles.loaderStyle}
                size='large'
                color='green'
            />
        }
    }

    getImagesAPICall(){
        this.setState({
            showLoader: true,
        });
        axios.get('https://picsum.photos/v2/list')
        .then(response => {
            console.log(response);
            this.setState({
                imageList: response.data,
                showLoader: false,
            });
        })
        .catch(error => {
            console.log(error);
            this.setState({
                showLoader: false,
            })
        });
    }

    componentDidMount() {
        this.getImagesAPICall();
    }


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
        //this.getImagesAPICall();

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
                    data={this.state.imageList}
                    renderItem={item => {
                        return (
                            <ListCard image={item.item.download_url} ownerName={item.item.author} />
                        )
                    }}
                />
                {this.renderLoader()}
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
    loaderStyle: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0
    },
});

export default ListViewScreen;