import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
        {/*mapview*/}
      {/*<MapView style={styles.map}*/}
      {/*  Region{{*/}

      {/*}*/}
      {/*         }*/}
      {/*/>*/}
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
