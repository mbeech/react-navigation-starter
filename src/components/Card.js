import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

function Card({ item, navigate }) {
  return (
    <TouchableOpacity onPress={() => navigate('Item', { item })} style={styles.card}>
      <View>
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
          <Text style={styles.link}>Read more</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

let styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 15,
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: '#eee',
  },
  body: {
    padding: 16,
    marginTop: 120,
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

export default Card;
