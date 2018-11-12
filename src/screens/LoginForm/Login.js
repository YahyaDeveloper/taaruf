import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Actions } from "react-native-router-flux";

class Login extends Component {
  state = {
    userName: "",
    password: ""
  };
  render() {
    return (
      <View style={{ flex: 1}}>
        <Header HeaderText="Login Ta'aruf Yuk" />
        <View style={{flex:1,justifyContent:'center'}}>
          <View style={styles.viewLogin}>
            <TextInput
              onChangeText={text => this.setState({ userName: text })}
              value={this.userName}
              placeholder="User Name"
            />
          </View>
          <View style={styles.viewLogin}>
            <TextInput
              secureTextEntry
              onChangeText={text => this.setState({ password: text })}
              value={this.password}
              placeholder="Password"
            />
          </View>
        <View style={{ alignItems: "center" }}>
          <Button 
          TextButton={"LOGIN"} 
          onPress = {()=> Actions.start()}
          />
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewLogin: {
    margin: 5,
    borderWidth: 3,
    borderColor: "#00CC00",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#FFFF",
    borderRadius: 60,
    paddingLeft: 50
  },
  viewTextInput: {
    justifyContent: "center",
    flexDirection: "row"
  }
});

export default Login;
