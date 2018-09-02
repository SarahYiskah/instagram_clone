import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'

class InstaClone extends Component {
  constructor(){
    super()
    this.state = {
      screenWidth: Dimensions.get('window').width
    }
  }

  render(){
    const imageHeight = Math.floor(this.state.screenWidth * 1.1)
    return(
      <View style={{flex:1, width:100+'%', height: 100+'%'}}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>
        <View style={styles.userBar}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
            style={styles.userPic}
            source={{uri: 'https://lh3.googleusercontent.com/0l8_JJemaCs0qF9VUiduB-6AiOfmPcPEnq5BW4sSHYwvUBq2vJDf77ebl0VKbRvoDV5LIdPfKcrz-9tiSNqFii9TDw'}} />
            <Text style={{marginLeft: 10}}>sarahyiskah</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 30}}>...</Text>
          </View>
        </View>
        <Image
          style={{width: this.state.screenWidth, height: 400}}
          source={{uri: `https://lh3.googleusercontent.com/IdqSnM84R9mEN2b7AP9LcvN29KuOChPB3PVhTTgiXUdgudiJeSDd_VLYsxV0FN95Urk68_aogAnBomjHRTwUnYf5-RE=s${imageHeight}-c`}}
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
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
})

export default InstaClone
