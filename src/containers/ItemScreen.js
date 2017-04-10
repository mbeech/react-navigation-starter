import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

class ItemScreen extends Component {

  render() {
    let item = this.props.navigation.state.params.item;

    return (
      <ScrollView style={styles.card}>
        <Image
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          style={styles.image}
        />
        <View style={styles.body}>
          <View style={styles.user}>
            <Image
              source={{ uri: item.author.avatar_url }}
              style={styles.userAvatar}
            />
            <Text style={styles.userUsername}>{ item.author.login }</Text>
          </View>
          <Text style={styles.title}>{ item.commit.message }</Text>
          <Text style={styles.description}>{ item.sha }</Text>
        </View>
      </ScrollView>
    );
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
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 10,
    color: '#111',
  },
  description: {
    color: '#999',
    lineHeight: 20,
    fontSize: 13,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: '#eee',
  },
  body: {
    padding: 16,
    marginTop: 200,
  },
  user: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#eee',
  },
  userUsername: {
    paddingLeft: 10,
    fontWeight: '600',
    color: '#555',
  },
});

ItemScreen.navigationOptions = {
  title: ({ state }) => state.params.item.title,
  tabBar: {
    visible: false,
  },
};

export default ItemScreen;
