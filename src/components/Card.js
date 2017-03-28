import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

function Card({ item, navigate }) {
  return (
    <TouchableOpacity onPress={() => navigate('Item', {item})} style={styles.card}>
      <View>
        <Image
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          style={styles.image}
        />
        <View style={styles.body}>
          <Text style={styles.title}>{ item.title }</Text>
          <Text style={styles.description}>{ item.description }</Text>
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
    fontSize: 20,
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 10,
    color: '#111'
  },
  description: {
    color: '#333',
    lineHeight: 20
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
    height: 120
  },
  body: {
    padding: 16,
    marginTop: 120,
  }
});

export default Card