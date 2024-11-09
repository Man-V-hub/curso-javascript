import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener @expo/vector-icons instalado
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Asegúrate de crear este archivo

const Stack = createStackNavigator();

function MainScreen({ navigation }) {
  const showAlert1 = () => {
    Alert.alert('Alerta', 'Este es el mensaje del primer botón.');
  };

  const showAlert2 = () => {
    Alert.alert('Alerta Personalizada', 'Este es el mensaje del segundo botón.');
  };

  const showAlert3 = () => {
    Alert.alert('Alerta con Icono', 'Este es el mensaje del tercer botón.');
  };

  return (
    <LinearGradient
      colors={['rgba(139,67,201,1)', 'rgba(255,149,0,1)']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.imageContainer}>
        <Image source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.customText}>Municipalidad de Quinchao</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="PULSA AQUI" onPress={showAlert1} />
        <TouchableHighlight style={styles.customButton} onPress={showAlert2}>
          <Text style={styles.buttonText}>PRESIONA AQUI</Text>
        </TouchableHighlight>
        <Pressable style={styles.pressableButton} onPress={showAlert3}>
          <Ionicons name="logo-google" size={24} color="white" />
          <Text style={styles.buttonText}>ENVIAR</Text>
        </Pressable>
        <Button title="Iniciar Sesión" onPress={() => navigation.navigate('Home')} style={styles.loginButton} />
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  textContainer: {
    marginBottom: 20,
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  customText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
  },
  logo: {
    width: 100,
    height: 110,
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
  loginButton: {
    marginTop: 20, 
  },
});
