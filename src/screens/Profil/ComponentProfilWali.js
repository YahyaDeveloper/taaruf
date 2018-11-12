import React,{ Component } from 'react';
import { View,Text,TextInput,StyleSheet } from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';


class ComponentProfilWali extends Component {
    state ={
        test:''
    }
    render() {
        let dataJenisKelamin = [{
            value: 'Ikhwan/Laki-Laki'
        }, {
            value: 'Akhwat/Perempuan'
        }
    ]
    const {test} = this.state
        return(
            <View>
            <View style = {styles.viewDropDown}>
                    <Dropdown
                    label = 'Jenis Kelamin'
                    data={dataJenisKelamin}
                    shadeOpacity={0}
                    />
            </View>
            <View>
                <TextField
                label='Nama Lengkap'
                onChangeText={text => this.setState({test:text})}
                value={test}
                />
            </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    viewDropDown:{
        marginLeft:10,
        marginRight:10
    }
})
export default ComponentProfilWali;