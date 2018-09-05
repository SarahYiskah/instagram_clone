import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Login extends Component {
  login = () => {
    this.props.navigation.navigate('main')
  }

  render(){
    return (<View
      style={{
        flex: 1,
        alignItems: 'center',
        height: 100+'%',
        width: 100+'%',
        justifyContent: 'center'
      }}>
      <TouchableOpacity onPress={this.login}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>)
  }
}

export default Login
