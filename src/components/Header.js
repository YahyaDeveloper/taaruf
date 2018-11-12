import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header = (props) => {
    return(
        <View style = {styles.headerStyle}>
            <Text style = {styles.textStyle}>
                {props.HeaderText}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle:{
        height:50,
        width:'100%',
        justifyContent:'center',
        backgroundColor:'#00CC00',
        flexDirection:'column',
        alignItems:'center',
        borderColor:'#E6E600',
        position:'relative',
        top:0,
        left:0,
        right:0
    },
    textStyle:{
        fontSize:20
    }
})

export default Header;