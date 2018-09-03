import React, { Component } from 'react'
import { Post } from '../presentation'
import { FlatList } from 'react-native'

class PostFeed extends Component {
  _renderPost = () => {
    return <Post />
  }
  render(){
    return <FlatList
      data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
      keyExtractor={item => item.toString()}
      renderItem={this._renderPost}
      />
  }
}

export default PostFeed
