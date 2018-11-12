import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';

const ViewCV = (props) => {
    return(
        <View style={styles.viewDropDown}>
            {props.children}
        </View>
    )
}


const styles = StyleSheet.create({
    viewDropDown:{
        marginLeft:10,
        marginRight:10
    }
})
export default ViewCV;