import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  const handleArtistPress = (artistName) => {
    Alert.alert('Información del Artista', `Detalles sobre ${artistName}`);
  };

  const handlePlaylistPress = () => {
    Alert.alert('Notificación', 'Agregado a la Playlist');
  };

  const handleFavoritesPress = () => {
    Alert.alert('Notificación', 'Agregado a Favoritos');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 5 Artistas Más Sonados</Text>

      <TouchableOpacity onPress={() => handleArtistPress('Ozuna')}>
        <Image
          source={{ uri: 'https://eltitular.do/et/wp-content/uploads/2021/05/19_E_16_2p01-e15475979594871.jpg' }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.artistName}>OZUNA</Text>
      </TouchableOpacity>

      <View style={styles.grid}>
        <TouchableOpacity onPress={() => handleArtistPress('Becky G')}>
          <Image
            source={{ uri: 'https://www.lafactoriadelshow.com/blog/wp-content/uploads/2022/05/becky-g-.jpg' }}
            style={styles.imageSmall}
            resizeMode="cover"
          />
          <Text style={styles.artistName}>BECKY G</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleArtistPress('Adele')}>
          <Image
            source={{ uri: 'https://toplatino.net/wp-content/uploads/2016/03/Adele-600x381.jpg' }}
            style={styles.imageSmall}
            resizeMode="cover"
          />
          <Text style={styles.artistName}>ADELE</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleArtistPress('Luis Fonsi')}>
          <Image
            source={{ uri: 'https://www.lafactoriadelshow.com/pujaes/avatars/fitxes/7121_xth.jpg?596df9c8' }}
            style={styles.imageSmall}
            resizeMode="cover"
          />
          <Text style={styles.artistName}>LUIS FONSI</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleArtistPress('Manuel Turizo')}>
          <Image
            source={{ uri: 'https://www.lacuarta.com/resizer/v2/2QSUDNXCRJAA7M4EM36OB3NXSY.jpg?quality=80&smart=true&auth=a683450435a1c037d31abd69b4588ea76bf2a99249eb4a23fde8e4897d2eb1a5&width=1023&height=682' }}
            style={styles.imageSmall}
            resizeMode="cover"
          />
          <Text style={styles.artistName}>MANUEL TURIZO</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Agregar a la Playlist"
          color="#FF5733"
          onPress={handlePlaylistPress}
        />
        <Button
          title="Favoritos"
          color="#FF5733"
          onPress={handleFavoritesPress}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  artistName: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  imageSmall: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 30,
  },
});
