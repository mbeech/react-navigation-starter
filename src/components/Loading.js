import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

function Loading() {
  return (
    <ActivityIndicator
      size="large"
      style={styles.loader}
    />
  );
}

let styles = StyleSheet.create({
  loader: {
    flex: 1,
  },
});

export default Loading
