import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener @expo/vector-icons instalado

export default function App() {
  const showAlert = () => {
    Alert.alert('Alerta', 'Este es un mensaje de alerta.');
  };

  const showCustomAlert = () => {
    Alert.alert('Alerta Personalizada', 'Este es un mensaje de alerta personalizada.');
  };

  return (
    <LinearGradient
      colors={['rgba(131,58,180,1)', 'rgba(253,29,29,1)', 'rgba(252,176,69,1)']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Image source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')} style={styles.logo} />
      <Text style={styles.customText}>Primer mensaje en una app y con un fondo degradado.</Text>
      <Button title="Mostrar Alerta" onPress={showAlert} />
      <TouchableHighlight style={styles.customButton} onPress={showCustomAlert}>
        <Text style={styles.buttonText}>Botón Personalizado</Text>
      </TouchableHighlight>
      <Pressable style={styles.pressableButton} onPress={showCustomAlert}>
        <Ionicons name="logo-google" size={24} color="white" />
        <Text style={styles.buttonText}>Botón con Icono</Text>
      </Pressable>
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
    height: 100,
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  pressableButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#34A853',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
});