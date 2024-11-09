import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

export default function HomeScreen() {
  React.useEffect(() => {
    Alert.alert('¡Bienvenido/a al Home!');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido/a al Home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
