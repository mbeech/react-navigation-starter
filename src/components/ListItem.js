import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

function ListItem({ item }) {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: item.author.avatar_url }}
        style={styles.image}
      />
      <View style={styles.body}>
        <Text style={styles.title}>{ item.author.login }</Text>
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
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
  link: {
    color: 'dodgerblue',
    marginTop: 16,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  body: {
    paddingLeft: 16,
  }
});

export default ListItem
