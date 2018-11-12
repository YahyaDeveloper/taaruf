import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const Button = (props) => {
    return(
        <TouchableOpacity onPress = {props.onPress}>
            <View style = {styles.viewButton}>
                <Text>
                    {props.TextButton}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    viewButton:{
        marginTop:5,
        height:40,
        width:120,
        backgroundColor:'#3399FF',
        borderWidth:2,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Button;
