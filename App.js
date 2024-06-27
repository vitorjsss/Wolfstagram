import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppForm from './components/AppForm';
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <AppForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});