import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import config from '../../config'

class Post extends Component {
  constructor(){
    super()
    this.state = {
      screenWidth: Dimensions.get('window').width,
      liked: false
    }
  }

  toggleLike = () => {
    this.setState({
      liked: !this.state.liked
    })
  }

  render(){
    const imageHeight = Math.floor(this.state.screenWidth * 1.1)
    return(
      <View style={{flex: 1, width: 100 + '%'}}>
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
        <TouchableOpacity activeOpacity={0.9} onPress={this.toggleLike}>
          <Image
          style={{width: this.state.screenWidth, height: 400}}
          source={{uri: `https://lh3.googleusercontent.com/IdqSnM84R9mEN2b7AP9LcvN29KuOChPB3PVhTTgiXUdgudiJeSDd_VLYsxV0FN95Urk68_aogAnBomjHRTwUnYf5-RE=s${imageHeight}-c`}}
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <Image style={[styles.icon, {height: 40, width: 40}]} source={this.state.liked ? config.images.loveIcon : config.images.heartIcon} />
          <Image style={[styles.icon, {height: 34, width: 34}]} source={config.images.bubbleIcon} />
          <Image style={[styles.icon, {height: 33, width: 33}]} source={config.images.arrowIcon} />
        </View>
        <View style={styles.iconBar}>
          <Image style={{height: 24, width: 24, marginHorizontal: 5}} source={config.images.smallHeartIcon} />
          <Text>30 likes</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100+'%',
    height: config.styleConstants.rowHeight,
    backgroundColor: 'rgb(250,250,250)',
    borderBottomColor: 'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userBar: {
    width: 100+'%',
    height: config.styleConstants.rowHeight,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  iconBar: {
    width: 100+'%',
    height: config.styleConstants.rowHeight,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgb(233,233,233)',
    alignItems: 'center'
  },
  icon: {
    marginLeft: 5
  }
})

export default Post
