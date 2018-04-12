import React from 'react'
import {
  View, Text
} from 'react-native'
import navStyles from '../styles/navStyles'

class DirectoryList extends React.Component {
  static navigationOptions = {
    title: "Directory List",
    ...navStyles
  }

  render() {
    return (
      <View>
        <Text>Directory List</Text>
      </View>
    )
  }
}

export default DirectoryList;
