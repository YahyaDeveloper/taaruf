import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';

class BuatAkun extends Component {
    state = {
        userName:'',
        password:'',
        passwordVerify:''
    }
    
    render() {
        return(
            <View style = {{flex:1}}>
                <Header HeaderText="Create Accout Ta'aruf Yuk"/>
                <View style = {{flex:1,justifyContent:'center'}}>
                <View style={styles.viewLogin}>
                    <TextInput
                    onChangeText = {text => this.setState({userName:text})}
                    value = {this.state.userName}
                    placeholder = 'User Name'
                    />
                </View>
                <View style={styles.viewLogin}>
                    <TextInput
                    secureTextEntry
                    onChangeText = {text => this.setState({password:text})}
                    value = {this.state.password}
                    placeholder = 'Password'
                    />
                </View>
                <View style={styles.viewLogin}>
                    <TextInput
                    secureTextEntry
                    onChangeText = {text => this.setState({passwordVerify:text})}
                    value = {this.state.passwordVerify}
                    placeholder = 'Verifikasi Password'
                    />
                </View>
                <View style = {{alignItems:'center'}}>
                    <Button TextButton={'DAFTAR AKUN'}/>
                </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewLogin:{
        margin:5,
        borderWidth:3,
        borderColor:'#00CC00',
        justifyContent:'center',
        alignItems:'flex-start',
        backgroundColor:'#FFFF',
        borderRadius:60,
        paddingLeft:50
    },
    Textdaftar:{
        textAlign:'right',
        color:'#999966',
        fontSize:16
    },
    viewTextDaftar:{

    }
});

export default BuatAkun;