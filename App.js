import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaPessoas from './pessoas/ListaPessoas';

export default function App() {
  return (
    <View style={styles.container}>
      <ListaPessoas/>
      <StatusBar style="auto" />
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
