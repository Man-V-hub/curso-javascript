import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['rgba(131,58,180,1)', 'rgba(253,29,29,1)', 'rgba(252,176,69,1)']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Image source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')} style={styles.logo} />
      <Text style={styles.customText}>Primer mensaje en una app y con un fondo degradado.</Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
  },
  logo: {
    width: 100,
    height: 110,
    marginBottom: 20,
  },
});
