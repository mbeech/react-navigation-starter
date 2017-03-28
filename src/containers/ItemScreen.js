import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class ItemScreen extends Component {

  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    let item = this.props.navigation.state.params.item;

    return (
      <View style={styles.card}>
        <Image
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          style={styles.image}
        />
        <View style={styles.body}>
          <Text style={styles.description}>{ item.description }</Text>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  description: {
    color: '#333',
    lineHeight: 20,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200
  },
  body: {
    padding: 16,
    marginTop: 200,
  }
});

ItemScreen.navigationOptions = {
  title: ({ state }) => state.params.item.title,
  tabBar: {
    visible: false
  }
  /*
  header: ({ navigate }) => ({
    left: (
      <Text onPress={() => navigate('DrawerOpen')}>Back</Text>
    ),
  }),
  */
};

export default ItemScreen
