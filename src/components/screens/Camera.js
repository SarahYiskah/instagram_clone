import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Camera extends Component {
  render(){
    return (<View
      style={{
        flex: 1,
        alignItems: 'center',
        height: 100+'%',
        width: 100+'%',
        justifyContent: 'center'
      }}>
        <Text>Camera</Text>
    </View>)
  }
}

export default Camera
