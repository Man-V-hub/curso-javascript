import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#ff3399', '#ff80ff', '#ff00b3']}
      style={styles.gradient}
    >
      <View style={styles.container}>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://i.scdn.co/image/ab67616d00001e0220e3fcdac98f9eda823f5540' }}
            style={styles.image}
          />
          <Text style={styles.title}>CupcakKe</Text>
          <Text style={styles.subtitle}>Artista de Dance/Electrónica y Hip-hop/rap</Text>
          <Text style={styles.description}>
          Elizabeth Eden Harris, conocida artísticamente como Cupcakke, es una rapera y compositora estadounidense. Cupcakke comenzó su carrera como rapera al publicar material en internet a fines de 2012.          </Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.lacuarta.com/resizer/v2/UCE5DMS6VNG63IAMZZXFPPZIQM.jpeg?quality=80&smart=true&auth=678db59db9adbc1679cd2d84ec0614f347e69bb6092fe5b4cf50a62112898f8c&width=1023&height=682' }}
            style={styles.image}
          />
          <Text style={styles.title}>Doja Cat</Text>
          <Text style={styles.subtitle}>Artista de Hip-hop/rap</Text>
          <Text style={styles.description}>
          Amala Ratna Zandile Dlamini, más conocida por su nombre artístico Doja Cat, es una rapera, cantante, compositora y productora discográfica estadounidense.​​          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 13,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#363636',
    lineHeight: 20,
    textAlign: 'justify'
  },
});