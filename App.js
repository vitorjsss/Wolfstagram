import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HomeScreen from './components/HomeScreen';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HomeScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
