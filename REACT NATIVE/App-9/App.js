import React from 'react';
import { View, Linking, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Button, Avatar } from 'react-native-paper';

const App = () => {
  const openSpotify = (url) => {
    Linking.openURL(url);
  };

  const openInfoPage = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Artista N°1"
          subtitle="Género Musical: Reguetón, Trap, Pop"
          left={(props) => <Avatar.Icon {...props} icon="music" />}
        />
        <Card.Content>
          <Text style={styles.name}>
            Ozuna
            </Text>
          <Text style={styles.description}>
          Juan Carlos Ozuna Rosado, conocido simplemente como Ozuna, es un cantante, compositor, actor y deportista puertorriqueño de ascendencia dominicana.         </Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: 'https://e.radio-grpp.io/normal/2022/02/25/541754_1223142.jpg' }}
          style={styles.image}
        />
        <Card.Actions style={styles.actions}>
          <Button mode="contained" onPress={() => openSpotify('https://open.spotify.com/intl-es/artist/1i8SpTcr7yvPOmcqrbnVXY')}>Spotify</Button>
          <Button mode="outlined" onPress={() => openInfoPage('https://es.wikipedia.org/wiki/Ozuna')}>Más Info</Button>
        </Card.Actions>
      </Card>



      <Card style={styles.card}>
        <Card.Title
          title="Artista N°2"
          subtitle="Género Musical: Reguetón, R&B, Pop"
          left={(props) => <Avatar.Icon {...props} icon="music" />}
        />
        <Card.Content>
          <Text style={styles.name}>
            Rauw Alejandro
            </Text>
          <Text style={styles.description}>
          Raúl Alejandro Ocasio Ruiz, conocido artísticamente como Rauw Alejandro, es un cantante, compositor y productor discográfico puertorriqueño. Pertenece a la «nueva generación» de artistas puertorriqueños.​          </Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: 'https://www.billboard.com/wp-content/uploads/2024/11/Rauw-Alejandro-cr-Marco-Perretta-2024-billboard-1548.jpg?w=942&h=623&crop=1' }}
          style={styles.image}
        />
        <Card.Actions style={styles.actions}>
          <Button mode="contained" onPress={() => openSpotify('https://open.spotify.com/intl-es/artist/1mcTU81TzQhprhouKaTkpq')}>Spotify</Button>
          <Button mode="outlined" onPress={() => openInfoPage('https://es.wikipedia.org/wiki/Rauw_Alejandro')}>Más Info</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f8a5a9',
    padding: 16,
    paddingTop: 20,
  },
  card: {
    width: '95%',
    marginVertical: 10,
    borderRadius: 10,
    shadowOpacity: 0.8,
    overflow: 'hidden',
  },
  image: {
    height: 150,
    width: 300,
    marginHorizontal: 'auto'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 8,
    textAlign: 'justify'
  },
  actions: {
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default App;