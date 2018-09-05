import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Profile extends Component {
  logout = () => {
    this.props.navigation.navigate('intro')
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
      <Text>Profile page</Text>
      <TouchableOpacity onPress={this.logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>)
  }
}

export default Profile
