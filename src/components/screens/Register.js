import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet  } from 'react-native'

class Register extends Component {

  state = {
    password: '',
    username: ''
  }

  register = () => {
    alert(`username: ${this.state.username} password: ${this.state.password}`)
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
        <Text>Register</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          onChangeText={(value) => this.setState({'username': value})}
          underlineColorAndroid='rgba(0,0,0,0)'
          autoCorrect={false}
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry
          onChangeText={(value) => this.setState({'password': value})}
          underlineColorAndroid='rgba(0,0,0,0)'
          value={this.state.password}
        />
        <Button title="Signup" onPress={this.register}/>
    </View>)
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    borderWidth: 1,
    width: 80 + '%',
    marginTop: 10,
    marginBottom: 10,
  }
})

export default Register
