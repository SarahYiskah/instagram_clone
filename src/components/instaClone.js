import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

class InstaClone extends Component {
  render(){
    return(
      <View style={{flex:1, width:100+'%', height: 100+'%'}}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>
        <View style={styles.userBar}>
        </View>
        <Image
          style={{width:100+'%', height: 500}}
          source={{uri: 'https://lh3.googleusercontent.com/IdqSnM84R9mEN2b7AP9LcvN29KuOChPB3PVhTTgiXUdgudiJeSDd_VLYsxV0FN95Urk68_aogAnBomjHRTwUnYf5-RE'}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tempNav: {
     width: 100+'%',
     height: 50,
     backgroundColor: 'rgb(250,250,250)',
     borderBottomColor: 'rgb(233,233,233)',
     borderBottomWidth: StyleSheet.hairlineWidth,
     justifyContent: 'center',
     alignItems: 'center'
  },
  userBar: {
     width: 100+'%',
     height: 50,
     backgroundColor: 'white',
  }
})

export default InstaClone
