import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Crear las pantallas
function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
}

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
      
      <TouchableOpacity
        style={[styles.button, styles.homeButton]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>🏠</Text>
      </TouchableOpacity>
      <Text style={styles.buttonLabel}>Home</Text>

      <TouchableOpacity
        style={[styles.button, styles.settingsButton]}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>⚙️</Text>
      </TouchableOpacity>
      <Text style={styles.buttonLabel}>Settings</Text>

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
  button: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
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
    textAlign: 'center',
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
