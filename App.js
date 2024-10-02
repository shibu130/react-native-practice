import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>working on the first application</Text>
      <StatusBar style="auto" />
      <Button title='clickme'></Button>
    </View>
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
