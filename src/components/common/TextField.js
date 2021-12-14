import React, {Component} from 'react';
import { TextInput } from 'react-native';

class TextField extends Component {
    render(){
        const {placeholder, onChangeText, style, value} = this.props;
        const {textFieldStyle} = styles;
        return (
            <TextInput 
                placeholder={placeholder} 
                style={[textFieldStyle, style]}
                onChangeText={onChangeText}
                value={value}
                placeholderTextColor='grey' 
            />
        );
    };
}

const styles = {
    textFieldStyle: {
        width: '90%',
        height: 40,
        borderBottomWidth: 2,
        alignSelf: 'center',
        marginVertical: 10,
        borderColor: 'green',
        color:'black',
    },
};


//export default alternative
export {TextField};
//export default TextField;