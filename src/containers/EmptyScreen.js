import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class EmptyScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.placeholder}>Nothing to see here</Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    color: '#999',
    padding: 50,
    fontSize: 28,
  },

});

EmptyScreen.navigationOptions = {
  title: 'Tab',
  header: ({ navigate }) => ({
    left: (
      <Icon
        name="menu"
        size={28}
        onPress={() => navigate('DrawerOpen')}
        style={{padding: 10}}
      />
    )
  })
};

export default EmptyScreen
