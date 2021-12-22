import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import {ListCard, TextField} from './common';
import axios from 'axios';
import {connect} from 'react-redux';
import {imageSearchBoxValueChanged, getImageListFromAPI, toggleImageListLoader} from '../actions'

class ListViewScreen extends Component {

    state = {
        imageList: [],
        showLoader: false,
    };

    renderLoader() {
        //if (this.state.showLoader){
        if (this.props.showLoader){
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
        //this.getImagesAPICall();
        //console.log('Here');
        //console.log(this.props);
        //console.log('Here too!');
        //this.props.toggleImageListLoader(true);
        //this.props.getImageListFromAPI();
        //this.props.toggleImageListLoader(false);
    }


    render() {
        const {ViewStyle, TextColor, HeaderViewStyle} = styles;
        const DATA = [

            /*{
                image: require('../cat2.jpg'),
                owner: 'Amogh Joshi'
            },
            {
                image: require('../cat.jpg'),
                owner: 'Radhey Borse'
            },
            {
                image: require('../cat3.jpg'),
                owner: 'Parth Bhambure'
            },*/

        ];
        //this.getImagesAPICall();

        return (
            <View style={ViewStyle}>
                {/* <View style={HeaderViewStyle}>
                    <Text style={TextColor}>
                        Image Gallery
                    </Text>
                </View> */}

                {/* <ScrollView>
                    <ListCard image={require('./cat2.jpg')} ownerName="Amogh Joshi" />
                    <ListCard image={require('./cat3.jpg')} ownerName="Parth Bhambure" />
                    <ListCard image={require('./cat.jpg')} ownerName="Radhey Borse" />
                </ScrollView> */}

                <TextField placeholder="Search" 
                onChangeText={value => {
                    //console.log('Value of text input changed to', value);
                    this.props.imageSearchBoxValueChanged(this.props.image_list, value);
                }}
                value={this.props.image_search_value}
                />
                {/* <TouchableOpacity onPress={() => {
                    console.log('Lets Navigate to next screen using this.props', this.props);
                    this.props.navigation.navigate('Image Details');

                }}>
                    <Text>Go to details Screen!</Text>
                </TouchableOpacity> */}
                <FlatList
                    //data={this.state.imageList}
                    //data={this.props.image_list}
                    data={this.props.filtered_image_list}
                    renderItem={item => {
                        return (
                            <ListCard 
                                image={item.item.download_url} 
                                ownerName={item.item.author} 
                                detailsOnPress={() => {
                                    this.props.navigation.navigate('Image Details', {
                                        // Pass Data Params with Navgitation in form of key value pairs
                                        image_id: item.item.id,
                                    });
                                }}
                            />
                        );
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

const mapStateToProps = state => {
    return {
        image_search_value: state.imageListing.image_search,
        image_list: state.imageListing.image_list,
        showLoader: state.imageListing.showLoader,
        filtered_image_list: state.imageListing.filtered_image_list,
    }
}

export default connect(mapStateToProps, {imageSearchBoxValueChanged, getImageListFromAPI, toggleImageListLoader})(ListViewScreen);