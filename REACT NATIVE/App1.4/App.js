import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'; 

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['rgba(131,58,180,1)', 'rgba(253,29,29,1)', 'rgba(252,176,69,1)']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.imageContainer}>
        <Image source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.customText}>Primer mensaje en una app y con un fondo degradado.</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Ir al Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
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
});
