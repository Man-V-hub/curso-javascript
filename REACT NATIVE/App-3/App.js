import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons'; // Importa FontAwesome

// Importa las pantallas separadas
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

// Crear el stack de navegación
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Pantalla principal con los botones
function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Seleccione una opción</Text>
      
      <View style={styles.buttonContainer}>
        {/* Botón Home */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={[styles.button, styles.homeButton]}
            onPress={() => navigation.navigate('Home')}
          >
            {/* Ícono de la casa de FontAwesome */}
            <FontAwesome name="home" size={50} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonLabel}>Home</Text>
        </View>

        {/* Botón Settings */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={[styles.button, styles.settingsButton]}
            onPress={() => navigation.navigate('Settings')}
          >
            {/* Ícono de la tuerca de FontAwesome */}
            <FontAwesome name="cogs" size={50} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonLabel}>Settings</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',  // Botones alineados horizontalmente
    justifyContent: 'center',  // Centra los botones
    alignItems: 'center',  // Alinea los botones verticalmente
    marginTop: 10,
  },
  buttonWrapper: {
    alignItems: 'center',  // Centra el ícono y el texto
    marginHorizontal: 20,  // Espacio entre los botones
  },
  button: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeButton: {
    backgroundColor: 'yellow',
  },
  settingsButton: {
    backgroundColor: 'skyblue',
  },
  buttonText: {
    fontSize: 40,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,  // Espacio entre el ícono y el texto
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
